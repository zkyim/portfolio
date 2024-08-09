/* eslint-disable react/no-unescaped-entities */
"use client";
import { socialLinks } from "@/app/constants/social-links"
import Container from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from 'react'

const HomeSection = () => {
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
    <Container className="bg-muted pt-48">

      <section className="grid md:grid-cols-12 items-center gap-6 parent-observe" ref={show}>
        
        <ul className="flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl -translate-y-[100%] show-observe">
          {socialLinks.map((link, index)=> {
            const {href, icon:Icon} = link;
            return (
              <li key={index} className="hover:text-primary">
                <a href={href}>
                  <Icon className="size-4"/>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4 -translate-y-[130%] show-observe">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground capitalize">
            hi, i'm <span className="typewriter-effect text-primary relative inline-block">MOHAMMED</span>
          </h2>
          <h5 className="text-xl md:text-2xl font-semibold capitalize">
            frontend developer
          </h5>
          <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start">
          Beginner in frontend developer web site and development knowledge,but producing quality work.
          </p>
          <div className="flex items-center gap-2 py-2">
            <a href="#projects" className={cn(buttonVariants({size: "lg"}), "shadow-xl shadow-primary/15")}>
              <span>my works</span>
              <ArrowRightCircle className="size-4" />
            </a>
            <a href="" className={buttonVariants({variant: "outline",size: "lg"})} target="_blank" download={true}>
              <span>download CV</span>
              <Download className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-5 grid place-content-center -translate-y-[160%] show-observe">
          <div className="relative flex items-center justify-center size-80 md:size-96 rotate-ring">
            <Image width={400} height={400} alt="prfile" src={"/avatar.jpeg"} 
              className="object-cover size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background shadow-xl shadow-primary/10"
            />

          </div>
        </div>
      </section>
    </Container>
  )
}

export default HomeSection
