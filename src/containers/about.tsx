"use client";
import { getStatistics } from '@/app/constants/statistics'
import Container from '@/components/container'
import { SectionTitle } from '@/components/section-title'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRightCircle, Headphones } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { DotsElement } from '@/components/dots-element'

const AboutSection = () => {
  const {statistics} = getStatistics();

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
      // observer.observe(showRight.current);
    }
  }
  useEffect(()=> {
    handelRavale();
  })

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [])
  if (!isClient) {return null;}

  return (
    <Container id='about' className='relative'>
      <DotsElement className={"-top-4 -left-3"}/>
      <DotsElement className={"bottom-0 -right-3 -translate-y-[50%]"}/>
      <SectionTitle title="About me" description="A quick introduction about me" className="mb-5"/>
      <section className="relative">
        <article className='relative mx-auto bg-background/90 p-6 md:grid md:grid-cols-9 gap-4 min-h-[300px] parent-observe' ref={show}>
          <div className='col-span-3 mb-5 md:mb-0 relative -translate-x-[200%] show-observe'>
            <div className='w-fit h-fit m-auto cover-image relative shadow-xl shadow-primary/10'>
              <Image src={"/avatar.jpeg"} alt='image' width={250} height={300} className='z-[2]'/>
            </div>
          </div>
          <div className='col-span-6 ml-3 md:flex md:justify-between md:flex-col translate-x-[200%] show-observe'>
            <div>
              <div>
                <h3 className="text-primary font-bold tracking-wide text-xl md:text-3xl -ml-2">About</h3>
              </div>
              <p>I am currently studying at the Faculty of Computer Science. I learned programming through some websites and programs approved on the Internet before entering college.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center md:items-end mt-5'>
              {statistics.map((statistic, index)=> {
                const {title, value, label, icon:Icon} = statistic;
                return (
                  <div key={index} className='flex flex-col items-center border p-3 rounded-xl shadow-xl shadow-primary/10 translate-x-[230%] mb-2 hover:mb-0 transition duration-75 show-observe'>
                    <Icon className='size-7 font-normal text-primary/85 ' />
                    <p className='font-semibold mt-1'>{title}</p>
                    <p className=''>{value + " + " + label}</p>
                  </div>
                );
              })}
              <a href="#skills" className={cn(buttonVariants({size: "lg"}), "shadow-xl shadow-primary/15 show-observe")}>
                <span>discover skills</span>
                <ArrowRightCircle className='size-4'/>
              </a>
            </div>
          </div>
        </article>
      </section>
    </Container>
  )
}

export default AboutSection
