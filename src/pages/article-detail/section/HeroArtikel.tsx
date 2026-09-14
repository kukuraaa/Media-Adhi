import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mejasaja from "../../../assets/mejasaja.png";

export const HeroArtikel = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[40px] w-full">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 cursor-pointer w-fit text-[#212121]">
        <ArrowLeft size={24} />
        <span className="font-medium text-[18px] leading-[100%]">
          Kembali
        </span>
      </button>

      <div className="flex flex-col gap-[16px] w-full min-[1440px]:w-[857px] min-[1440px]:h-[385px]">
        <div>
          <span className="inline-flex items-center justify-center h-[40px] px-[18px] py-[8px] rounded-full bg-[#D2E2F7] text-[rgba(3,65,141,1)] text-[12px] font-normal leading-[180%] border border-[#367FD9]/22 whitespace-nowrap">
            Digital Marketing
          </span>
        </div>

        <div className="flex flex-col gap-[16px] w-full min-[1440px]:w-[857px] min-[1440px]:h-[164px]">
          <h1 className="w-full min-[1440px]:w-[857px] min-[1440px]:h-[116px] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[120%] tracking-[-0.04em] text-[#212121]">
            Meningkatkan Efisiensi Cafe dengan Sistem Pemesanan QR Code di Meja
          </h1>

          <div className="flex items-center gap-[8px] w-full min-[1440px]:w-[275px] min-[1440px]:h-[32px]">
            <span className="text-[18px] font-normal leading-[180%] text-[rgba(17,17,17,1)]">
              5 Agustus 2026
            </span>
            <span className="w-[4px] h-[4px] rounded-full bg-[rgba(17,17,17,1)] inline-block"></span>
            <span className="text-[18px] font-normal leading-[180%] text-[rgba(17,17,17,1)]">
              10 Menit Baca
            </span>
          </div>
        </div>

        <p className="w-full min-[1440px]:w-[857px] min-[1440px]:h-[125px] text-[14px] font-normal leading-[180%] text-[#616161]">
          Tinggalkan cara manual. Pelajari bagaimana aplikasi Point of Sales (POS) otomatis dengan fitur scan QR di meja dapat mempercepat pelayanan dan menaikkan omzet kedai kopi Anda.
          <br />
          Menjalankan bisnis kedai kopi (cafe) atau restoran yang ramai adalah dambaan setiap pengusaha kuliner. Namun, di saat jam sibuk (rush hour), antrean panjang di meja kasir atau staf pelayan yang kewalahan mencatat pesanan sering kali memicu rasa frustrasi pada pelanggan.
        </p>
      </div>

      <div className="w-full h-[300px] sm:h-[400px] lg:h-[553px] rounded-[16px] overflow-hidden">
        <img src={mejasaja} alt="Meningkatkan Efisiensi Cafe" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};