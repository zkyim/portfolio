import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import HomeSection from "@/containers/home";
import ProjectsSection from "@/containers/projects";
import SkillsSection from "@/containers/skills";
import ScrollToTop from "@/containers/scroll-to-top";
import Education from "@/containers/education";


export default function Home() {
  return (
    <>    
      <HomeSection />
      <AboutSection />
      <Education />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
    </>
  );
}
