import { NavLink } from "@/components/types/interfaces";
import { Book, MessageSquareText, School, User, Wrench } from "lucide-react";

export const navLinks: NavLink[] = [
    {
        title: "about",
        href: "#about",
        icon: User
    },
    {
        title: "education",
        href: "#education",
        icon: School
    },
    {
        title: "skills",
        href: "#skills",
        icon: Wrench
    },
    {
        title: "projects",
        href: "#projects",
        icon: Book
    },
    {
        title: "contant",
        href: "#contant",
        icon: MessageSquareText
    },
]