import { whatIDo } from '../data'
import { Reveal } from './Reveal'

function WhatIDo() {
  return (
    <section id="whatido">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-label">
              <span className="rule" aria-hidden="true" />
              What I do
            </span>
            <h2>How I like to work.</h2>
          </div>
        </Reveal>
        <div className="whatido-list">
          {whatIDo.map((item, i) => (
            <Reveal key={item.number} delay={i * 40}>
              <div className="whatido-item">
                <span className="w-num">{item.number}</span>
                <h3 className="w-title">{item.title}</h3>
                <p className="w-desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
