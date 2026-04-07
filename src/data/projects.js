export const projects = [
    {
        slug: "last-man-standing",
        title: "Last Man Standing",
        subtitle: "Rogue-like arena fighter built with Flutter + Flame.",
        tech: ["Flutter", "Flame", "State management", "Persistence"],
        links: {
            github: "https://github.com/Ryley-Cote",
            demo: null, // add later
        },
        sections: [
            {
                heading: "Overview",
                body:
                    "A rogue-like arena fighter focused on modular combat, UI overlays, and progression. Continued development beyond coursework.",
            },
            {
                heading: "Highlights",
                bullets: [
                    "Modular combat loop and progression systems",
                    "UI overlay flows (menus, HUD, transitions)",
                    "Focus on maintainable state + iteration speed",
                ],
            },
            {
                heading: "Roadmap",
                bullets: ["Add a short demo video", "More screenshots/GIFs", "More content + balance tweaks"],
            },
        ],
    },
    {
        slug: "elections-alberta-capstone",
        title: "Elections Alberta Capstone (Confidential)",
        subtitle: "Enterprise-style capstone work (no code/screenshots permitted).",
        tech: [".NET", "Razor/MudBlazor", "SQL Server", "SSO/Auth concepts"],
        links: {
            github: null,
            demo: null,
        },
        sections: [
            {
                heading: "Confidentiality",
                body:
                    "Due to confidentiality restrictions, I can’t share code, screenshots, database design, or system UI. I’m happy to discuss my contributions and approach in an interview.",
            },
            {
                heading: "What I Worked On (High Level)",
                bullets: [
                    "Reusable UI components and form patterns",
                    "Validation and user-friendly error handling",
                    "Auth/role-aware UI behavior (high-level)",
                    "Team workflow: stories, review, delivery",
                ],
            },
        ],
    },
    {
        slug: "design-lookbook",
        title: "Design Lookbook",
        subtitle: "A visual collection of UI/web designs (Figma exports).",
        tech: ["Figma", "UI Design", "Responsive layout"],
        links: {
            figma: null, // optional
        },
        lookbook: [
            // Put images in /public/design/...
            // Recommended: 1400–2400px wide PNGs
            {
                src: "/design/placeholder-1.png",
                alt: "Landing page design — desktop",
                label: "Landing — Desktop",
                tags: ["Landing", "Desktop"],
            },
            {
                src: "/design/placeholder-2.png",
                alt: "Landing page design — mobile",
                label: "Landing — Mobile",
                tags: ["Landing", "Mobile"],
            },
            {
                src: "/design/placeholder-3.png",
                alt: "Dashboard design — desktop",
                label: "Dashboard — Desktop",
                tags: ["Dashboard", "Desktop"],
            },
        ],
    }
];