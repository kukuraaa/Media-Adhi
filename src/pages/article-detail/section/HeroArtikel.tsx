import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mejasaja from "../../../assets/mejasaja.png";

export const HeroArtikel = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col gap-[40px] w-full md:max-[1439px]:items-center min-[1440px]:w-[857px]">
    
        <div className="w-full md:max-[1439px]:w-[720px] max-md:relative max-md:top-[-36px]">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 cursor-pointer w-fit text-[#212121]">
            <ArrowLeft size={24} />
            <span className="font-medium text-[18px] leading-[100%]">
              Kembali
            </span>
          </button>
        </div>

        <div className="flex flex-col gap-[16px] w-full md:max-[1439px]:w-[720px] md:max-[1439px]:h-[443px] min-[1440px]:w-[857px] min-[1440px]:h-[385px]">
          <div className="max-md:relative max-md:top-[-30px]">
            <span className="inline-flex items-center justify-center h-[40px] px-[18px] py-[8px] rounded-full bg-[#D2E2F7] text-[rgba(3,65,141,1)] text-[12px] font-normal leading-[180%] border border-[#367FD9]/22 whitespace-nowrap">
              Digital Marketing
            </span>
          </div>

          <div className="flex flex-col gap-[16px] w-full md:max-[1439px]:w-[720px] md:max-[1439px]:h-[222px] min-[1440px]:w-[857px] min-[1440px]:h-[164px]">
            <h1 className="hidden md:block w-full md:max-[1439px]:w-[720px] md:max-[1439px]:h-[174px] md:max-[1439px]:text-[48px] md:max-[1439px]:leading-[100%] min-[1440px]:w-[857px] min-[1440px]:h-[116px] min-[1440px]:text-[48px] min-[1440px]:leading-[58px] sm:text-[36px] font-semibold tracking-[-0.04em] text-[#212121]">
              <span className="md:max-[1439px]:hidden">
                Meningkatkan Efisiensi Cafe dengan
                <br />
                Sistem Pemesanan QR Code di Meja
              </span>

              <span className="min-[1440px]:hidden">
                Meningkatkan Efisiensi Cafe{" "}
                <br className="md:max-[1439px]:block" />
                dengan Sistem Pemesanan QR{" "}
                <br className="md:max-[1439px]:block" />
                Code di Meja
              </span>
            </h1>

            <h1 className="block md:hidden w-[448px] h-[117px] text-[32px] leading-[135%] font-semibold tracking-[-0.04em] text-[#212121] m-0 relative top-[-8px]">
              Meningkatkan Efisiensi Cafe dengan Sistem Pemesanan QR Code di Meja
            </h1>

            <div className="flex items-center gap-[8px] w-full md:max-[1439px]:w-[275px] md:max-[1439px]:h-[32px] min-[1440px]:w-[275px] min-[1440px]:h-[32px]">
              <span className="text-[18px] font-normal leading-[180%] text-[rgba(17,17,17,1)]">
                5 Agustus 2026
              </span>
              <span className="w-[4px] h-[4px] rounded-full bg-[rgba(17,17,17,1)] inline-block"></span>
              <span className="text-[18px] font-normal leading-[180%] text-[rgba(17,17,17,1)]">
                10 Menit Baca
              </span>
            </div>
          </div>

          <p className="w-full max-md:w-[448px] max-md:h-[200px] md:max-[1439px]:w-[720px] md:max-[1439px]:h-[125px] min-[1440px]:w-[857px] min-[1440px]:h-[125px] text-[14px] font-normal leading-[180%] text-[#616161]">
            Tinggalkan cara manual. Pelajari bagaimana aplikasi Point of Sales (POS) otomatis dengan fitur scan QR di meja dapat mempercepat pelayanan dan menaikkan omzet kedai kopi Anda.
            <br />
            Menjalankan bisnis kedai kopi (cafe) atau restoran yang ramai adalah dambaan setiap pengusaha kuliner. Namun, di saat jam sibuk (rush hour), antrean panjang di meja kasir atau staf pelayan yang kewalahan mencatat pesanan sering kali memicu rasa frustrasi pada pelanggan.
          </p>
        </div>

        <div className="w-full max-md:w-[448px] max-md:h-[553px] md:max-[1439px]:w-[720px] md:max-[1439px]:h-[553px] min-[1440px]:w-[857px] min-[1440px]:h-[553px] rounded-[16px] overflow-hidden shrink-0">
          <img src={mejasaja} alt="Meningkatkan Efisiensi Cafe" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};