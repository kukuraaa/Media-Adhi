import { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaShareAlt, FaRegCopy, FaCheck } from "react-icons/fa";
import { AksiAjukan } from "./AksiAjukan";

export const AksiCepat = () => {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://mediaadhipersada.id/billboards/billboard-baru";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
   <div className="w-full max-[767px]:w-[448px] max-[767px]:h-[538px] min-[768px]:w-[720px] min-[768px]:h-[503px] lg:w-[383px] lg:h-[560px] flex flex-col gap-[10px] shrink-0">
    
      <div className="w-full max-[767px]:w-[448px] max-[767px]:h-[383px] min-[768px]:w-[720px] min-[768px]:h-[358px] min-[1440px]:w-[383px] min-[1440px]:h-[383px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.04)] rounded-[16px] lg:rounded-[24px] p-4 sm:p-5 lg:p-[20px] flex flex-col gap-4 lg:gap-[20px]">
        
        <div className="flex flex-col gap-1 lg:gap-[8px] max-[767px]:w-[408px] max-[767px]:h-[61px] min-[768px]:w-[680px] min-[768px]:h-[61px] min-[1440px]:w-[343px] min-[1440px]:h-[61px] min-[1440px]:shrink-0">
          <h3 className="text-[#212121] text-[18px] lg:text-[20px] font-semibold leading-[140%] tracking-[-0.04em] max-[767px]:w-[408px] max-[767px]:h-[28px] min-[768px]:w-[680px] min-[768px]:h-[28px] min-[1440px]:w-[343px] min-[1440px]:h-[28px]">Aksi Cepat</h3>
          <p className="text-[13px] lg:text-[14px] text-[rgba(17,17,17,0.6)] leading-[140%] max-[767px]:w-[408px] max-[767px]:h-[25px] min-[768px]:w-[680px] min-[768px]:h-[25px] min-[1440px]:w-[343px] min-[1440px]:h-[25px]">Butuh penawaran cepat? Hubungi tim kami.</p>
        </div>

        <div className="flex items-center justify-between max-[767px]:w-[408px] max-[767px]:h-[48px] min-[768px]:w-[680px] min-[768px]:h-[48px] min-[1440px]:w-[343px] min-[1440px]:h-[48px]">
          <div className="w-[40px] h-[40px] max-[767px]:w-[48px] max-[767px]:h-[48px] min-[768px]:w-[48px] min-[768px]:h-[48px] lg:w-[48px] lg:h-[48px] bg-[#DEE7F3] rounded-[8px] flex items-center justify-center">
            <FaMapMarkerAlt className="text-[#013F8B] text-[18px] lg:text-[20px]" />
          </div>

          <div className="inline-flex items-center justify-center max-[767px]:w-[117px] max-[767px]:h-[30px] min-[768px]:w-[117px] min-[768px]:h-[30px] min-[1440px]:w-[117px] min-[1440px]:h-[30px] bg-[#D4E4D5] text-[#03850D] text-[13px] lg:text-[14px] font-medium px-5 sm:px-6 lg:px-[32px] py-1.5 lg:py-[8px] rounded-[100px]">
            Tersedia
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:gap-[8px]">
          <h4 className="text-[#212121] text-[16px] lg:text-[20px] font-semibold leading-[140%] tracking-[-0.04em] max-[767px]:w-[408px] max-[767px]:h-[28px] min-[768px]:w-[680px] min-[768px]:h-[28px] min-[1440px]:w-[343px] min-[1440px]:h-[28px]">Alamat</h4>
          <p className="text-[13px] lg:text-[14px] text-[rgba(17,17,17,0.6)] leading-[140%] max-[767px]:w-[408px] max-[767px]:h-[50px] min-[768px]:w-[680px] min-[768px]:h-[25px] min-[1440px]:w-[343px] min-[1440px]:h-[50px]">Jl. Nasional III, Sukamanah, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152</p>
        </div>

       <div className="flex flex-col gap-[10px] max-[767px]:w-[408px] max-[767px]:h-[100px] min-[768px]:w-[680px] min-[768px]:h-[100px] min-[1440px]:w-[343px] min-[1440px]:h-[100px]">
         <button className="w-full h-[44px] max-[767px]:w-[408px] max-[767px]:h-[48px] min-[768px]:w-[680px] min-[768px]:h-[48px] min-[1440px]:w-[343px] min-[1440px]:h-[48px] shrink-0 lg:h-[48px] bg-[#013F8B] text-white text-[13px] lg:text-[14px] font-medium rounded-[100px] flex items-center justify-center gap-2 px-4 lg:px-[24px] hover:bg-[#01326f] transition-colors">
          <FaWhatsapp className="text-[16px] lg:text-[18px]" />
            <span className="cursor-pointer">Konsultasikan Sekarang</span>
          </button>

          <button onClick={() => setIsModalOpen(true)} className="w-full h-[44px] max-[767px]:w-[408px] max-[767px]:h-[48px] min-[768px]:w-[680px] min-[768px]:h-[48px] min-[1440px]:w-[343px] min-[1440px]:h-[48px] shrink-0 lg:h-[48px] bg-transparent border border-[rgba(21,21,21,1)] text-[#212121] text-[13px] lg:text-[14px] font-medium rounded-[100px] flex items-center justify-center px-4 lg:px-[24px] hover:bg-gray-100 transition-colors cursor-pointer">
            Ajukan Penawaran
          </button>
        </div>
      </div>

      <div className="w-full max-[767px]:w-[448px] max-[767px]:h-[135px] min-[768px]:w-[720px] min-[768px]:h-[135px] min-[1440px]:w-[383px] min-[1440px]:h-[135px] bg-[#F9F9F9] border border-[rgba(0,0,0,0.04)] rounded-[16px] lg:rounded-[24px] p-4 sm:p-5 lg:p-[20px] flex flex-col gap-[8px]">

        <div className="flex items-center justify-between max-[767px]:w-[408px] max-[767px]:h-[28px] min-[768px]:w-[680px] min-[768px]:h-[28px] min-[1440px]:w-[343px] min-[1440px]:h-[28px]">
          <h4 className="text-[#212121] text-[18px] lg:text-[20px] font-semibold leading-[140%] tracking-[-0.04em] max-[767px]:w-[73px] max-[767px]:h-[28px] min-[768px]:w-[73px] min-[768px]:h-[28px] min-[1440px]:w-[73px] min-[1440px]:h-[28px]">Bagikan</h4>
          <div className="flex items-center gap-[12px] text-[#013F8B] max-[767px]:w-[144px] max-[767px]:h-[24px] min-[768px]:w-[144px] min-[768px]:h-[24px] min-[1440px]:w-[144px] min-[1440px]:h-[24px]">
            <a href="#" className="hover:opacity-80 transition-opacity"><FaInstagram className="text-[16px] lg:text-[18px] max-[767px]:w-[24px] max-[767px]:h-[24px] min-[768px]:w-[24px] min-[768px]:h-[24px] min-[1440px]:w-[24px] min-[1440px]:h-[24px]" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaWhatsapp className="text-[16px] lg:text-[18px] max-[767px]:w-[24px] max-[767px]:h-[24px] min-[768px]:w-[24px] min-[768px]:h-[24px] min-[1440px]:w-[24px] min-[1440px]:h-[24px]" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaFacebookF className="text-[14px] lg:text-[16px] max-[767px]:w-[24px] max-[767px]:h-[24px] min-[768px]:w-[24px] min-[768px]:h-[24px] min-[1440px]:w-[24px] min-[1440px]:h-[24px]" /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><FaShareAlt className="text-[14px] lg:text-[16px] max-[767px]:w-[24px] max-[767px]:h-[24px] min-[768px]:w-[24px] min-[768px]:h-[24px] min-[1440px]:w-[24px] min-[1440px]:h-[24px]" /></a>
          </div>
        </div>

       <div className="w-full max-[767px]:w-[408px] max-[767px]:h-[59px] max-[767px]:box-border min-[768px]:w-[680px] min-[768px]:h-[59px] min-[768px]:box-border min-[1440px]:w-[343px] min-[1440px]:h-[59px] min-[1440px]:box-border shrink-0 bg-white border border-gray-200 rounded-[12px] p-2.5 lg:p-[12px] flex items-center justify-between gap-2 mt-2">
          <span className="text-[11px] lg:text-[12px] text-gray-500 truncate max-[767px]:w-[350px] max-[767px]:h-[25px] min-[768px]:w-[622px] min-[768px]:h-[25px] min-[1440px]:w-[285px] min-[1440px]:h-[25px]">{shareUrl}</span>
          <button onClick={handleCopy} className="text-gray-700 hover:text-black transition-colors shrink-0" title="Salin Link">
            {copied ? <FaCheck className="text-green-600 text-[14px] lg:text-[16px]" /> : <FaRegCopy className="text-[20px] lg:text-[20px] min-[768px]:w-[24px] min-[768px]:h-[24px] min-[1440px]:w-[24px] min-[1440px]:h-[24px]" />}
          </button>
        </div>
      </div>
    </div>
    <AksiAjukan isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};