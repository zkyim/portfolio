import { TabItem } from "@/components/types/interfaces";
import { AppWindow, PencilRuler, TerminalSquare } from "lucide-react";

export const tabItem: TabItem[] = [
    {
        title: "FRONTEND",
        value: "More than "+(new Date().getFullYear() - 2022)+" years",
        icon: AppWindow,
        label: "Frontend",
    },
    {
        title: "BACKEND",
        value: "More than "+(new Date().getFullYear() - 2022)+" years",
        icon: TerminalSquare,
        label: "Backend",
    },
    {
        title: "TOOLS",
        value: "More than "+(new Date().getFullYear() - 2022)+" years",
        icon: PencilRuler,
        label: "Tools",
    },
]