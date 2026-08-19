import { ArrowLeft, MapPin } from "lucide-react";
import cibadakImg from "../../../assets/cibadak.png";

export const SectionBillboard = () => {
  return (
    <section className="px-20">
      <button className="flex items-center gap-2 mb-10 mt-10">
        <ArrowLeft size={24} /><span>Kembali</span>
      </button>

      <div className="flex flex-col gap-[40px] w-[857px] max-w-[857px] h-auto">
      
        <div className="flex flex-col">
          <h1 className="inline-block px-6 py-2 rounded-full bg-blue-100 text-green-700 w-fit">Tersedia</h1>
          <h1 className="mt-4 w-full text-[48px] font-semibold leading-[100%] tracking-[-0.04em] py-[10px]">Billboard 5 || Pertigaan alun-alun Cisaat, Depan polsek</h1>
          
          <div className="flex items-center gap-[8px] w-[253px] h-[40px] px-[8px] py-[8px] text-[18px]/[100%] tracking-[-0.04em] text-[#212121]/70 mt-1">
            <MapPin className="w-[16px] h-[20.41px] shrink-0" />
            <span className="w-[221px] h-[18px] whitespace-nowrap font-normal">Kec Cibadak, Kab Sukabumi</span>
          </div>
        </div>

        <p className="w-[857px] h-[100px] text-[14px] leading-[180%] tracking-normal text-[#777777] font-normal">Ambil kendali visual di salah satu titik paling ikonik dan tersibuk di wilayah Kabupaten Sukabumi. Billboard 5 dari Media Adhi Perkasa menawarkan eksposur tanpa henti di pusat keramaian publik. Detail Lokasi & Keunggulan: Titik Lokasi: Pertigaan Alun-Alun Cisaat. Posisi Strategis: Tepat di Depan Polsek Cisaat, menghadap langsung ke arus kendaraan dari arah Kota Sukabumi, Bogor, maupun jalur alternatif.</p>

          <div>
            <img src={cibadakImg} alt="Billboard Cisaat" className="w-[857px] h-[553px] rounded-[24px] object-cover" />
          </div>
      </div>
    </section>
  );
};