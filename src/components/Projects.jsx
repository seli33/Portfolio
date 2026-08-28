import { projects } from '../data'
import { Reveal } from './Reveal'

function ProjectItem({ project, index }) {
  const num = String(index + 1).padStart(2, '0')
  const isFeatured = index === 0
  const href = project.links?.live || project.links?.github

  return (
    <article className={`project-item${isFeatured ? ' featured' : ''}`}>
      <div className="project-head">
        <span className="project-num">{num}</span>
        <h3 className="project-title">{project.title}</h3>
      </div>
      <div className="project-meta">
        <div>
          <p className="project-desc">{project.description}</p>
          <p className="project-tech">
            <span aria-hidden="true">// </span>
            {project.tech.join(' · ')}
          </p>
        </div>
        {href && (
          <div className="project-side">
            <a href={href} target="_blank" rel="noreferrer" className="project-cta">
              View project
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">
              <span className="rule" aria-hidden="true" />
              Projects
            </span>
            <h2>Selected work.</h2>
          </div>
        </Reveal>
        <div className="projects-list">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 40}>
              <ProjectItem project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
