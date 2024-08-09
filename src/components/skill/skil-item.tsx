"use client";
import { useEffect, useState } from 'react'
import { Progress } from '../ui/progress';

interface SkilItemProps {
    item: any;
}

const SkilItem: React.FC<SkilItemProps> = ({
    item,
}) => {
    const [progress, setProgress] = useState<number>(0)
 
    useEffect(() => {
      const timer = setTimeout(() => setProgress(item.attributes.percentage), 350)
      return () => clearTimeout(timer)
    }, [])
  return (
    <article className='grid gap-2'>
        <div className='flex items-center justify-between gap-8 px-4'>
            <h4 className='capitalize text-foreground'>{item.attributes.skill}</h4>
            <h4 className='text-primary'>%{item.attributes.percentage}</h4>
        </div>
        <Progress value={progress} className='h-1.5 shadow-xl shadow-primary-foreground'/>
    </article>
  )
}

export default SkilItem
