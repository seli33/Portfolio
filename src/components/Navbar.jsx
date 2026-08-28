import { useState } from 'react'
import { nav } from '../data'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          Selina Maharjan
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
