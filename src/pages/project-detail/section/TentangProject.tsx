import { FaCheckCircle } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

export const TentangProject = () => {
  return (
    <section className="w-full md:max-lg:w-[720px] md:max-lg:h-[637px] lg:w-[630px] h-auto lg:h-[662px] max-md:w-[448px] max-md:h-[1011px] rounded-[24px] border border-[#EDEDED] bg-[#F9F9F9] p-[24px] lg:px-[24px] lg:py-[24px]">
      <div className="w-full lg:w-[582px] h-full flex flex-col">
        
        <h2 className="w-full md:max-lg:w-[672px] md:max-lg:h-[45px] lg:w-[582px] h-auto lg:h-[45px] max-md:w-[400px] max-md:h-[45px] text-[32px] font-semibold leading-[140%] tracking-[-0.04em] text-[#212121] m-0">
          Tentang Project
        </h2>

        <div className="w-full md:max-lg:w-[672px] md:max-lg:h-[175px] lg:w-[582px] h-auto lg:h-[175px] max-md:w-[400px] max-md:h-[250px] mt-[24px]">
          <p className="w-full md:max-lg:w-[672px] md:max-lg:h-[175px] lg:w-[582px] h-auto lg:h-[175px] max-md:w-[400px] max-md:h-[250px] text-[14px] font-normal leading-[180%] tracking-[0] text-[#777777] text-justify m-0">
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

        <div className="w-full md:max-lg:w-[672px] md:max-lg:h-[329px] lg:w-[582px] max-md:w-[400px] max-md:h-[628px] flex flex-col md:flex-row lg:flex-row gap-[20px] mt-[24px]">
          
          <div className="w-full md:max-lg:w-[326px] md:max-lg:h-[304px] lg:w-[285px] h-auto lg:h-[354px] max-md:w-[400px] max-md:h-[304px] px-[16px] py-[24px] flex flex-col gap-[8px]">
            <div className="w-full md:max-lg:w-[182px] md:max-lg:h-[48px] lg:w-[182px] h-[48px] max-md:w-[182px] max-md:h-[48px] flex items-center gap-[10px]">
              <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                <GoAlertFill className="w-[24px] h-[24px] text-red-600" />
              </div>

              <h3 className="w-[118px] h-[34px] text-[24px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121] m-0">
                Tantangan
              </h3>
            </div>

            <ul className="w-full md:max-lg:w-[294px] md:max-lg:h-[200px] lg:w-[253px] h-auto lg:h-[250px] max-md:w-[368px] max-md:h-[200px] pl-[16px] list-disc m-0 text-[14px] font-normal leading-[180%] text-[#777777]">
              <li>Menciptakan signage yang tetap terlihat jelas pada siang maupun malam hari.</li>
              <li>Menyesuaikan bentuk neon box mengikuti identitas visual TACO.</li>
              <li>Menggunakan material yang tahan terhadap cuaca luar ruangan.</li>
              <li>Melakukan proses instalasi dengan aman tanpa mengganggu aktivitas showroom.</li>
            </ul>
          </div>

          
          <div className="w-full md:max-lg:w-[326px] md:max-lg:h-[329px] lg:w-[285px] h-auto lg:h-[354px] max-md:w-[400px] max-md:h-[304px] px-[16px] py-[24px] flex flex-col gap-[8px]">
            <div className="w-full md:max-lg:w-[131px] md:max-lg:h-[48px] lg:w-[131px] h-[48px] max-md:w-[131px] max-md:h-[48px] flex items-center gap-[10px]">
              <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                <FaCheckCircle className="text-[18px] w-[18px] h-[18px] shrink-0 text-[#03850D]" />
              </div>

              <h3 className="w-[118px] md:max-lg:w-[67px] md:max-lg:h-[34px] lg:w-[67px] h-[34px] text-[24px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121] m-0">
                Solusi
              </h3>
            </div>

            <ul className="w-full md:max-lg:w-[294px] md:max-lg:h-[225px] lg:w-[253px] h-auto lg:h-[225px] max-md:w-[368px] max-md:h-[200px] pl-[16px] list-disc m-0 text-[14px] font-normal leading-[180%] text-[#777777]">
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