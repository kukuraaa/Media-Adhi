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
    <section className=" w-full max-[767px]:w-[480px] max-[767px]:h-[2592px] min-[768px]:w-[786px] min-[768px]:h-[1669px] min-[1440px]:w-full min-[1440px]:h-[1172px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:w-full min-[1200px]:max-[1439px]:h-auto bg-[#F6F6F6] py-[40px] md:py-[60px] lg:py-[80px] px-4 md:px-8 lg:px-[80px] mt-[40px] lg:mt-[80px]">
      <div className="w-full flex flex-col gap-[32px] md:gap-[40px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6 max-[767px]:w-[448px] max-[767px]:h-[172px] min-[768px]:w-[720px] min-[768px]:h-[177px] lg:h-[124px] min-[1440px]:w-[1280px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:w-full min-[1200px]:max-[1439px]:h-auto">
          <div className="flex flex-col gap-[24px] h-[100px] min-[768px]:w-[720px] min-[768px]:h-[105px] lg:w-[1084px] lg:h-[124px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:w-full min-[1200px]:max-[1439px]:h-auto">
            <h2 className="text-[#212121] font-semibold text-[28px] sm:text-[36px md:text-[48px] w-[448px] h-[34px] leading-[34px] min-[768px]:w-[720px] min-[768px]:h-[39px] min-[768px]:leading-[39px] lg:w-[519px] lg:h-[58px] lg:leading-[58px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto tracking-[-0.04em]">
              Lokasi Premium Lainnya
            </h2>

            <p className="text-[14px] text-[rgba(17,17,17,0.6)] w-[448px] h-[50px] leading-[25px] min-[768px]:w-[558px] min-[768px]:h-[50px] lg:w-[549px] lg:h-[50px] lg:leading-[25px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto">
              Pilih spot billboard strategis yang siap mengangkat brand Anda.
              Transparan, cepat, dan mudah untuk booking.
            </p>
          </div>

          <div className="inline-flex items-center justify-center gap-[8px]bg-[#D4E4D5]
              text-[#03850D] text-[18px] font-normal tracking-[-0.04em] w-[172px] h-[48px] rounded-[100px] shrink-0 whitespace-nowrap">
            <FaMapMarkerAlt className="text-[20px] shrink-0" />
            <span>5 lokasi aktif</span>
          </div>
        </div>

        <div className="grid grid-cols-1 w-[448px] h-[2300px] md:w-[720px] md:h-[1372px] md:grid-cols-2 lg:w-[1280px] lg:h-[848px] lg:grid-cols-[repeat(3,413.33px)] lg:grid-rows-[repeat(2,414px)] gap-[20px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto min-[769px]:max-[1199px]:grid-cols-2 min-[1200px]:max-[1439px]:w-full min-[1200px]:max-[1439px]:h-auto min-[1200px]:max-[1439px]:grid-cols-3">
          {billboardData.map((billboard, index) => (
            <div key={index} className=" bg-white rounded-[16px] p-[8px] flex flex-col gap-[12px] overflow-hidden w-full lg:h-[414px] min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:h-[414px]">
      
              <div className="relative w-[432px] h-[289px] min-[768px]:w-[334px] min-[768px]:h-[289px] lg:w-[397.33px] lg:h-[289px] min-[769px]:max-[1199px]:w-full min-[1200px]:max-[1439px]:w-full shrink-0 overflow-hidden rounded-[8px]">
                <img src={billboard.image} alt={billboard.title} className=" w-full h-[289px] object-cover"/>

                <div className={`absolute top-[8px] left-[8px] inline-flex items-center gap-[8px] w-[78px] h-[20px] px-[8px] rounded-full text-[12px] ${
                    billboard.available
                      ? "bg-[#D4E4D5] text-[#03850D]"
                      : "bg-[#E5E5E5] text-[#777777]"
                  }`}
                  >
                  <span className={`w-[6px] h-[6px] rounded-full ${ billboard.available? "bg-[#03850D]": "bg-[#777777]"}`}/>
                  <span className="w-[46px] h-[12px] text-[12px] leading-[12px] shrink-0">
                    {billboard.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[12px] w-[432px] h-[131px] min-[768px]:w-[334px] min-[768px]:h-[131px] lg:w-[397.33px] lg:h-[101px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:w-full min-w-0 shrink-0">
                <div className="flex flex-col gap-[4px] w-[416px] h-[43px] min-[768px]:w-[318px] min-[768px]:h-[43px] lg:w-[381.33px] min-[769px]:max-[1199px]:w-full min-[1200px]:max-[1439px]:w-full min-w-0">
                  <h3 className=" w-[416px] h-[22px] min-[768px]:w-[318px] min-[768px]:h-[22px] lg:w-[381.33px] min-[769px]:max-[1199px]:w-full min-[1200px]:max-[1439px]:w-full shrink-0 text-[16px] leading-[22px] font-medium text-[rgba(0,0,0,0.95)] truncate block">
                    {billboard.title}
                  </h3>

                  <p className="text-[14px] text-[rgba(16,1,1,0.6)] leading-[140%] truncate w-full block min-[768px]:w-[318px] min-[768px]:h-[17px] min-[769px]:max-[1199px]:w-full min-[1200px]:max-[1439px]:w-full">
                    {billboard.address}
                  </p>
                </div>

                <div className="flex flex-col gap-[12px] w-[416px] h-[60px] min-[768px]:w-[318px] min-[768px]:h-[60px] min-w-0 lg:flex-row lg:items-center lg:justify-between lg:w-[381.33px] lg:h-[30px] min-[769px]:max-[1199px]:w-full min-[769px]:max-[1199px]:h-auto min-[1200px]:max-[1439px]:w-full">
                  <div className={`flex items-center gap-[8px] text-[14px] w-[416px] h-[18px] min-[768px]:w-[318px] min-[768px]:h-[18px] min-w-0 shrink-0 lg:w-[260.33px] min-[769px]:max-[1199px]:w-full min-[1200px]:max-[1439px]:w-full ${
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
                    <span className="w-[388px] h-[17px] min-[768px]:w-[290px] min-[768px]:h-[17px] shrink-0 truncate block text-[14px] leading-[17px] lg:w-[232.33px] min-[769px]:max-[1199px]:w-full min-[1200px]:max-[1439px]:w-full">
                      {billboard.info}
                    </span>
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