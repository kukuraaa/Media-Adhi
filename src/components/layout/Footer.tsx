import { MapPin } from 'lucide-react'
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import logo from "../../assets/Vector.png"

export const Footer = () => {
  return (
    <footer className="bg-white text-slate-300 pt-16 pb-12 border-t border-white">
      <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
              src={logo} alt="Media Adhi Persada"className="w-[286px] h-[48px] object-contain"/>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
             Membantu bisnis Anda tumbuh melalui strategi periklanan yang tepat sasaran, eksekusi event yang berdampak, dan pemanfaatan teknologi yang efisien.
            </p>
          </div>

          <div className="md:col-start-3 pl-44">
            <h4 className="text-black font-semibold mb-4 text-lg font-Inter">Tautan Pintas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Tentang Kami</li>
              <li>Layanan Kami</li>
              <li>Billboard</li>
              <li>Portofolio</li>
              <li>Testimoni</li>
              <li>Kontak</li>
            </ul>
          </div>

          <div className="md:col-start-4 pl-10">
            <h4 className="text-black font-semibold mb-4 text-lg font-Inter">Kontak</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>mediaapersada@gmail.com</li>
              <li>+62 812 8887 4567</li>
              <li>Jl. Cimahi Cibaraja RT. 01 RW. 01 No. 01 Desa Selajambe, Kecamatan Cisaat Kabupaten Sukabumi, 43152</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-400 flex items-center justify-between text-xs text-slate-500">
          © {new Date().getFullYear()} Media Adhi Persada. All rights reserved. - Website by Mangcoding.com
           <div className="flex items-center gap-5">
            <FaInstagram className="w-5 h-10 text-blue-900 shrink-0 mt-1" />
            <FaWhatsapp className="w-5 h-10 text-blue-900 shrink-0 mt-1" />
            <FaFacebookF className="w-5 h-5 text-blue-900 shrink-0 mt-1" />
            <MapPin className="w-5 h-10 text-blue-900 shrink-0 mt-1" />
            </div>
        </div>
      </div>
    </footer>
  )
}
