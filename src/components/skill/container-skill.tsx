"use client";
import { tabItem } from "@/app/constants/tab-items"
import Container from "@/components/container";
import { SectionTitle } from "@/components/section-title"
import SkillContainer from "@/components/skill/skill-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import skillApis from "@/utils/skill-api"
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Skills as SkillProps } from "../types/interfaces";


const ContainerSkill = ({
    frontEndSkills,
    backEndSkills,
    toolsSkills
}: {
    frontEndSkills: any[];
    backEndSkills: any[];
    toolsSkills: any[];
}) => {
    const [forntend, setForntend] = useState(frontEndSkills);
    const [backend, setBackend] = useState(backEndSkills);
    const [tools, setTools] = useState(toolsSkills);

  
    const show = useRef<any>(null);
    const handelRavale = () => {
      if (show.current) {
        const observer = new IntersectionObserver ((entries)=> {
          entries.forEach((entry)=> {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }else {
              entry.target.classList.remove('show');
            }
          })
        });
        observer.observe(show.current);
      }
    }
    useEffect(()=> {
      handelRavale();
    })
  return (
    <Container id="skills">

    <section className="relative parent-observe" ref={show}>
      <SectionTitle title="skills" description="my technical proficiency" className="mb-5"/>

      <Tabs defaultValue={tabItem[0].title}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
          <TabsList className="md:col-span-2 gap-2 w-full h-fit grid grid-cols-3 md:grid-cols-1">
            {tabItem.map((item,index)=> {
              const {title,value, label, icon: Icon} = item;
              return (
                <TabsTrigger key={index} value={title} className="border border-muted-foreground/40 flex items-center justify-between md:p-6 p-2 font-bold md:text-lg w-full gap-2 shadow-xl shadow-primary/10 -translate-x-[200%] show-observe">
                  <div className="flex flex-row gap-3 items-center">
                    <Icon className="md:size-12 size-4" />
                    <span className="capitalize flex items-start flex-col">
                      <span>{label}</span>
                      <span className="hidden md:block text-muted-foreground text-[10px] -mt-2">{value}</span>
                    </span>
                  </div>
                  <ChevronRight className="hidden md:block"/>
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="md:col-span-3 shadow-xl shadow-primary/10 translate-x-[200%] show-observe">
            <TabsContent value="FRONTEND"><SkillContainer data={forntend} label="forntend"/></TabsContent>
            <TabsContent value="BACKEND"><SkillContainer data={backend} label="backend"/></TabsContent>
            <TabsContent value="TOOLS"><SkillContainer data={tools} label="tools"/></TabsContent>
          </div>
        </div>
      </Tabs>

    </section>
  </Container>
  )
}

export default ContainerSkill
