import { FaInstagram, FaWhatsapp, FaFacebookF, FaMapMarkerAlt, } from 'react-icons/fa'
import logo from "../../assets/Vector.png"

export const Footer = () => {
  return (
    <footer className="bg-white text-slate-300 pt-10 lg:pt-16 pb-8 lg:pb-12 border-t border-white">

      <div className="w-full px-4 md:px-8 lg:px-20 mx-auto">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Media Adhi Persada" 
                className="w-[200px] sm:w-[240px] lg:w-[286px] h-[48px] object-contain"/>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Membantu bisnis Anda tumbuh melalui strategi periklanan yang tepat sasaran, eksekusi event yang berdampak, dan pemanfaatan teknologi yang efisien.
            </p>

            <div className="flex lg:hidden items-center gap-4 pt-2">
              <FaInstagram className="w-5 h-5 text-blue-900 shrink-0 cursor-pointer" />
              <FaWhatsapp className="w-5 h-5 text-blue-900 shrink-0 cursor-pointer" />
              <FaFacebookF className="w-5 h-5 text-blue-900 shrink-0 cursor-pointer" />
              <FaMapMarkerAlt className="w-5 h-5 text-blue-900 shrink-0 cursor-pointer" />
            </div>
          </div>

          <div className="lg:col-start-3 lg:pl-20">
            <h4 className="text-black font-semibold mb-3 lg:mb-4 text-base lg:text-lg font-Inter">Tautan Pintas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Tentang Kami</li>
              <li>Layanan Kami</li>
              <li>Billboard</li>
              <li>Portofolio</li>
              <li>Testimoni</li>
              <li>Kontak</li>
            </ul>
          </div>

          <div className="lg:col-start-4">
            <h4 className="text-black font-semibold mb-3 lg:mb-4 text-base lg:text-lg font-Inter">Kontak</h4>
            <ul className="space-y-2.5 lg:space-y-3 text-sm text-slate-400">
              <li>mediaapersada@gmail.com</li>
              <li>+62 812 8887 4567</li>
              <li className="leading-relaxed">
                Jl. Cimahi Cibaraja RT. 01 RW. 01 No. 01 Desa Selajambe, Kecamatan Cisaat Kabupaten Sukabumi, 43152
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-slate-400 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 text-xs text-slate-500">
          <span> © {new Date().getFullYear()} Media Adhi Persada. All rights reserved. - Website by Mangcoding.com</span>

          <div className="hidden lg:flex items-center gap-5">
            <FaInstagram className="w-5 h-5 text-blue-900 shrink-0" />
            <FaWhatsapp className="w-5 h-5 text-blue-900 shrink-0" />
            <FaFacebookF className="w-5 h-5 text-blue-900 shrink-0" />
            <FaMapMarkerAlt className="w-5 h-5 text-blue-900 shrink-0" />
          </div>
        </div>
      </div>
    </footer>
  )
}