import { education } from '../data'
import { Reveal } from './Reveal'

const iconByIndex = ['BSc', 'XII']

function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">
              <span className="rule" aria-hidden="true" />
              Education
            </span>
            <h2>Academic background.</h2>
          </div>
        </Reveal>
        <div className="education-list">
          {education.map((edu, i) => (
            <Reveal key={`${edu.school}-${edu.period}`} delay={i * 40}>
              <article className="edu-item">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-school">
                    <strong>{edu.school}</strong>
                    <span aria-hidden="true">
                      {' '}
                      · {iconByIndex[i % iconByIndex.length]}: {edu.detail}
                    </span>
                  </div>
                </div>
                <div className="edu-year">{edu.period}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
