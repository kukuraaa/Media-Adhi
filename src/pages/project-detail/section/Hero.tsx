import { ArrowLeft, MapPin } from "lucide-react";
import pembuatan from "../../../assets/pembuatan.png";

export const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-[80px] md:max-lg:px-[24px] pt-[80px] pb-[40px]">
        <button className="flex items-center justify-center gap-2 cursor-pointer lg:w-[95px] lg:h-[40px] mb-6 lg:mb-[8px] mt-0 text-[#212121]">
          <ArrowLeft size={24} />
          <span className="font-medium lg:w-[63px] lg:h-[18px] lg:text-[18px] lg:leading-[100%]">
            Kembali
          </span>
        </button>

        <div className="w-full mt-[20px] flex flex-row md:max-lg:flex-col items-start gap-[80px] md:max-lg:gap-[40px]">
          <div className="w-[570px] h-[444px] md:max-lg:w-[720px] md:max-lg:h-[394px] flex flex-col">
            <div className="w-[570px] h-auto lg:h-[154px] md:max-lg:w-[720px] md:max-lg:h-[154px] flex flex-col gap-[8px]">
              <h1 className="w-[570px] h-[104px] md:max-lg:w-[720px] md:max-lg:h-[104px] shrink-0 text-[#212121] text-[43px] md:max-lg:text-[36px] font-semibold leading-[100%] tracking-[-0.04em] m-0">
                Pembuatan Neon Box Bulat<br />
                Akrilik Custom untuk TACO
              </h1>

              <div className="flex items-center gap-[8px] box-border w-[253px] h-[40px] lg:w-[253px] lg:h-[40px] px-[8px] py-[8px] mt-1">
                <MapPin className="w-[24px] h-[24px] shrink-0 text-[#212121]/70" />
                <span className="w-[221px] h-[18px] shrink-0 whitespace-nowrap font-normal text-[18px] leading-[18px] tracking-[-0.04em] text-[#212121]/70">
                  Kec Cibadak, Kab Sukabumi
                </span>
              </div>
            </div>

            <div className="w-[570px] h-[250px] md:max-lg:w-[720px] md:max-lg:h-[206px] mt-[32px] flex flex-col">
              <p className="w-[570px] h-[250px] md:max-lg:w-[720px] md:max-lg:h-[206px] text-[14px] font-normal leading-[180%] tracking-[0] text-[#777777] text-justify m-0">
                Media Adhi Persada merancang dan memproduksi Neon Box Bulat
                Akrilik custom sebagai media identitas visual untuk showroom
                TACO di Sukabumi. Menggunakan material berkualitas dan sistem
                pencahayaan LED premium, signage ini dirancang agar tampil
                elegan, mudah dikenali, serta memberikan visibilitas maksimal
                baik pada siang maupun malam hari.
                <br />
                <br />
                Proyek fabrikasi reklame luar ruang berupa Neon Box Bulat
                (Round Light Box) berbahan akrilik untuk brand TACO.
                Diproduksi dengan standar kualitas tinggi, menggunakan sistem
                pencahayaan LED internal yang merata dan bracket kokoh untuk
                memaksimalkan visibilitas toko mitra di jalan raya.
              </p>
            </div>
          </div>

          <div className="w-[630px] h-[553px] md:max-lg:w-[720px] md:max-lg:h-[553px] shrink-0 overflow-hidden rounded-[24px]">
            <img src={pembuatan}alt="Pembuatan Neon Box Bulat Akrilik Custom untuk TACO"
              className="w-[630px] h-[553px] md:max-lg:w-[720px] md:max-lg:h-[553px] object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};