import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import HomeSection from "@/containers/home";
import ProjectsSection from "@/containers/projects";
import SkillsSection from "@/containers/skills";
import ScrollToTop from "@/containers/scroll-to-top";
import Education from "@/containers/education";
import Navbar from "@/components/navigation/navbar";
import MobileNav from "@/components/navigation/mobile-nav";
import Footer from "@/components/navigation/footer";


export default function Home() {
  return (
    <>    
      <Navbar />
      <MobileNav />
      <HomeSection />
      <AboutSection />
      <Education />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
      <Footer />
    </>
  );
}
