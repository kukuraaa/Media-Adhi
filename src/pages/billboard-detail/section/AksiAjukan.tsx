import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

interface AksiAjukanProps {
  isOpen: boolean;
  onClose: () => void;
}
export const AksiAjukan = ({ isOpen, onClose }: AksiAjukanProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[630px] bg-white rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 flex flex-col gap-3 sm:gap-[20px] border border-[rgba(0,0,0,0.1)] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex flex-col gap-0.5 sm:gap-[6px] w-full relative pr-8">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-[#212121] text-[18px] sm:text-[24px] font-semibold leading-[130%] tracking-[-0.04em]">
              Lokasi Detail
            </h3>
            <button onClick={onClose} className="absolute top-0 right-0 text-gray-500 hover:text-black transition-colors p-1">
              <IoClose className="text-[20px] sm:text-[24px]" />
            </button>
          </div>
          <p className="text-[#777777] text-[11px] sm:text-[14px] font-normal leading-[140%] sm:leading-[160%]">
            Billboard 5 || Pertigaan alun-alun Cisaat, Depan polsek. Tim kami akan menghubungi Anda.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 sm:gap-[14px] w-full">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-[16px] w-full">
            <div className="flex flex-col gap-1 sm:gap-[6px]">
              <label className="text-[12px] sm:text-[14px] font-medium text-[#212121]">Nama*</label>
              <input type="text" placeholder="Nama lengkap"
                className="w-full h-[38px] sm:h-[48px] px-3.5 bg-[#F5F5F5] rounded-[10px] sm:rounded-[12px] text-[12px] sm:text-[14px] text-[#212121] outline-none focus:ring-1 focus:ring-[#013F8B] transition-all"required/>
            </div>
            <div className="flex flex-col gap-1 sm:gap-[6px]">
              <label className="text-[12px] sm:text-[14px] font-medium text-[#212121]">No. WhatsApp / Telepon *</label>
              <input type="tel" placeholder="(+62) 1234 567"
                className="w-full h-[38px] sm:h-[48px] px-3.5 bg-[#F5F5F5] rounded-[10px] sm:rounded-[12px] text-[12px] sm:text-[14px] text-[#212121] outline-none focus:ring-1 focus:ring-[#013F8B] transition-all"required/>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-[16px] w-full">
            <div className="flex flex-col gap-1 sm:gap-[6px]">
              <label className="text-[12px] sm:text-[14px] font-medium text-[#212121]">Email*</label>
              <input type="email" placeholder="yourmail@mail.com"
                className="w-full h-[38px] sm:h-[48px] px-3.5 bg-[#F5F5F5] rounded-[10px] sm:rounded-[12px] text-[12px] sm:text-[14px] text-[#212121] outline-none focus:ring-1 focus:ring-[#013F8B] transition-all"required/>
            </div>
            <div className="flex flex-col gap-1 sm:gap-[6px]">
              <label className="text-[12px] sm:text-[14px] font-medium text-[#212121]">Perusahaan</label>
              <input type="text" placeholder="Nama Perusahaan"
                className="w-full h-[38px] sm:h-[48px] px-3.5 bg-[#F5F5F5] rounded-[10px] sm:rounded-[12px] text-[12px] sm:text-[14px] text-[#212121] outline-none focus:ring-1 focus:ring-[#013F8B] transition-all"/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-[16px] w-full">
            <div className="flex flex-col gap-1 sm:gap-[6px]">
              <label className="text-[12px] sm:text-[14px] font-medium text-[#212121]">Mulai sewa</label>
              <input type="date"className="w-full h-[38px] sm:h-[48px] px-2.5 sm:px-4 bg-[#F5F5F5] rounded-[10px] sm:rounded-[12px] text-[11px] sm:text-[14px] text-[#777777] outline-none focus:ring-1 focus:ring-[#013F8B] transition-all"/>
            </div>
            <div className="flex flex-col gap-1 sm:gap-[6px]">
              <label className="text-[12px] sm:text-[14px] font-medium text-[#212121]">Sampai</label>
              <input type="date"className="w-full h-[38px] sm:h-[48px] px-2.5 sm:px-4 bg-[#F5F5F5] rounded-[10px] sm:rounded-[12px] text-[11px] sm:text-[14px] text-[#777777] outline-none focus:ring-1 focus:ring-[#013F8B] transition-all"/>

            </div>
          </div>
          <div className="flex flex-col gap-1 sm:gap-[6px] w-full">
            <label className="text-[12px] sm:text-[14px] font-medium text-[#212121]">Catatan</label>
            <textarea placeholder="Contoh: ukuran materi, kebutuhan periode, dll." rows={2}
              className="w-full p-2.5 sm:p-3 bg-[#F5F5F5] rounded-[10px] sm:rounded-[12px] text-[12px] sm:text-[14px] text-[#212121] outline-none resize-none focus:ring-1 focus:ring-[#013F8B] transition-all"/>
          </div>

          <div className="flex items-center justify-between w-full pt-1 sm:pt-2 gap-2">
            <button type="button" onClick={onClose}
              className="h-[38px] sm:h-[48px] px-5 sm:px-8 border border-[#212121] rounded-[100px] text-[12px] sm:text-[14px] font-medium text-[#212121] hover:bg-gray-100 transition-colors shrink-0">
              Batal
            </button>

            <button type="submit"
              className="h-[38px] sm:h-[48px] px-4 sm:px-6 bg-[#013F8B] text-white rounded-[100px] text-[12px] sm:text-[14px] font-medium flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-[#01326f] transition-colors shrink-0">
              <span>Kirim Permintaan</span>
              <FiSend className="text-[13px] sm:text-[16px]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};