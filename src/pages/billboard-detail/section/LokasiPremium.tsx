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
    <section className="w-full max-[767px]:w-[480px] max-[767px]:h-[2592px] bg-[#F6F6F6] py-[40px] md:py-[60px] lg:py-[80px] px-4 md:px-8 lg:px-[80px] mt-[40px] lg:mt-[80px] lg:h-[1172px]">
      <div className="w-full flex flex-col gap-[32px] md:gap-[40px]">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6 max-[767px]:w-[448px] max-[767px]:h-[172px] lg:h-[124px]">
          <div className="flex flex-col gap-[24px] h-[100px] lg:w-[1084px] lg:h-[124px]">
            <h2 className="text-[#212121] font-semibold text-[28px] sm:text-[36px] md:text-[48px] w-[448px] h-[34px] leading-[34px] lg:w-[519px] lg:h-[58px] lg:leading-[58px] tracking-[-0.04em]">
              Lokasi Premium Lainnya
            </h2>
            <p className="text-[14px] text-[rgba(17,17,17,0.6)] w-[448px] h-[50px] leading-[25px] lg:w-[549px] lg:h-[50px] lg:leading-[25px]">Pilih spot billboard strategis yang siap mengangkat brand Anda.Transparan, cepat, dan mudah untuk booking.</p>
          </div>

           <div className="inline-flex items-center justify-center gap-[8px] bg-[#D4E4D5] text-[#03850D] text-[18px] font-normal tracking-[-0.04em] w-[172px] h-[48px] rounded-[100px] shrink-0 whitespace-nowrap">
            <FaMapMarkerAlt className="text-[20px] shrink-0" />
            <span>5 lokasi aktif</span>
          </div>
        </div>

        <div className="grid w-[448px] h-[2300px] grid-cols-1 md:w-[720px] md:h-[1372px] md:grid-cols-2 lg:w-[1280px] lg:h-[848px] lg:grid-cols-[repeat(3,413.33px)] gap-[20px] lg:grid-rows-[repeat(2,414px)]">
          {billboardData.map((billboard, index) => (
            <div key={index}
               className="bg-white rounded-[16px] p-[8px] flex flex-col gap-[12px] overflow-hidden w-full lg:h-[414px]">
   
              <div className="relative w-[432px] h-[289px] lg:w-[397.33px] lg:h-[289px] shrink-0 overflow-hidden rounded-[8px]">
                <img src={billboard.image} alt={billboard.title} className="w-full lg:w-[397.33px] h-full lg:h-[289px] object-cover"/>

                <div className={`absolute top-[8px] left-[8px] inline-flex items-center gap-[8px] w-[78px] h-[20px] px-[8px] rounded-full text-[12px] ${
                    billboard.available
                      ? "bg-[#D4E4D5] text-[#03850D]"
                      : "bg-[#E5E5E5] text-[#777777]"
                  }`}
                >
                  <span className={`w-[6px] h-[6px] rounded-full ${
                      billboard.available ? "bg-[#03850D]" : "bg-[#777777]"
                    }`}
                  />
                  <span className="w-[46px] h-[12px] text-[12px] leading-[12px] shrink-0">
                    {billboard.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] w-[432px] h-[131px] lg:w-[397.33px] lg:h-[101px] min-w-0 shrink-0">
                <div className="flex flex-col gap-[4px] w-[416px] h-[43px] min-w-0 lg:w-[381.33px]">
                  <h3 className="w-[416px] h-[22px] shrink-0 text-[16px] leading-[22px] font-medium text-[rgba(0,0,0,0.95)] truncate block lg:w-[381.33px]">{billboard.title}</h3>

                  <p className="text-[14px] text-[rgba(16,1,1,0.6)] leading-[140%] truncate w-full block">{billboard.address}</p>
                </div>

                <div className="flex flex-col gap-[12px] w-[416px] h-[60px] min-w-0 lg:flex-row lg:items-center lg:justify-between lg:w-[381.33px] lg:h-[30px]">
                  <div className={`flex items-center gap-[8px] text-[14px] w-[416px] h-[18px] min-w-0 shrink-0 lg:w-[260.33px] ${
                      billboard.available
                        ? "text-[#03850D]"
                        : "text-[rgba(17,17,17,0.6)]"
                    }`}
                  >
                    {billboard.available ? (
                      <FaCheckCircle className="text-[18px] w-[18px] h-[18px] shrink-0" />
                    ) : (
                      <FaClock className="text-[18px] w-[18px] h-[18px] shrink-0" />
                    )}
                    <span className="w-[388px] h-[17px] shrink-0 truncate block text-[14px] leading-[17px] lg:w-[232.33px]">{billboard.info}</span>
                  </div>

                  <button className={`w-[109px] h-[30px] shrink-0 flex items-center justify-center rounded-[8px] text-[14px] leading-[20px] cursor-pointer ${
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