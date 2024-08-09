"use client"
import Container from "@/components/container"
import { SectionTitle } from "@/components/section-title"
import { ChevronsUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import eductionApi from '@/utils/eduction-api';

const Education = () => {
    const [educations, setEducations] = useState<any>([]);
    useEffect( ()=> {
        eductionApi.getEductions().then(res=> {
          setEducations(res.data.data);
      })
    }, [])
    const ulRef = useRef<any>(null);
    const [progress, setProgress] = useState<number | string>(100);
    useEffect(()=> {
        lineTimeEffect();
    })
    const lineTimeEffect = () => {
        const startSection = 300;
        window.onscroll = () => {
            // && Number(((window.scrollY - (ulRef.current?.offsetTop - startSection)) / ulRef.current?.scrollHeight * 100).toFixed(1)) <= 110
            if (window.scrollY >= (ulRef.current?.offsetTop - startSection) ) {
                ulRef.current?.children[0]
                let heightValue: number | string = 100 - Number(((window.scrollY - (ulRef.current?.offsetTop - startSection)) / ulRef.current?.scrollHeight * 100).toFixed(1));
                setProgress(heightValue);
            }
            for (let i = 1; i < ulRef.current?.children.length; i++) {
                if (ulRef.current?.children[i].getBoundingClientRect().top - startSection <= 0) {
                    ulRef.current?.children[i].classList.add("active");
                }else {
                    ulRef.current?.children[i].classList.remove("active");
                }
            }
        }
    }

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
    <> 
        <div className="spikes"></div>
        <Container id="education" className="bg-muted">
            <SectionTitle title="education" description="my education" className="mb-6"/>
            <div className="flex justify-start lg:justify-center parent-observe" ref={show}>
                <ul className="time-line relative" ref={ulRef}>
                    <span className="muted-line bg-border dark:bg-background" style={{height: `${progress}%`}}/>
                    {educations.map( (education:any, index:number) => {
                      return (
                        <li className="relative w-1 py-2" key={index}>
                          <span className="the-line"></span>
                          <div className="relative w-[320px] md:w-[400px] border top-0 shadow-xl shadow-primary/10 rounded-md py-3 pt-4 px-6 mt-2 show-observe">
                              <span className="date absolute top-0 translate-y-[-50%] py-1 px-3 bg-green-400 rounded-md text-white text-sm shadow-lg shadow-green-400/15">{education?.attributes?.date}</span>
                              <h3 className="text-foreground text-xl"> {education?.attributes?.title} </h3>
                              <p className="text-[15px] mt-1">{education?.attributes?.description}</p>
                          </div>
                          <span className="circle-eduction text-black dark:text-white border border-2 border-border dark:border-background"></span>
                      </li>
                      );
                    })}
                    <a className="last-circle text-black dark:text-white border border-2 border-border dark:border-background" href="#education">
                        <ChevronsUp className=""/>
                    </a>
                </ul>
            </div>
        </Container>
    </>
  )
}

export default Education
