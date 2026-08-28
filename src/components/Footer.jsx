import { nav } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-brand">Selina Maharjan</span>
        <span className="footer-copy">
          © {new Date().getFullYear()} — AI Trainer
        </span>
        <nav className="footer-nav" aria-label="Footer navigation">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
