import Image from "next/image";
import InfoItem from "./info-item";
import { Calendar, Expand, LayoutDashboard, ShowerHead } from "lucide-react";

interface ProjectCardProps {
    item: any;
    imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    item,
    imageUrl
}) => {
  return (
    <div className="w-full">
        <div className="inline-block group my-auto max-w-[350px] rounded-md border shadow-xl shadow-primary/10 dark:bg-black p-3">
            <div className="relative aspect-video rounded-sm w-full overflow-hidden">
                <Image 
                    src={imageUrl}
                    alt="image project"
                    width={450}
                    height={450}
                    className="object-cover transition group-hover:scale-110"
                />
                <div className="absolute -bottom-10 left-0 group-hover:bottom-2 flex w-full items-center justify-center transition-[2.5s]">
                    <span className=" bg-background border p-2 rounded-full">
                        <Expand className="hover:scale-110 size-3"/>
                    </span>
                </div>
            </div>
            <div className="pt-2">
                <div className="text-foreground text-center font-semibold mb-3">{item.title}</div>
                <div className="flex items-center justify-between mb-2">
                    <span className="flex gap-2 items-center text-sm">
                        <Calendar className="size-4" />
                        puplished:
                    </span>
                    <span className="text-foreground text-sm">{item.publishedAt}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="flex gap-2 items-center text-sm">
                        <LayoutDashboard className="size-4" />
                        layout:
                    </span>
                    <span className="text-foreground text-sm">{item.isResponsive ? "resoposive" : "n/a"}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
