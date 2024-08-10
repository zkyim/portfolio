import AboutContainer from '@/components/about/about-container';
import { getProjectsLegth } from '@/lib/projects';
import React from 'react'

const AboutSection = async () => {
  const projectsLegth:number = await getProjectsLegth();
  return (
    <AboutContainer projectsLegth={projectsLegth}/>
  );
}

export default AboutSection
