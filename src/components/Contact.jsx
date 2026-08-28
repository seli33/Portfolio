import { profile } from '../data'
import { Reveal } from './Reveal'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">
              <span className="rule" aria-hidden="true" />
              Contact
            </span>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="contact-cta">
            <h2>
              Have an idea, project,
              <br />
              or collaboration <em className="em">in mind?</em>
            </h2>
            <p>I&rsquo;m always open to interesting problems and good conversations.</p>
            <div className="contact-route">
              <a href={`mailto:${profile.email}`}>
                <span className="tag">Email</span>
                <span className="val">{profile.email}</span>
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <span className="tag">LinkedIn</span>
                <span className="val">Selina Maharjan</span>
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <span className="tag">GitHub</span>
                <span className="val">github.com/seli33</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
