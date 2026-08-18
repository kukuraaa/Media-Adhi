import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from "../../assets/Vector.png"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white font-sans">
      <nav className="relative mx-auto flex max-w-1440 flex-col bg-white px-4 pb-4 pt-6 sm:px-6 md:px-8 lg:px-16 lg:px-20">
        {/* ========================================
            BARIS UTAMA NAVBAR
        ========================================= */}
        <div className="flex h-10 w-full items-center justify-between gap-2 md:gap-4">
          {/* LOGO BRAND */}
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

          {/* MENU DESKTOP (Berubah di md: 768px ke atas) */}
          <div className="hidden items-center justify-end gap-0.5 md:flex lg:gap-1 xl:gap-2">
            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] lg:px-3 lg:text-sm xl:text-base"
            >
              Tentang Kami
            </Link>

            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] lg:px-3 lg:text-sm xl:text-base"
            >
              Layanan
            </Link>

            <Link
              to="/billboard/1"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] lg:px-3 lg:text-sm xl:text-base"
            >
              Billboard
            </Link>

            <Link
              to="/project/1"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] lg:px-3 lg:text-sm xl:text-base"
            >
              Portofolio
            </Link>

            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] lg:px-3 lg:text-sm xl:text-base"
            >
              Testimoni
            </Link>

            <Link
              to="/"
              className="flex h-10 items-center justify-center rounded-lg px-2 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-[#111111] transition-colors hover:bg-slate-50 hover:text-[#013F8B] lg:px-3 lg:text-sm xl:text-base"
            >
              Kontak
            </Link>

            {/* BUTTON CTA HUBUNGI KAMI */}
            <Link
              to="/"
              className="ml-1 flex h-10 shrink-0 items-center justify-center rounded-lg bg-[#013F8B] px-3 py-2 whitespace-nowrap text-xs font-normal tracking-tight text-white transition-colors hover:bg-[#023676] lg:px-4 lg:text-sm xl:text-base"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* HAMBURGER BUTTON (Hanya di HP / bawah 768px) */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111111] hover:bg-slate-100 md:hidden"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={1.8} />
            ) : (
              <Menu size={24} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* ========================================
            MOBILE MENU DROPDOWN
        ========================================= */}
        {isMenuOpen && (
          <div className="absolute left-4 right-4 top-full z-50 mt-2 rounded-xl border border-slate-100 bg-white p-4 shadow-xl md:hidden">
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