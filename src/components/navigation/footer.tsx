import { socialLinks } from "@/app/constants/social-links";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-x mb-[70px] md:mb-0 md:pd-4">
      <div className="container py-3 flex flex-col md:flex-row items-center justify-between gap-y-4 px-14">
        <p className="text-sm">
            Copyright &copy; {currentYear}, All Rights Reserved.
        </p>
        <div className="flex items-center gap-2">
            {socialLinks.map((socialLink, index) =>{
                const {href,icon:Icon} = socialLink;
                return (
                    <a key={index} href={href} target="_blank" className={cn(buttonVariants({variant: "outline", size: "icon"}),"rounded-full")}> 
                        <Icon className="size-4"/>
                    </a>
                );
            })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
