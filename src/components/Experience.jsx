import { experience } from '../data'
import { Reveal } from './Reveal'

function yearLabel(period) {
  const parts = period.split('–').map((s) => s.trim())
  const start = parts[0]
  const startYear = start.match(/(\d{4})/)?.[1]
  if (parts.length === 1) return startYear || start
  if (/present/i.test(parts[1])) return `${startYear} — Present`
  const endYear = parts[1].match(/(\d{4})/)?.[1]
  return `${startYear || start} — ${endYear || parts[1]}`
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">
              <span className="rule" aria-hidden="true" />
              Experience
            </span>
            <h2>Where I&rsquo;ve worked.</h2>
          </div>
        </Reveal>
        <div className="experience-list">
          {experience.map((job, i) => (
            <Reveal key={`${job.role}-${job.company}`} delay={i * 40}>
              <article className="exp-item">
                <div className="exp-years">{yearLabel(job.period)}</div>
                <div>
                  <h3 className="exp-role">{job.role}</h3>
                  <div className="exp-company">{job.company}</div>
                  <ul className="exp-points">
                    {job.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
