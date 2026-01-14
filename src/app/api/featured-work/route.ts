import { link } from "fs";
import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Shubheccha App Redesign",
        description: "Redesigned a mobile application to enhance user engagement and streamline financial management through intuitive design and user-centric features.",
        roles: ["Role : Team lead  UI/UX Designer"],
        image: "/images/feature-work/1.png",
        link:"https://www.behance.net/gallery/237557517/Shubheccha-App-Redesign-and-Case-Study",

    },
    {
        title: "Rocket Fintech App Redesign",
        description: "Redesigned a fintech mobile application to enhance user engagement and streamline financial management through intuitive design and user-centric features.",
        roles: ["Role : Lead  UI/UX Designer"],
        image: "/images/feature-work/Cover Page.png",
        link:"https://www.behance.net/gallery/239608561/Rocket-Fintech-App-Redesign-Case-Study",
    },
    {
        title: "Smart Helmet App Design",
        description: "Designed a mobile application interface for a smart helmet, focusing on safety features and user experience to enhance rider protection and connectivity.",
        roles: ["  UI Design"],
        image: "/images/feature-work/f.png",
        link:"https://www.behance.net/gallery/241952457/One-life-One-helmet-Zero-distractions",
    },
        {
        title: "Fashion E-Commerce App UI Design",
        description: "Created a sleek and modern user interface for a fashion e-commerce mobile application, emphasizing ease of navigation and an engaging shopping experience.",
        roles: ["UI Designe"],
        image: "/images/feature-work/fashion.png",
        link:"https://www.behance.net/gallery/239093831/Minimal-fashion-app-UI-with-smooth-flow-and-style-vibes",
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};