import { google } from "googleapis";

export async function POST(req) {
    try {
        const formData = await req.formData();

        const jsonData = JSON.parse(formData.get("data"));
        const file = formData.get("file");

        // Authenticate Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const drive = google.drive({ version: "v3", auth });

        // Upload File to Drive
        let fileLink = "No file uploaded";

        if (file) {
            const buffer = Buffer.from(await file.arrayBuffer());

            const uploadRes = await drive.files.create({
                requestBody: {
                    name: file.name,
                    mimeType: file.type,
                },
                media: {
                    mimeType: file.type,
                    body: buffer,
                },
            });

            const fileId = uploadRes.data.id;

            // Make File Public
            await drive.permissions.create({
                fileId,
                requestBody: { role: "reader", type: "anyone" },
            });

            fileLink = `https://drive.google.com/file/d/${fileId}/view`;
        }

        const sheets = google.sheets({ version: "v4", auth });

        // Append form data as a new row
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            range: "Sheet1!A:Z", // adjust if needed
            valueInputOption: "RAW",
            requestBody: {
                values: [
                    ...Object.values(jsonData),
                    jsonData.eventType,
                    fileLink,
                ],
            },
        });

        return Response.json({ success: true, fileLink });
    } catch (err) {
        console.error("Google Sheets Error:", err);
        return Response.json({ success: false, error: err.message }, { status: 500 });
    }
}
