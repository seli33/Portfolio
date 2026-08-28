import { profile } from '../data'
import { Reveal } from './Reveal'

const facts = [
  { label: 'Focus', value: 'ML · NLP · LLMs · Data' },
  { label: 'Education', value: 'BSc CSIT' },
  { label: 'Role', value: 'AI Trainer ' },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">
              <span className="rule" aria-hidden="true" />
              About
            </span>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={60} className="about-intro">
            <div className="about-num" aria-hidden="true">
              01
            </div>
            <h2>
              Turning data into
              <br />
              <em className="em">intelligent</em> systems.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="about-body">
              {profile.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="quick-facts">
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  <span className="label">{f.label}</span>
                  <span className="value">
                    {f.href ? (
                      <a href={f.href}>{f.value}</a>
                    ) : (
                      f.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
