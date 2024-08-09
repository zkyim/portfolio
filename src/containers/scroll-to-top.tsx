"use client"

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronsUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isDverScreen, setIsDverScreen] = useState(false);
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            setIsDverScreen(window.scrollY > 80);
        })
    }, [])
  return (
    <Button
        size="icon"
        className={cn("fixed bottom-12 md:bottom-8 right-2 md:right-4 transition-transform duration-300 z-[99] group",
            !isDverScreen && "opacity-0 translate-y-6 pointer-events-none"
        )}
        onClick={()=>window.scrollTo(0, 0)}
    >
        <ChevronsUp className='group-hover:mb-2 transition-[1s]'/>
    </Button>
  )
}

export default ScrollToTop
