import { useState } from 'react'
import { SectionShell } from '../components/SectionShell'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { Button } from '../components/Button'
import { motion, AnimatePresence } from 'framer-motion'

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const visibleProjects = isExpanded ? projects : projects.slice(0, 4)

  return (
    <SectionShell id="projetos">
      <SectionHeading
        eyebrow="Destaques"
        title="Projetos"
        description="Seleção de trabalhos com foco em produto, performance e boa experiência."
      />
      <motion.div layout className="grid gap-8 lg:grid-cols-2">
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {projects.length > 4 && (
        <div className="mt-12 flex justify-center">
          <Button onClick={() => setIsExpanded(!isExpanded)} variant="secondary">
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </Button>
        </div>
      )}
    </SectionShell>
  )
}
