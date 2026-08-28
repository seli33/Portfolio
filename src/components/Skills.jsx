import { skills } from '../data'
import { Reveal } from './Reveal'

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">
              <span className="rule" aria-hidden="true" />
              Skills
            </span>
            <h2>Tools I work with.</h2>
          </div>
        </Reveal>
        <div className="skills-list">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 40}>
              <div className="skill-row">
                <span className="skill-cat">{group.category}</span>
                <p className="skill-tech">
                  {group.items.map((item, idx) => (
                    <span key={item}>
                      {item}
                      {idx < group.items.length - 1 && (
                        <span aria-hidden="true"> · </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
