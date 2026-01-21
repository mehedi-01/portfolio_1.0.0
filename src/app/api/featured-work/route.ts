import { link } from "fs";
import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Shubheccha App Redesign",
        description: "Redesigned a mobile application to enhance user engagement and streamline financial management through intuitive design and user-centric features.",
        roles: ["Role : Team lead  UI/UX Designer"],
        image: "/images/feature-work/1.png",
        link: "https://www.behance.net/gallery/237557517/Shubheccha-App-Redesign-and-Case-Study",

    },
    {
        title: "Rocket Fintech App Redesign",
        description: "Redesigned a fintech mobile application to enhance user engagement and streamline financial management through intuitive design and user-centric features.",
        roles: ["Role : Lead  UI/UX Designer"],
        image: "/images/feature-work/Cover Page.png",
        link: "https://www.behance.net/gallery/239608561/Rocket-Fintech-App-Redesign-Case-Study",
    },
    {
        title: "Smart Helmet App Design",
        description: "Designed a mobile application interface for a smart helmet, focusing on safety features and user experience to enhance rider protection and connectivity.",
        roles: ["  UI Design"],
        image: "/images/feature-work/f.png",
        link: "https://www.behance.net/gallery/241952457/One-life-One-helmet-Zero-distractions",
    },
    {
        title: "Fashion E-Commerce App UI Design",
        description: "Created a sleek and modern user interface for a fashion e-commerce mobile application, emphasizing ease of navigation and an engaging shopping experience.",
        roles: ["UI Design"],
        image: "/images/feature-work/fashion.png",
        link: "https://www.behance.net/gallery/239093831/Minimal-fashion-app-UI-with-smooth-flow-and-style-vibes",
    },

    {
        title: "Skynova  Real Estate Website UI Design",
        description: "Developed a user-friendly and visually appealing interface for a real estate website, focusing on seamless property browsing and enhanced user interaction.",
        roles: ["UI Design"],
        image: "/images/feature-work/Group.png",
        link: "https://www.behance.net/gallery/242625973/Skynova-Real-Estate-Website-UIUX-Design",
    },

    {
        title: "Modern Fashion Shopping App UI Design",
        description: "Created a sleek and modern user interface for a fashion e-commerce mobile application, emphasizing ease of navigation and an engaging shopping experience.",
        roles: ["UI Design"],
        image: "/images/feature-work/ins.png",
        link: "https://www.behance.net/gallery/242404057/Modern-Fashion-Shopping-App-UI",
    },
    
    {
        title: "My Canvas , Your forever space for everything you are.",
        description: "An innovative app designed to be a personal space for users to express themselves, organize their thoughts, and showcase their creativity in a seamless digital environment.",
        roles: ["UI Design"],
        image: "/images/feature-work/drib.png",
        link: "https://www.behance.net/gallery/242194093/Your-forever-space-on-the-internet",
    },

        {
        title: "Smart Home UI Kit Design",
        description: "A comprehensive UI kit designed for smart home applications, featuring modern and intuitive components to enhance user interaction and control over smart devices.",
        roles: ["UI Design"],
        image: "/images/feature-work/air.png",
        link: "https://www.behance.net/gallery/241700553/Smart-Living-Simplified-Premium-Smart-Home-UI-Kit",
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};