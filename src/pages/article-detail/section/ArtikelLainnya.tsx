import { PiInstagramLogoFill } from "react-icons/pi";
import { IoIosShareAlt } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { TbCopyFilled } from "react-icons/tb";

import lapetop from "../../../assets/lapetop.png";

export const ArtikelLainnya = () => {
  const articlesList = [
    {
      id: 1,
      image: lapetop,
      title: "Pemasangan Seri Vertical Light Box Illuminated Gudang Garam International",
      subtitle: "Media Adhi Persada (MAP) kembali dipercaya oleh brand terkemuka, Gudang Garam International, untuk mengeksekusi kampanye periklanan luar ruang (OOH) berdampak tinggi. Proyek ini melibatkan pemasangan seri Vertical Light Box (Neon Box Tiang atau Illuminated Street Banner) secara berderet di sepanjang jalur arteri strategis di area Sukabumi.",
    },
    {
      id: 2,
      image: lapetop,
      title: "Peluncuran Produk Baru Oleh PT Sarihusada Generasi Mahardhika",
      subtitle: "PT Sarihusada Generasi Mahardhika meluncurkan produk susu pertumbuhan baru yang bertujuan untuk memberikan nutrisi maksimal bagi anak-anak. Acara peluncuran ini dihadiri oleh para ahli gizi dan influencer parenting.",
    },
    {
      id: 3,
      image: lapetop,
      title: "Kemitraan Strategis Antara Gojek dan Grab",
      subtitle: "Gojek dan Grab mengumumkan kemitraan strategis untuk meningkatkan layanan antar makanan di Jakarta. Kolaborasi ini bertujuan untuk memberikan pengalaman yang lebih baik bagi pelanggan.",
    },
    {
      id: 4,
      image: lapetop,
      title: "Festival Budaya Harapan Bangsa 2023",
      subtitle: "Festival Budaya Harapan Bangsa 2023 diadakan untuk merayakan keragaman budaya Indonesia. Acara ini menampilkan pertunjukan seni tradisional dan pameran kuliner dari berbagai daerah.",
    },
  ];

  return (
    <div className="w-full lg:w-[383px] flex flex-col gap-[10px]">
      
      <div className="w-full bg-[#F9F9F9] border border-black/5 rounded-[24px] p-[20px] flex flex-col gap-[16px]">
        <div className="flex items-center justify-between w-full h-[28px]">
          <h3 className="text-[20px] font-semibold text-[#212121] tracking-[-0.04em]">
            Bagikan
          </h3>

          <div className="flex items-center gap-[16px]">
            <button className="text-[#013F8B]">
              <PiInstagramLogoFill size={24} />
            </button>

            <button className="text-[#013F8B]">
              <IoLogoWhatsapp size={24} />
            </button>

            <button className="text-[#013F8B]">
              <FaFacebook size={24} />
            </button>

            <button className="text-[#013F8B]">
              <IoIosShareAlt size={24} />
            </button>
          </div>
        </div>

        <div className="w-full bg-white border border-[#EFEFEF] rounded-[16px] px-[16px] py-[12px] flex items-center justify-between gap-[12px]">
          <span className="text-[14px] text-[#616161] truncate font-normal">
            https://mediaadhipersada.id/blog/meningkatkan-efisiensi-cafe-dengan-sistem-pembayaran-qr
          </span>

          <button className="text-[#212121] transition-opacity">
            <TbCopyFilled size={24} />
          </button>
        </div>
      </div>

      <div className="w-full bg-[#F9F9F9] border border-black/5 rounded-[24px] p-[20px] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[4px]">
          <h3 className="text-[20px] font-semibold text-[#212121] tracking-[-0.04em]">
            Artikel Lainnya
          </h3>

          <p className="text-[14px] text-[#777777] font-normal leading-[180%] tracking-[-0.02em]">
            Butuh penawaran cepat? Hubungi tim kami.
          </p>
        </div>

        <div className="flex flex-col gap-[12px]">
          {articlesList.map((item) => (
            <div
              key={item.id}
              className="w-full bg-white border border-[#EFEFEF] rounded-[16px] py-[8px] px-[16px] flex items-center gap-[12px] cursor-pointer group hover:shadow-sm transition-all"
            >
              <div className="w-[64px] h-[64px] shrink-0 rounded-[8px] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col gap-[8px] justify-center overflow-hidden w-full">
                <h4 className="text-[14px] font-medium text-[#000000f2] leading-[140%] tracking-[-0.02em] line-clamp-2git transition-colors">
                  {item.title}
                </h4>

                <p className="text-[12px] text-[#777777] leading-[180%] tracking-[0em] truncate font-normal">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};