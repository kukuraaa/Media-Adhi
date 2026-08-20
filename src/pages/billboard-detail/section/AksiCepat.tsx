import { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaShareAlt, FaRegCopy, FaCheck } from "react-icons/fa";

export const AksiCepat = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://mediaadhipersada.id/billboards/billboard-baru";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full lg:w-[383px] flex flex-col gap-[10px] shrink-0 mt-[40px] lg:mt-0 px-4 sm:px-6 lg:px-0">
    
      <div className="w-full bg-[#F9F9F9] border border-[rgba(0,0,0,0.04)] rounded-[16px] lg:rounded-[24px] p-4 sm:p-5 lg:p-[20px] flex flex-col gap-4 lg:gap-[20px]">
        
        <div className="flex flex-col gap-1 lg:gap-[8px]">
          <h3 className="text-[#212121] text-[18px] lg:text-[20px] font-semibold leading-[140%] tracking-[-0.04em]">Aksi Cepat</h3>
          <p className="text-[13px] lg:text-[14px] text-[rgba(17,17,17,0.6)] leading-[140%]">Butuh penawaran cepat? Hubungi tim kami.</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] bg-[#DEE7F3] rounded-[8px] flex items-center justify-center">
            <FaMapMarkerAlt className="text-[#013F8B] text-[18px] lg:text-[20px]" />
          </div>

          <div className="inline-flex items-center justify-center bg-[#D4E4D5] text-[#03850D] text-[13px] lg:text-[14px] font-medium px-5 sm:px-6 lg:px-[32px] py-1.5 lg:py-[8px] rounded-[100px]">
            Tersedia
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:gap-[8px]">
          <h4 className="text-[#212121] text-[16px] lg:text-[20px] font-semibold leading-[140%] tracking-[-0.04em]">Alamat</h4>
          <p className="text-[13px] lg:text-[14px] text-[rgba(17,17,17,0.6)] leading-[140%]">Jl. Nasional III, Sukamanah, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152</p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <button className="w-full h-[44px] lg:h-[48px] bg-[#013F8B] text-white text-[13px] lg:text-[14px] font-medium rounded-[100px] flex items-center justify-center gap-2 px-4 lg:px-[24px] hover:bg-[#01326f] transition-colors">
            <FaWhatsapp className="text-[16px] lg:text-[18px]" />
            <span>Konsultasikan Sekarang</span>
          </button>

          <button className="w-full h-[44px] lg:h-[48px] bg-transparent border border-[rgba(21,21,21,1)] text-[#212121] text-[13px] lg:text-[14px] font-medium rounded-[100px] flex items-center justify-center px-4 lg:px-[24px] hover:bg-gray-100 transition-colors">
            Ajukan Penawaran
          </button>
        </div>
      </div>

      <div className="w-full bg-[#F9F9F9] border border-[rgba(0,0,0,0.04)] rounded-[16px] lg:rounded-[24px] p-4 sm:p-5 lg:p-[20px] flex flex-col gap-[8px]">
        
        <div className="flex items-center justify-between">
          <h4 className="text-[#212121] text-[18px] lg:text-[20px] font-semibold leading-[140%] tracking-[-0.04em]">Bagikan</h4>
          <div className="flex items-center gap-[12px] text-[#013F8B]">
            <a href="#" className="hover:opacity-80 transition-opacity"><FaInstagram className="text-[16px] lg:text-[18px]" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaWhatsapp className="text-[16px] lg:text-[18px]" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaFacebookF className="text-[14px] lg:text-[16px]" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaShareAlt className="text-[14px] lg:text-[16px]" /></a>
          </div>
        </div>

        <div className="w-full bg-white border border-gray-200 rounded-[12px] p-2.5 lg:p-[12px] flex items-center justify-between gap-2 mt-2">
          <span className="text-[11px] lg:text-[12px] text-gray-500 truncate">{shareUrl}</span>
          <button onClick={handleCopy} className="text-gray-700 hover:text-black transition-colors shrink-0" title="Salin Link">
            {copied ? <FaCheck className="text-green-600 text-[14px] lg:text-[16px]" /> : <FaRegCopy className="text-[14px] lg:text-[16px]" />}
          </button>
        </div>
      </div>

    </div>
  );
};