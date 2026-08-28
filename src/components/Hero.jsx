import { profile } from '../data'

const userName = profile.name.split(' ')[0]

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <span className="hero-eyebrow">Portfolio — AI Trainer</span>
        <h1>
          Hi, I&rsquo;m {userName}.
          <br />
          I like turning <em className="em">messy data</em> into
          <br />
          systems people <em className="em">actually use</em>.
        </h1>
        <p className="role-line">
          AI Trainer<span className="dot">·</span>
          <span className="role">Developer</span>
        </p>
        <p className="tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a href="#contact" className="btn btn-text">
            Get in touch
          </a>
        </div>
        <div className="hero-contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
