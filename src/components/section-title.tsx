"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    description,
    className,
    ...props
}) => {
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
        <div
            ref={show}
            className={cn("flex flex-col gpa-y-1 md:gap-y-2 items-center capitalize parent-observe show-observe -translate-y-[50%]",className)}
            {...props}
        >
                <h3 className="relative text-primary font-bold tracking-wide text-xl md:text-3xl z-[1] text-shadow-primary">
                    {title}
                    <span className="absolute bottom-[20%] -translate-x-[50%] left-[50%] text-gray-300 text-nowrap text-4xl md:text-6xl -z-[1]">{title}</span>
                </h3>
                <h5 className="font-semibold pl-1 text-shadow-foreground">{description}</h5>
        </div>
    )
}