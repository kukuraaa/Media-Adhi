import { ArrowLeft, MapPin } from "lucide-react";
import cibadakImg from "../../../assets/cibadak.png";

export const SectionBillboard = () => {
  return (
    <section className="w-full pb-6 lg:pb-10">
      
      <button className="flex items-center gap-2 mb-6 lg:mb-10 mt-6 lg:mt-10 text-[#212121]">
        <ArrowLeft size={24} />
        <span className="font-medium">Kembali</span>
      </button>

      <div className="flex flex-col gap-6 lg:gap-[40px] w-full lg:w-[857px] lg:max-w-[857px] h-auto">
      
        <div className="flex flex-col">
          <h1 className="inline-block px-4 lg:px-6 py-1.5 lg:py-2 rounded-full bg-blue-100 text-green-700 w-fit text-xs lg:text-sm font-medium">
            Tersedia
          </h1>

          <h1 className="mt-3 lg:mt-4 w-full text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[110%] lg:leading-[100%] tracking-[-0.04em] py-2 lg:py-[10px] text-[#212121]">
            Billboard 5 || Pertigaan alun-alun Cisaat, Depan polsek
          </h1>
          
          <div className="flex items-center gap-[8px] w-full lg:w-[253px] h-auto lg:h-[40px] p-2 lg:px-[8px] lg:py-[8px] text-sm lg:text-[18px] leading-[100%] tracking-[-0.04em] text-[#212121]/70 mt-1">
            <MapPin className="w-[16px] h-[20.41px] shrink-0" />
            <span className="whitespace-nowrap font-normal">Kec Cibadak, Kab Sukabumi</span>
          </div>
        </div>

        <p className="w-full lg:w-[857px] h-auto lg:h-[100px] text-xs lg:text-[14px] leading-[180%] tracking-normal text-[#777777] font-normal">
          Ambil kendali visual di salah satu titik paling ikonik dan tersibuk di wilayah Kabupaten Sukabumi. Billboard 5 dari Media Adhi Perkasa menawarkan eksposur tanpa henti di pusat keramaian publik. Detail Lokasi & Keunggulan: Titik Lokasi: Pertigaan Alun-Alun Cisaat. Posisi Strategis: Tepat di Depan Polsek Cisaat, menghadap langsung ke arus kendaraan dari arah Kota Sukabumi, Bogor, maupun jalur alternatif.
        </p>

        <div className="w-full lg:w-[857px]">
          <img src={cibadakImg} alt="Billboard Cisaat" className="w-full lg:w-[857px] h-[250px] sm:h-[400px] lg:h-[553px] rounded-[16px] lg:rounded-[24px] object-cover" />
        </div>
      </div>
    </section>
  );
};