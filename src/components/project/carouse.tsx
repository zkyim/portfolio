"use client";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";

interface CarouseProps {
    images: any[];
}

const Carouse: React.FC<CarouseProps> = ({
    images
}) => {
    const [currentImage, setCurrentImage] = useState(urlFor(images[0]));
    const [openedImage, setOpenedImage] = useState(urlFor(images[0]));
  return (
    <div className="flex flex-col space-y-2">
        <div className="relative w-full aspect-video">
            <Image 
                src={currentImage} 
                alt="image"
                width={500}
                height={500}
                className="object-cover w-full"
            />
        </div>
        <div className="grid grid-cols-4 gap-2 pb-6" >
            {images.map((image, index) => {
                return (
                    <Suspense key={index} fallback={<Loader />}>
                        <div className={cn("relative w-full min-h-20 max-h-35 overflow-hidden border border-2 border-black/40 hover:border-black rounded-md aspect-square", openedImage == urlFor(image) && "border-black")}>
                            <Image 
                                fill
                                src={urlFor(image)}
                                alt="image"
                                onClick={()=>{setCurrentImage(urlFor(image)); setOpenedImage(urlFor(image)) }}
                                className={cn("object-cover opacity-90 hover:opacity-100 hover:scale-105 cursor-pointer transition", openedImage == urlFor(image) && "opacity-100")}
                            />
                        </div>
                    </Suspense>
                );
            })}
        </div>
    </div>
  )
}

export default Carouse
