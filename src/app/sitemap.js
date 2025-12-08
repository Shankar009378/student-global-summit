export default function sitemap() {
    const baseUrl = "https://studentglobalsummit.com";

    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/register`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
