import { LucideIcon } from "lucide-react";

export interface SocialLink {
    href: string;
    icon: LucideIcon;
}

export interface NavLink extends SocialLink {
    title: string;
}

export interface Statistic {
    title: string;
    label: string;
    value: number | string;
    icon: LucideIcon
}

export type SkillCategory = "FRONTEND" | "BACKEND" | "TOOLS";


export interface TabItem {
    title: SkillCategory;
    value: string;
    icon: LucideIcon;
    label: string;
}

export interface Skills {
    
}