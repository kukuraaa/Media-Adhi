import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from "../../assets/Vector.png"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white font-sans">
      <nav className="relative mx-auto flex max-w-1440 flex-col bg-white px-4 pb-4 pt-6 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        {/* ========================================
            BARIS UTAMA NAVBAR
        ========================================= */}
        <div className="flex h-10 w-full items-center justify-between gap-2 lg:gap-4">
          {/* LOGO */}
          <Link
            to="/"
            className="flex h-8 w-auto shrink-0 items-center sm:h-9 lg:h-10"
          >
            <img
              src={logo}
              alt="Media Adhi Persada"
              className="h-full w-auto object-contain object-left"
            />
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden items-center justify-end gap-0.5 lg:flex xl:gap-2">
            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] xl:px-3 xl:text-sm"
            >
              Tentang Kami
            </Link>

            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] xl:px-3 xl:text-sm"
            >
              Layanan
            </Link>

            <Link
              to="/billboard/1"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] xl:px-3 xl:text-sm"
            >
              Billboard
            </Link>

            <Link
              to="/project/1"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] xl:px-3 xl:text-sm"
            >
              Portofolio
            </Link>

            <Link
              to="/articles"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] xl:px-3 xl:text-sm"
            >
              Blog
            </Link>

            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] xl:px-3 xl:text-sm"
            >
              Testimoni
            </Link>

            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] xl:px-3 xl:text-sm"
            >
              Kontak
            </Link>

            <Link
              to="/"
              className="ml-1 flex h-10 shrink-0 items-center justify-center rounded-lg bg-[#013F8B] px-3 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-white transition-colors hover:bg-[#023676] xl:px-4 xl:text-sm"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* HAMBURGER BUTTON (Muncul sampai < 1024px) */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111111] hover:bg-slate-100 lg:hidden"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={1.8} />
            ) : (
              <Menu size={24} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* ========================================
            MOBILE / TABLET MENU DROPDOWN
        ========================================= */}
        {isMenuOpen && (
          <div className="absolute left-4 right-4 top-full z-50 mt-2 rounded-xl border border-slate-100 bg-white p-4 shadow-xl lg:hidden">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-normal text-[#111111] hover:bg-slate-50 hover:text-[#013F8B]"
              >
                Tentang Kami
              </Link>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-normal text-[#111111] hover:bg-slate-50 hover:text-[#013F8B]"
              >
                Layanan
              </Link>
              <Link
                to="/billboard/1"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-normal text-[#111111] hover:bg-slate-50 hover:text-[#013F8B]"
              >
                Billboard
              </Link>
              <Link
                to="/project/1"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-normal text-[#111111] hover:bg-slate-50 hover:text-[#013F8B]"
              >
                Portofolio
              </Link>
              <Link
                to="/articles"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-normal text-[#111111] hover:bg-slate-50 hover:text-[#013F8B]"
              >
                Blog
              </Link>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-normal text-[#111111] hover:bg-slate-50 hover:text-[#013F8B]"
              >
                Testimoni
              </Link>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-normal text-[#111111] hover:bg-slate-50 hover:text-[#013F8B]"
              >
                Kontak
              </Link>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex h-10 items-center justify-center rounded-lg bg-[#013F8B] px-4 py-2 font-sans text-base font-normal text-white hover:bg-[#023676]"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}