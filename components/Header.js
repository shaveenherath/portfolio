import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <Link href="/" className="brand-link">Portfolio</Link>
        </div>
        <nav>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
