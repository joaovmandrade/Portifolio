import { SectionShell } from '../components/SectionShell'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function ProjectsSection() {
  return (
    <SectionShell id="projetos">
      <SectionHeading
        eyebrow="Destaques"
        title="Projetos"
        description="Seleção de trabalhos com foco em produto, performance e boa experiência."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  )
}
