import jelajahi_1 from "../../../assets/jelajahi_1.png";
import jelajahi_2 from "../../../assets/jelajahi_2.png";
import jelajahi_3 from "../../../assets/jelajahi_3.png";

export const JelajahiProyek = () => {
  const jelajahi = [
    {
      image: jelajahi_3,
      title: "Pemasangan Seri Vertical Light Box Illuminated Gudang Garam International",
      description: "Media Adhi Persada (MAP) kembali dipercaya oleh brand terkemuka, Gudang Garam International, untuk mengeksekusi kampanye periklanan luar ruang (OOH) berdampak tinggi. Proyek ini melibatkan pemasangan seri Vertical Light Box (Neon Box Tiang atau Illuminated Street Banner) secara berderet di sepanjang jalur arteri strategis di area Sukabumi.",
    },
    {
      image: jelajahi_2,
      title: "Setup Event Yomart Gebyar Senam Segar",
      description: "Kesuksesan sebuah acara berskala besar sangat bergantung pada kualitas tata panggung dan visual yang memukau. Media Adhi Persada dipercaya sebagai vendor pendukung untuk event",
    },
    {
      image: jelajahi_1,
      title: "Pembuatan Letter Timbul & Branding Eksterior Restoran Menggrilla Cianjur",
      description: "Tampilan depan (fasad) sebuah restoran adalah daya tarik pertama yang akan menentukan keputusan pelanggan untuk singgah. Menggrilla, salah satu destinasi kuliner dan tempat makan steak favorit di Cianjur, mempercayakan pengerjaan branding visual eksterior bangunannya kepada Media Adhi Persada. Pada proyek ini, tim kami mengeksekusi dua elemen visual utama.",
    },
  ];

  return (
    <section className="w-full bg-white lg:h-[758px] max-md:h-[1215px]">
      <div className="w-full max-w-[1440px] h-full max-md:h-full mx-auto px-[80px] py-[80px] md:px-[24px] md:py-[40px] lg:px-[80px] lg:py-[80px] max-md:px-[24px] max-md:py-[40px]">
        <div className="w-[1280px] md:w-[720px] lg:w-[1280px] max-md:w-full flex flex-col gap-[40px]">

          <div className="w-full h-[118px] max-md:h-[195px] flex flex-col gap-[16px]">
            <h2 className="w-[447px] max-md:w-[432px] h-[52px] max-md:h-[104px] text-[43px] font-semibold leading-[100%] max-md:leading-[115%] tracking-[-0.04em] text-[#212121] m-0">
              Jelajahi Proyek <br className="hidden max-md:block" />
              Lainnya
            </h2>

            <p className="w-[679px] max-md:w-[432px] h-[50px] max-md:h-[75px] text-[12px] md:text-[14px] lg:text-[12px] max-md:text-[14px] font-normal leading-[150%] md:leading-[180%] lg:leading-[150%] max-md:leading-[180%] tracking-[0] text-[#777777] m-0">
              Temukan berbagai proyek signage, billboard, dan media promosi yang
              telah kami kerjakan untuk
              <br className="max-md:hidden" />
              membantu bisnis meningkatkan visibilitas dan memperkuat identitas
              merek.
            </p>
          </div>

          <div className="w-full h-[440px] max-md:h-[900px] grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 gap-[16px] md:gap-[20px] lg:gap-[16px] max-md:gap-[20px]">
            {jelajahi.map((jelajahi, index) => (
              <div key={index} className={`w-full md:w-[350px] lg:w-[413.33px] max-md:w-full h-[440px] max-md:h-auto flex flex-col ${
                  index === 2 ? "hidden lg:flex" : ""
                } ${index >= 2 ? "max-md:hidden" : ""}`}>
                <img src={jelajahi.image} alt={jelajahi.title} className="w-full h-[333px] object-cover rounded-[8px]"/>

                <div className="w-full h-[83px] max-md:h-[83px] mt-[16px] md:mt-[24px] lg:mt-[16px] flex flex-col md:gap-[4px] lg:gap-0 max-md:gap-[4px]">
                  <h3 className="h-[25px] max-md:h-[25px] text-[18px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121] truncate">
                    {jelajahi.title}
                  </h3>

                  <p className="h-[54px] max-md:h-[54px] mt-[4px] md:mt-0 lg:mt-[4px] max-md:mt-0 text-[14px] font-normal leading-[180%] tracking-[0] text-[#777777] line-clamp-2 overflow-hidden">
                    {jelajahi.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};