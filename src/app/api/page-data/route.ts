import { Certificate } from "crypto";
import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Assistant manager of IT, Visionary tech solution",
        location: "Dhaka",
        startYear: "Apr 2023",
        endYear: "Nov 2024",
bulletPoints: [
    "Managing IT systems, supervising data operations, leading IT staff, and overseeing budgets to ensure efficient, cost-effective processes.",
]
    },
    
    {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX Works",
        location: "Dhaka",
        startYear: "Sep 2025",
        endYear: "Dec 2026",
        bulletPoints: [
            "Shubheccha App Redesign - Case Study, Role : Team lead UI/UX Designer",
            "Rocket Fintech App Redesign - Case Study, Role : Lead UI/UX Designer",
            "Amader Shishu Donation App Design - Case Study, Role : Team lead UI/UX Designer",
        ]
    },
]

const educationData = [
    {
        date: "Dec 2022",
        title: "B.s.c in Software Engineering",
        subtitle: "Daffodil International University - Ashulia, Dhaka"
    },

    {
        date: "Jan 2017",
        title: "Field of study Education science",
        subtitle: "Rajab Ali Memorial Science College — Sirajganj, Rajshahi"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "UI UX Design Fundamentals ", url: "https://drive.google.com/file/d/1dJAL8-wkx3HPqWt85h7WDGIh5LSSeVT3/view" },
        { name: "HTML, CSS & JavaScript Beginner", url: "https://www.udemy.com/certificate/UC-794f40ea-949f-46a3-aaf7-a4293b8112d5/" },
        { name: "Responsive Web Design", url: "https://www.freecodecamp.org/certification/mehedi-01/responsive-web-design" },
        { name: "Design with Figma + More", url: "#" },
    ],
    certificate: [
        { name: "Shubheccha App Redesign", url: "#" },
        { name: "Rocket Fintech App Redesign", url: "#" },
        { name: "Amader Shishu Donation App Design", url: "#" },
    ],
    sideProjects: [
        { name: "Smart Helmet UI Design", url: "https://www.behance.net/gallery/241952457/One-life-One-helmets-Zero-distractions" },
        { name: "Gridsnap", comingSoon: true },
        { name: "RenTech Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};