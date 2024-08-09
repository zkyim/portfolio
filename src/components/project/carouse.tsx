"use client";

import { Loader } from "lucide-react";
import Image from "next/image";
import { Suspense, useState } from "react";

interface CarouseProps {
    images: any[];
}

const Carouse: React.FC<CarouseProps> = ({
    images
}) => {
    const [currentImage, setCurrentImage] = useState(images[0].attributes.url);
  return (
    <div className="flex flex-col space-y-2">
        <div className="relative w-full h-full">
            <Image 
                src={"http://localhost:1337"+currentImage} 
                alt="image"
                width={500}
                height={500}
                className="object-cover w-full"
            />
        </div>
        <div className="grid grid-cols-4 gap-2 pb-6">
            {images.map((image, index) => (
                <Suspense key={index} fallback={<Loader />}>
                    <div className="relative w-full min-h-20 max-h-35 overflow-hidden">
                        <Image 
                            fill
                            src={"http://localhost:1337"+image.attributes.url} 
                            alt="image"
                            onClick={()=>setCurrentImage(image.attributes.url)}
                            className="object-cover opacity-60 hover:opacity-100 hover:scale-110 cursor-pointer transition" 
                        />
                    </div>
                </Suspense>
            ))}
        </div>
    </div>
  )
}

export default Carouse
