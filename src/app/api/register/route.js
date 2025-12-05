import { google } from "googleapis";

export async function POST(req) {
    try {
        const form = await req.formData();

        const jsonData = JSON.parse(form.get("data") || "{}");

        // Google Auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Define EXACT fields in correct Google Sheet column order:
        const safe = (v) => (v === undefined || v === null ? "" : v);

        const row = [
            safe(jsonData["first-name"]),
            safe(jsonData["last-name"]),
            safe(jsonData["email"]),
            safe(jsonData["dial-code"]),
            safe(jsonData["phone"]),
            safe(jsonData["country"]),
            safe(jsonData["age"]),
            safe(jsonData["gender"]),
            safe(jsonData["street-address"]),
            safe(jsonData["city"]),
            safe(jsonData["region"]),
            safe(jsonData["postal-code"]),
            safe(jsonData["highest-qualification"]),
            safe(jsonData["field-of-study"]),
            safe(jsonData["institution-name"]),
            safe(jsonData["year-of-passing"]),
            safe(jsonData["academic-status"]),  // now empty string instead of crashing
            safe(jsonData.eventType),

            safe(jsonData["stall-name"]) || "",
            safe(jsonData["development-stage"]) || "",
            safe(jsonData["stall-team"]) || "",
            safe(jsonData["project-title"]) || "",
            safe(jsonData["project-category"]) || "",
            safe(jsonData["project-short"]) || "",
            safe(jsonData["project-detail"]) || "",
            safe(jsonData["role"]) || "",
            safe(jsonData["project-drive-link"]) || "",
        ];


        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            range: "Sheet1!A:Z",
            valueInputOption: "RAW",
            requestBody: { values: [row] },
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error("Google Sheets Error:", err);
        return Response.json({ success: false, error: err.message }, { status: 500 });
    }
}
