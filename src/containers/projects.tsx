
import { SectionTitle } from '@/components/section-title'
import projectApi from '@/utils/project-api';
import PorjectItem from '@/components/project/project-item';
import Container from '@/components/container';

import { getProjects } from '@/lib/projects';

const ProjectsSection = async () => {

  const projects = await getProjects();

  return (
    <>
      <div className="spikes"></div>
      <Container id='projects' className="bg-muted">
        <section id='projects' className='relative'>
          <SectionTitle title='projects' description="some things i've built" className='mb-6'/>
          <div className="grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index)=> (
              <PorjectItem key={index} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}

export default ProjectsSection
