import { Link, useLocation } from 'react-router-dom'
import { PhoneCall } from 'lucide-react'

export const Navbar = () => {
  const location = useLocation()

  const navLinks = [
    { name: 'Tentang Kami', path: '/' },
    { name: 'Titik Billboard', path: '/billboard/1' },
    { name: 'Portofolio', path: '/project/1' },
    { name: 'Artikel', path: '/articles' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-1440 mx-20 px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20">
            M
          </div>
          <div>
            <span className="text-lg font-bold text-slate-900 leading-tight block">Media Adhi Persada</span>
            <span className="text-xs text-slate-500 font-medium">Outdoor Advertising & Production</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition shadow-sm hover:shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </a>
        </div>
      </div>
    </header>
  )
}
