import { FaMapMarkerAlt, FaCheckCircle, FaClock } from "react-icons/fa";

import billboard1 from "../../../assets/billboard 1.png";
import billboard2 from "../../../assets/billboard 2.png";
import billboard from "../../../assets/billboard_baru.png";
import billboard5 from "../../../assets/billboard 5.png";
import baliho from "../../../assets/baliho.png";

const billboardData = [
  {
    image: billboard1,
    status: "Tersedia",
    title: "Billboard 1 | Pertigaan Cibadak",
    address: "Kec Cibadak, Kab Sukabumi",
    info: "Siap tayang, Booking cepat",
    available: true,
  },
  {
    image: billboard2,
    status: "Tersedia",
    title: "Billboard 2 | Jl. Raya Cibadak, Depan Baso Subur Ruko",
    address: "Pintu masuk pasar semi modern, Cibadak, Kec. Cibadak, Kabupaten Sukabumi, Jawa Barat",
    info: "Siap tayang, Booking cepat",
    available: true,
  },
  {
    image: billboard,
    status: "Tersedia",
    title: "Billboard Baru",
    address: "Kec Cibadak, Kab Sukabumi",
    info: "Siap tayang, Booking cepat",
    available: true,
  },
  {
    image: billboard5,
    status: "Tersedia",
    title: "Billboard 5 | Pertigaan alun-alun Cisaat Depan Polsek",
    address: "Jl. Nasional III, Sukamanah, Kec. Cisaat, Kabupaten Sukabumi, Jawa Barat 43152",
    info: "Siap tayang, Booking cepat",
    available: true,
  },
  {
    image: baliho,
    status: "Disewa",
    title: "Baliho 4×6 Frontlite",
    address: "Jl. KH Ahmad Sanusi Gunung Puyuh Kota Sukabumi",
    info: "PT. SPN • s/d 01 Mei 2027",
    available: false,
  },
];

export const LokasiPremium = () => {
  return (
    <section className="w-full bg-[#F6F6F6] py-[40px] md:py-[60px] lg:py-[80px] px-4 md:px-8 lg:px-[80px] mt-[40px] lg:mt-[80px]">
      <div className="w-full flex flex-col gap-[32px] md:gap-[40px]">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
          <div className="flex flex-col gap-[12px] md:gap-[16px] max-w-[549px]">
            <h2 className="text-[#212121] font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[100%] tracking-[-0.04em]">
              Lokasi Premium Lainnya
            </h2>
            <p className="text-[14px] text-[rgba(17,17,17,0.6)] leading-[180%]">Pilih spot billboard strategis yang siap mengangkat brand Anda.Transparan, cepat, dan mudah untuk booking.</p>

          </div>

          <div className="inline-flex items-center gap-[8px] bg-[#D4E4D5] text-[#03850D] text-[16px] md:text-[18px] font-normal tracking-[-0.04em] px-[20px] md:px-[24px] py-[10px] md:py-[12px] rounded-[100px] w-fit shrink-0 whitespace-nowrap">
            <FaMapMarkerAlt className="text-[18px] md:text-[20px] shrink-0" />
            <span>5 lokasi aktif</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {billboardData.map((billboard, index) => (
            <div key={index}
              className="bg-white rounded-[16px] p-[8px] flex flex-col gap-[12px] overflow-hidden w-full">
   
              <div className="relative w-full h-[220px] sm:h-[250px] lg:h-[289px] overflow-hidden rounded-[8px]">
                <img src={billboard.image} alt={billboard.title} className="w-full h-full object-cover"/>

                <div className={`absolute top-[8px] left-[8px] inline-flex items-center gap-[6px] px-[12px] py-[4px] rounded-full text-[12px] ${
                    billboard.available
                      ? "bg-[#D4E4D5] text-[#03850D]"
                      : "bg-[#E5E5E5] text-[#777777]"
                  }`}
                >
                  <span className={`w-[6px] h-[6px] rounded-full ${
                      billboard.available ? "bg-[#03850D]" : "bg-[#777777]"
                    }`}
                  />
                  {billboard.status}
                </div>
              </div>

              <div className="flex flex-col gap-[12px] w-full min-w-0">
                <div className="flex flex-col gap-[4px] w-full min-w-0">
                  <h3 className="text-[16px] font-medium text-[rgba(0,0,0,0.95)] leading-[140%] truncate w-full block">{billboard.title}</h3>

                  <p className="text-[14px] text-[rgba(16,1,1,0.6)] leading-[140%] truncate w-full block">{billboard.address}</p>
                </div>

                <div className="flex items-center justify-between gap-[12px] w-full min-w-0">
                  <div className={`flex items-center gap-[8px] text-[14px] min-w-0 ${
                      billboard.available
                        ? "text-[#03850D]"
                        : "text-[rgba(17,17,17,0.6)]"
                    }`}
                  >
                    {billboard.available ? (
                      <FaCheckCircle className="text-[14px] shrink-0" />
                    ) : (
                      <FaClock className="text-[14px] shrink-0" />
                    )}
                    <span className="truncate block">{billboard.info}</span>
                  </div>

                  <button className={`shrink-0 px-[16px] sm:px-[20px] py-[8px] rounded-[8px] text-[14px] ${
                      billboard.available
                        ? "bg-[#D4EFD8] text-[#03850D]"
                        : "bg-[#F2F2F2] text-[rgba(17,17,17,0.4)]"
                    }`}
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};