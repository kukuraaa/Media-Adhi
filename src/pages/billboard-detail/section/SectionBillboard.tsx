import { ArrowLeft, MapPin } from "lucide-react";
import cibadakImg from "../../../assets/cibadak.png";

export const SectionBillboard = () => {
  return (
    <section className="w-full pb-6 lg:pb-10">
      <button className="flex items-center justify-center gap-2 cursor-pointer lg:w-[95px] lg:h-[40px] mb-6 lg:mb-[8px] mt-6 lg:mt-[80px] text-[#212121]">
        <ArrowLeft size={24} />
        <span className="font-medium lg:text-[18px] lg:leading-[100%]">
          Kembali
        </span>
      </button>

      <div className="flex flex-col gap-6 lg:gap-[40px] w-full max-w-[448px] md:max-w-[720px] lg:max-w-[857px] h-auto min-[769px]:max-[1199px]:max-w-full min-[1200px]:max-[1439px]:max-w-full">
        <div className="flex flex-col w-full max-w-[448px] h-[186px] md:max-w-[720px] md:h-[224px] lg:max-w-[857px] lg:h-[224px] min-[769px]:max-[1199px]:max-w-full min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:max-w-full min-[1200px]:max-[1439px]:h-auto">
          <h1 className="inline-flex items-center justify-center w-[116px] h-[42px] rounded-full bg-blue-100 text-green-700 text-xs lg:text-sm font-medium">
            Tersedia
          </h1>

          <h1 className="mt-3 md:mt-4 lg:mt-4 h-[78px] md:h-[116px] lg:h-auto text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[110%] lg:leading-[100%] tracking-[-0.04em] py-2 md:py-0 lg:py-[10px] text-[#212121] min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:h-auto">
            Billboard 5 || Pertigaan alun-alun Cisaat, Depan polsek
          </h1>

          <div className="flex items-center gap-[8px] box-border w-[253px] h-[40px] px-[8px] py-[8px] mt-1">
            <MapPin className="w-[24px] h-[24px] shrink-0 text-[#212121]/70" />
            <span className="h-[18px] shrink-0 whitespace-nowrap font-normal text-[18px] leading-[18px] tracking-[-0.04em] text-[#212121]/70">
              Kec Cibadak, Kab Sukabumi
            </span>
          </div>
        </div>

        <p className="h-[175px] md:h-[100px] lg:h-[100px] text-xs lg:text-[14px] leading-[180%] tracking-normal text-[#777777] font-normal min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:h-auto">
          Ambil kendali visual di salah satu titik paling ikonik dan tersibuk
          di wilayah Kabupaten Sukabumi. Billboard 5 dari Media Adhi Perkasa
          menawarkan eksposur tanpa henti di pusat keramaian publik. Detail
          Lokasi & Keunggulan: Titik Lokasi: Pertigaan Alun-Alun Cisaat. Posisi
          Strategis: Tepat di Depan Polsek Cisaat, menghadap langsung ke arus
          kendaraan dari arah Kota Sukabumi, Bogor, maupun jalur alternatif.
        </p>

        <div className="w-full max-w-[448px] h-[348px] md:max-w-[720px] md:h-[553px] lg:max-w-[857px] lg:h-[553px] min-[769px]:max-[1199px]:max-w-full min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:max-w-full min-[1200px]:max-[1439px]:h-auto">
          <img src={cibadakImg} alt="Billboard Cisaat" className="w-full h-full rounded-[16px] lg:rounded-[24px] object-cover"/>
        </div>
      </div>
    </section>
  );
};