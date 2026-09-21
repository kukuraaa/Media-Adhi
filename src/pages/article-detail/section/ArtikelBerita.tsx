import lapetop from "../../../assets/lapetop.png";
import moses from "../../../assets/moses.png";
import gatauapa from "../../../assets/gatauapa.png";
import admin from "../../../assets/admin.png";

const artikelData = [
  {
    id: 1,
    category: "Digital Marketing",
    title: "Pemasangan Seri Vertical Light Box Illuminated Gudang Garam International",
    description:
      "Media Adhi Persada (MAP) kembali dipercaya oleh brand terkemuka, Gudang Garam International, untuk mengeksekusi kampanye periklanan luar ruang (OOH) berdampak tinggi. Proyek ini melibatkan pemasangan seri Vertical Light Box (Neon Box Tiang atau Illuminated Street Banner) secara berderet di sepanjang jalur arteri strategis di area Sukabumi.",
    author: "Admin",
    date: "5 Agustus 2026",
    readTime: "10 Menit Baca",
    image: lapetop,
    avatar: admin,
  },
  {
    id: 2,
    category: "Pemasaran Digital",
    title: "Peluncuran Iklan Banner LED untuk Restoran Sederhana",
    description:
      "Restoran Sederhana meluncurkan iklan banner LED di pusat kota untuk menarik perhatian pelanggan. Kampanye ini dirancang untuk menciptakan pengalaman visual yang menarik dan mengundang pengunjung baru untuk menikmati menu mereka.",
    author: "Admin",
    date: "5 Agustus 2026",
    readTime: "10 Menit Baca",
    image: moses,
    avatar: admin,
  },
  {
    id: 3,
    category: "Pemasaran Digital",
    title: "Kampanye Iklan Video untuk Toko Fashion Online",
    description:
      "Toko Fashion Online meluncurkan kampanye iklan video interaktif yang menampilkan koleksi terbaru mereka. Dengan strategi pemasaran yang inovatif, mereka berharap dapat menjangkau audiens yang lebih luas melalui platform media sosial.",
    author: "Admin",
    date: "5 Agustus 2026",
    readTime: "10 Menit Baca",
    image: gatauapa,
    avatar: admin,
  },
];

export const ArtikelBerita = () => {
  return (
    <section className="w-full min-[1440px]:w-[1440px] min-[1440px]:h-[883px] bg-white px-[20px] md:max-[1439px]:px-[24px] md:max-[1439px]:py-[40px] min-[1440px]:px-[80px] min-[1440px]:py-[80px] flex flex-col items-center">
      <div className="w-full max-w-[1280px] flex flex-col gap-[40px]">
        
        <div className="w-full min-[1440px]:w-[1280px] md:max-[1439px]:h-[124px] min-[1440px]:h-[124px] flex flex-col gap-[16px] md:max-[1439px]:gap-[16px] min-[1440px]:gap-[24px]">
          <h2 className="w-full md:max-[1439px]:w-[494px] md:max-[1439px]:h-[58px] min-[1440px]:w-[494px] min-[1440px]:h-[58px] text-[28px] md:max-[1439px]:text-[48px] min-[1440px]:text-[48px] font-semibold leading-[100%] tracking-[-0.04em] text-[#212121] flex items-center shrink-0">
            Artikel & Berita Lainnya
          </h2>

          <p className="w-full md:max-[1439px]:w-[549px] md:max-[1439px]:h-[50px] min-[1440px]:w-[549px] min-[1440px]:h-[50px] text-[14px] font-normal leading-[180%] tracking-[0.01em] text-[#616161] shrink-0">
            Pilih spot billboard strategis yang siap mengangkat brand Anda.
            Transparan, cepat, dan mudah untuk booking.
          </p>
        </div>

        <div className="w-full md:max-[1439px]:w-[720px] md:max-[1439px]:h-[559px] min-[1440px]:w-[1280px] min-[1440px]:h-[559px] grid grid-cols-1 md:max-[1439px]:grid-cols-2 min-[1440px]:grid-cols-3 gap-[20px] min-[1440px]:gap-[20px] items-stretch">
          {artikelData.map((item, index) => (
            <article key={item.id}
              className={`w-full min-[1440px]:w-[413.33px] flex flex-col gap-[24px] ${
                index === 2
                  ? "hidden min-[1440px]:flex"
                  : "flex"
              }`}>
              <div className="w-full h-[250px] sm:h-[300px] md:max-[1439px]:h-[333px] min-[1440px]:!h-[333px] rounded-[8px] overflow-hidden bg-[#F6F6F6] relative shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
              </div>

              <div className="w-full flex flex-col gap-[12px] flex-grow justify-between min-w-0">
                
                <div>
                  <div className="inline-flex items-center justify-center md:max-[1439px]:w-[134px] md:max-[1439px]:h-[40px] h-[40px] px-[18px] py-[8px] rounded-full bg-[#D2E2F7] border border-[#367FD9]/22 mb-[12px]">
                    <span className="text-[12px] font-normal leading-[180%] text-[#03418D]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-medium md:max-[1439px]:font-medium min-[1440px]:font-semibold leading-[140%] md:max-[1439px]:leading-[140%] text-[#212121] truncate mb-[12px]">
                    {item.title}
                  </h3>

                  <p className="text-[14px] font-normal leading-[180%] text-[#616161] line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-[8px] w-full h-[47px] shrink-0 pt-[12px]">
                  <img src={item.avatar} alt={item.author} className="w-[47px] h-[47px] rounded-full object-cover shrink-0"/>

                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[14px] font-medium text-[#212121] leading-[180%]">
                      {item.author}
                    </span>

                    <div className="flex items-center gap-[8px] whitespace-nowrap text-[12px] font-normal leading-[180%] text-[#616161]">
                      <span>{item.date}</span>
                      <span className="w-[4px] h-[4px] rounded-full bg-[#111111] inline-block shrink-0"></span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};