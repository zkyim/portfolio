"use client";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Container from '@/components/container';
import { SectionTitle } from '@/components/section-title';
import { DotsElement } from '@/components/dots-element';

function ContactSection() {
  const [state, handleSubmit] = useForm("xkgwwdjp");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorForm, setErrorForm] = useState('');

  const handleSubmiting = (e: any) => {
    if ((textareaRef.current && textareaRef.current.value.length === 0) || (inputRef.current && inputRef.current.value.length === 0)) {
      e.preventDefault();
      setErrorForm("All fields are required .")
    }else if ((textareaRef.current && textareaRef.current.value.length > 0) && (inputRef.current && inputRef.current.value.length > 0)) {
      setErrorForm("");
    }
  };

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
      <Container id='contant' className='relative'>
        <DotsElement className={"top-0 -right-3 -translate-y-[50%]"}/>
        <SectionTitle title='contact Us' description="Contact Us if you have a question ." className='mb-6'/>
        <div className='md:grid md:grid-cols-2 md:gap-3 parent-observe' ref={show}>
          <div>
            <form onSubmit={handleSubmit} className='mx-auto max-w-[350px] '>
              <div className='p-2 text-red-600'>
                {errorForm.length > 0 ? <div className='flex items-center -ml-5'> <Image src={"/x-mark.gif"} width={55} height={55} alt='image' /> {errorForm} </div> : ""}
              </div>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder='Email Address ...'
                className='outline-none border w-full px-4 py-2 rounded-md mb-3 shadow-xl shadow-primary/5 -translate-x-[200%] show-observe'
                ref={inputRef}
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                placeholder='Subject ...'
                className='outline-none block border w-full px-4 py-2 rounded-md mb-3 min-h-[120px] shadow-xl shadow-primary/5 -translate-x-[230%] show-observe'
                ref={textareaRef}
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              <Button type="submit" className='shadow-xl shadow-primary/15 -translate-x-[260%] show-observe' disabled={state.submitting || state.succeeded} onClick={(e) => handleSubmiting(e)}>
                {state.submitting ? "Submiting ..." : state.succeeded ? "Submited" : "Submit"}
              </Button>
              {state.succeeded ? <div className='flex items-center text-green-400 mt-3'> <Image src={"/Animation - 1723161105485.gif"} alt={"image"} width={45} height={45} /> Thanks for joining!</div> : <div></div>}
            </form>
          </div>
          <div className='hidden md:block '>
            <div className='w-full'>
              <div className='relative mx-auto max-w-[300px] max-h-[300px] translate-x-[200%] show-observe'>
                <Image 
                  alt='image'
                  width={400}
                  height={400}
                  src="/email-marketing-7579810_1280.png"
                  className='object-cover rounded-full ring-2  shadow-2xl shadow-primary/25'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ContactSection;
