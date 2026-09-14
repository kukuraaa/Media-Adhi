const Berlangganan = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] px-[80px] py-[40px]">
        <div className="relative flex h-[276px] w-full flex-col items-center overflow-hidden rounded-[32px] borderborder-[rgba(239,239,239,1)] bg-[radial-gradient(circle_at_50%_100%,rgba(54,127,217,1)_0%,rgba(1,63,139,1)_100%)] px-[48px]py-[48px]">
          <div className=" pointer-events-none absolute bottom-0 left-0 h-[150px] w-[300px] opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.16)_1.2px,transparent_1.2px)] [background-size:8px_8px] [mask-image:linear-gradient(to_top_right,black,transparent)]"/>

          <div className=" pointer-events-none absolute right-0 bottom-0 h-[150px] w-[300px] opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.16)_1.2px,transparent_1.2px)] [background-size:8px_8px] [mask-image:linear-gradient(to_top_left,black,transparent)]"/>

          <div className="relative z-10 flex w-full flex-col items-center">

            <div className="flex flex-col items-center gap-[8px]">
              <h2 className="h-[58px] w-[547px] text-center font-Inter text-[48px] font-semibold leading-[100%] tracking-[-0.04em] text-white">
                Berlangganan Newsletter
              </h2>

              <p className="h-[25px] w-[296px] text-center font-['Inter'] text-[14px] font-normal leading-[180%] tracking-[-0.04em] text-white">
                Dapatkan artikel terbaru langsung di inbox Anda.
              </p>
            </div>
     
            <form className=" mt-[24px] flex h-[40px] w-[566px] flex-row items-center gap-[10px]">
              <input type="email" placeholder="Masukkan alamat email Anda"
                className=" h-[40px] w-[421px] rounded-[100px] border border-[rgba(239,239,239,1)] bg-white px-[16px] py-[8px] font-['Inter'] text-[16px] font-normal leading-[20px] tracking-[-0.04em] text-[#333333] outline-none placeholder:text-[#888888]"/>

              <button type="submit"
                className="h-[40px] w-[135px] shrink-0 rounded-[100px] bg-[#013F8B] px-[24px] py-[12px] font-['Inter'] text-[16px] font-normal leading-[16px] tracking-[-0.04em] text-white">
                Berlangganan
              </button>
            </form>

            <p className=" mt-[10px] h-[22px] w-[407px] text-center font-['Inter'] text-[12px] font-normal leading-[180%] tracking-[-0.04em] text-white">
              Kami menghargai privasi Anda. Anda dapat berhenti berlangganan kapan saja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Berlangganan;