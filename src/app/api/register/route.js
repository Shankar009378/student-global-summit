import { google } from "googleapis";

export async function POST(req) {
    try {
        const body = await req.json();

        // Authenticate Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Append form data as a new row
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            range: "Sheet1!A:Z", // adjust if needed
            valueInputOption: "RAW",
            requestBody: {
                values: [
                    Object.values(body) // row data
                ],
            },
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error("Google Sheets Error:", err);
        return Response.json({ success: false, error: err.message }, { status: 500 });
    }
}
