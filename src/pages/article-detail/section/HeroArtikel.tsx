import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mejasaja from "../../../assets/mejasaja.png";

export const HeroArtikel = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[80px] pt-[80px] pb-[40px]">
        <button onClick={() => navigate("/articles")} className="flex items-center gap-[8px] cursor-pointer w-auto h-[40px] mb-[40px] text-[#212121]">
          <ArrowLeft size={24} />
          <span className="font-medium text-[18px] leading-[100%]">
            Kembali
          </span>
        </button>

        <div className="flex flex-col gap-[40px] w-full lg:w-[857px]">
          <div className="flex flex-col gap-[16px] w-full">
            
            <div>
              <span className="inline-flex items-center justify-center px-[18px] py-[8px] rounded-full bg-[#D2E2F7] text-[#367FD9] text-[14px] font-medium leading-[100%] border border-[#367FD9]/22">
                Digital Marketing
              </span>
            </div>

            <div className="flex flex-col gap-[16px] w-full">
              <h1 className="w-full text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[100%] tracking-[-0.04em] text-[#212121]">
                Meningkatkan Efisiensi Cafe dengan Sistem Pemesanan QR Code di Meja
              </h1>

              <p className="text-[14px] text-[#616161] font-normal leading-[100%]">
                5 Agustus 2026 • 10 Menit Baca
              </p>
            </div>

            <p className="text-[14px] font-normal leading-[180%] text-[#616161] w-full">
              Tinggalkan cara manual. Pelajari bagaimana aplikasi Point of Sales (POS) otomatis dengan fitur scan QR di meja dapat mempercepat pelayanan dan menaikkan omzet kedai kopi Anda.
              <br />
              Menjalankan bisnis kedai kopi (cafe) atau restoran yang ramai adalah dambaan setiap pengusaha kuliner. Namun, di saat jam sibuk (rush hour), antrean panjang di meja kasir atau staf pelayan yang kewalahan mencatat pesanan sering kali memicu rasa frustrasi pada pelanggan.
            </p>
          </div>

          <div className="w-full h-[300px] sm:h-[400px] lg:h-[553px] rounded-[16px] overflow-hidden">
            <img src={mejasaja} alt="Meningkatkan Efisiensi Cafe" className="w-full h-full object-cover"  />
          </div>
        </div>
      </div>
    </section>
  );
};  