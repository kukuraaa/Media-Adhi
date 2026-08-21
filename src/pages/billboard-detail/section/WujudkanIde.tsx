export const WujudkanIde = () => {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-[80px] pt-[24px] sm:pt-[32px] lg:pt-[40px] pb-[40px] sm:pb-[52px] lg:pb-[65px]">
      <div className="w-full rounded-[24px] sm:rounded-[32px] border border-[rgba(0,0,0,0.05)] py-[32px] sm:py-[40px] lg:py-[48px] px-5 sm:px-[32px] lg:px-[48px] flex flex-col items-center justify-center gap-[16px] sm:gap-[20px] lg:gap-[24px] text-center"
        style={{background:"radial-gradient(150% 150% at 50% 0%, rgba(54, 127, 217, 1) 0%, rgba(1, 63, 139, 1) 100%)",}}>
        
        <div className="flex flex-col items-center gap-[8px] sm:gap-[10px] max-w-[752px]">
          <h2 className="text-white text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[115%] sm:leading-[108%] lg:leading-[105%] tracking-[-0.04em]">
            Wujudkan Ide Anda Bersama Kami!
          </h2>

          <p className="text-white text-[13px] sm:text-[14px] font-normal leading-[160%] sm:leading-[180%] tracking-[-0.04em] max-w-[280px] sm:max-w-[480px] lg:max-w-[664px]">
            Dari perklanan hingga event organizer, MAP hadir dengan layanan terbaik untuk mendukung bisnis Anda.
          </p>
        </div>

        <div className="flex items-center justify-center gap-[8px] sm:gap-[10px] w-full sm:w-auto">
          
          <button className="h-[38px] sm:h-[40px] px-[16px] sm:px-[24px] bg-white text-[#013F8B] text-[13px] sm:text-[14px] font-medium rounded-[100px] whitespace-nowrap">
            Konsultasi Sekarang
          </button>

          <button className="h-[38px] sm:h-[40px] px-[16px] sm:px-[24px] bg-[#013F8B] text-white text-[13px] sm:text-[14px] font-medium rounded-[100px] whitespace-nowrap">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};