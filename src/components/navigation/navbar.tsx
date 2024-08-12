import { navLinks } from "@/app/constants/nav-links"
import { ModeToggle } from "./mode-toggle"
import Logo from "./logo"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 py-2 md:py-4 border-b w-full bg-background/60 backdrop-blur-md z-50">
        <div className="container flex items-center justify-between">
             <Logo />
             <nav className="hidden md:flex items-center gap-x-4">
                {navLinks.map((link, index) =>(
                    <a key={index} href={link.href} className="capitalize p-1 font-medium hover:text-foreground transition line-effect relative">
                        {link.title}
                    </a>
                ))}
             </nav>
             <ModeToggle />
        </div>
      
    </header>
  )
}

export default Navbar
