"use client"
import { SectionTitle } from '@/components/section-title'
import { useEffect, useState } from 'react'
import projectApi from '@/utils/project-api';
import PorjectItem from '@/components/project/project-item';
import Container from '@/components/container';
import { DotsElement } from '@/components/dots-element';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  useEffect( ()=> {
    projectApi.getProjects().then(res=> {
      setProjects(res.data.data);
    })
  }, [])

  return (
    <>
      <div className="spikes"></div>
      <Container id='projects' className="bg-muted">
        <section id='projects' className='relative'>
          <SectionTitle title='projects' description="some things i've built" className='mb-6'/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index)=> (
              <PorjectItem key={index} projec={project} />
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}

export default ProjectsSection
