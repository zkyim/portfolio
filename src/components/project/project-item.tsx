import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Carouse from "./carouse";
import { Separator } from "../ui/separator";
import InfoItem from "./info-item";
import { Calendar, Eye, Github, LayoutDashboard, Tags } from "lucide-react";
import { buttonVariants } from "../ui/button";
import ProjectCard from "./project-card";
import { urlFor } from "@/sanity/lib/image";


interface PorjectItemProps {
    project: any;
}

const PorjectItem: React.FC<PorjectItemProps> = ({
    project
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ProjectCard imageUrl={urlFor(project.images[0])} item={project}/>
      </DialogTrigger>
      
      <DialogContent className="p-0 sm:max-w-[90%] sm:max-h-[90%]">
        <DialogHeader className="bg-muted p-4 md:p-6">
          <DialogTitle className="text-foreground capitalize text-xl font-semibold truncate">{project.title}</DialogTitle>          
        </DialogHeader>
          <div className="grid lg:grid-cols-2 gap-4 p-4 max-h-[68vh] overflow-x-hidden overflow-y-auto">
            <Carouse images={project.images} />
            <div className="space-y-4 lg:space-y-6 p-2 lg:p-4 size-full">
              <p className="text-sm">{project.description}</p>
              <Separator />
              <article className="space-y-2 lg:space-y-3">
                <InfoItem icon={Calendar} label="puplished">
                  <p className="font-semibold">{project.publishedAt}</p>
                </InfoItem>
                <InfoItem icon={LayoutDashboard} label="layout">
                  <p className="font-semibold">{project.isResponsive ? "resoposive" : "n/a"}</p>
                </InfoItem>
                <InfoItem icon={Tags} label="tags">
                  <p className="flex items-center flex-wrap gap-2">
                    {project.tags.map((tag: any,index: number)=> (
                      <span key={index} className="border rounded-sm py-1 px-2 hover:bg-muted">
                        {tag}
                      </span>
                    ))}
                  </p>
                </InfoItem>
              </article>
              <Separator />
              <div className="flex items-center gap-2">
                    <a href={project.demoLink} className={buttonVariants()} target="_blank">
                      <Eye className="size-4" />
                      <span>view demo</span>
                    </a>
                    <a href={project.githubLink} className={buttonVariants({variant: "outline"})} target="_blank">
                      <Github className="size-4" />
                      <span>source code</span>
                    </a>
              </div>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  )
}

export default PorjectItem
