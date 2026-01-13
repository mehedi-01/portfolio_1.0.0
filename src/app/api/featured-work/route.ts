import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Shubheccha App Redesign",
        description: "Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.",
        roles: ["Role : Team lead  UI/UX Designer"],
        image: "/images/feature-work/1.png"
    },
    {
        title: "Brand Identity for a Health Care Company",
        description: "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
        roles: ["Role : Lead  UI/UX Designer"],
        image: "/images/feature-work/Cover Page.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};