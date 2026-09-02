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
    <section className="w-full bg-white lg:h-[758px]">
      <div className="w-full max-w-[1440px] h-full mx-auto px-[80px] py-[80px]">
        <div className="w-[1280px] flex flex-col gap-[40px]">

          <div className="w-[1280px] h-[118px] flex flex-col gap-[16px]">
            <h2 className="w-[447px] h-[52px] text-[43px] font-semibold leading-[100%] tracking-[-0.04em] text-[#212121] m-0">
              Jelajahi Proyek Lainnya
            </h2>

            <p className="w-[679px] h-[50px] text-[12px] font-normal leading-[150%] tracking-[0] text-[#777777] m-0">
             Temukan berbagai proyek signage, billboard, dan media promosi yang telah kami kerjakan untuk 
             <br />
             membantu bisnis meningkatkan visibilitas dan memperkuat identitas merek.
            </p>
          </div>

          <div className="w-[1280px] h-[440px] grid grid-cols-3 gap-[16px]">
            {jelajahi.map((jelajahi, index) => (
              <div key={index} className="w-[413.33px] h-[440px] flex flex-col">
                <img src={jelajahi.image} alt={jelajahi.title} className="w-[416px] h-[333px] object-cover rounded-[8px]"/>

                <div className="w-[413.33px] h-[83px] mt-[16px] flex flex-col">
                <h3 className="w-[413.33px] h-[25px] text-[18px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121] truncate">{jelajahi.title}</h3>

                <p className="w-[413.33px] h-[54px] mt-[4px] text-[14px] font-normal leading-[180%] tracking-[0] text-[#777777] line-clamp-2 overflow-hidden">
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