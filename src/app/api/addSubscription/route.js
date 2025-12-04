import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
    const { email } = await request.json();

    if (!email) {
        return new Response(
            JSON.stringify({ error: "Email is required" }),
            { status: 400 }
        );
    }

    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    if (!audienceId) {
        return new Response(
            JSON.stringify({ error: "Mailchimp audience ID is not configured" }),
            { status: 500 }
        );
    }

    try {
        const res = await mailchimp.lists.addListMember(
            audienceId,
            { email_address: email, status: "subscribed" }
        );

        return new Response(JSON.stringify({ res }));
    } catch (error) {
        let parsed;
        try {
            parsed = error && error.response && error.response.text
                ? JSON.parse(error.response.text)
                : { message: String(error) };
        } catch (e) {
            parsed = { message: String(error) };
        }
        return new Response(
            JSON.stringify({ error: parsed }),
            { status: 500 }
        );
    }
}