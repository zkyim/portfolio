import { navLinks } from "@/app/constants/nav-links"


const MobileNav = () => {
  return (
    <div className="flex border-t rounded-t-lg shadow-md md:hidden fixed bottom-0 left-0 w-full py-4 bg-background/60 backdrop-blur-md z-[100]">
        <nav className="container flex items-center justify-evenly">
            {navLinks.map((link, index) => {
                const {title, href, icon: Icon} = link;
                return (
                    <a key={index} href={href} className="size-10 p-2 grid place-content-center">
                        <div className="flex flex-col items-center transition gap-y-1 hover:text-primary">
                            <Icon className="size-4"/>
                            <span className="text-[12px] capitalize font-semibold">{title}</span>
                        </div>
                    </a>
                );
            })}
        </nav>
    </div>
  )
}

export default MobileNav
