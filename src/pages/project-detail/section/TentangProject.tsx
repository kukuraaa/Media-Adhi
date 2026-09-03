import { CircleAlert, CircleCheck } from "lucide-react";

export const TentangProject = () => {
  return (
    <section className="w-[630px] h-[662px] rounded-[24px] border border-[#EDEDED] bg-[#F9F9F9] px-[24px] py-[24px]">
      <div className="w-[582px] h-full flex flex-col">
        
        <h2 className="w-[582px] h-[45px] text-[32px] font-semibold leading-[140%] tracking-[-0.04em] text-[#212121] m-0">
          Tentang Project
        </h2>

        <div className="w-[582px] h-[175px] mt-[24px]">
          <p className="w-[582px] h-[175px] text-[14px] font-normal leading-[180%] tracking-[0] text-[#777777] text-justify m-0">
            TACO merupakan salah satu brand penyedia solusi material interior
            terkemuka di Indonesia yang dikenal melalui berbagai produk
            decorative surface dan interior finishing. Untuk mendukung
            identitas visual showroom, diperlukan signage yang mampu
            merepresentasikan kualitas brand sekaligus menarik perhatian
            pengguna jalan.
            <br />
            <br />
            Media Adhi Persada dipercaya untuk memproduksi dan memasang Neon Box
            Bulat Akrilik custom dengan standar kualitas tinggi untuk penggunaan
            outdoor.
          </p>
        </div>

        <div className="w-[582px] flex gap-[20px] mt-[24px]">
          
          <div className="w-[285px] h-[354px] px-[16px] py-[24px] flex flex-col gap-[8px]">
            <div className="w-[253px] h-[48px] flex items-center gap-[10px]">
              <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                <CircleAlert className="w-[24px] h-[24px] text-red-600" />
              </div>

              <h3 className="w-[118px] h-[34px] text-[24px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121] m-0">Tantangan</h3>
            </div>

            <ul className="w-[253px] h-[250px] pl-[16px] m-0 text-[14px] font-normal leading-[180%] text-[#777777]">
              <li>Menciptakan signage yang tetap terlihat jelas pada siang maupun malam hari.</li>
              <li>Menyesuaikan bentuk neon box mengikuti identitas visual TACO.</li>
              <li>Menggunakan material yang tahan terhadap cuaca luar ruangan.</li>
              <li>Melakukan proses instalasi dengan aman tanpa mengganggu aktivitas showroom.</li>
            </ul>
          </div>

          <div className="w-[285px] h-[354px] px-[16px] py-[24px] flex flex-col gap-[8px]">
            <div className="w-[253px] h-[48px] flex items-center gap-[10px]">
              <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                <CircleCheck className="w-[24px] h-[24px] text-green-600" />
              </div>

              <h3 className="w-[118px] h-[34px] text-[24px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121] m-0">
                Solusi
              </h3>
            </div>

            <ul className="w-[253px] h-[250px] pl-[16px] m-0 text-[14px] font-normal leading-[180%] text-[#777777]">
              <li>Custom acrylic round neon box.</li>
              <li>High-brightness LED module untuk pencahayaan yang merata.</li>
              <li>Rangka besi dengan finishing powder coating.</li>
              <li>Instalasi profesional menggunakan bracket yang kokoh.</li>
              <li>Finishing presisi untuk menjaga konsistensi identitas merek.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};