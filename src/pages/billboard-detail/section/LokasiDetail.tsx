export const LokasiDetail = () => {
  return (
    <section className="w-full max-w-[857px] mt-[20px] lg:mt-[40px] px-4 md:px-8 lg:px-0 lg:ml-20">
      <div className="flex flex-col gap-[20px]">
        
        <h3 className="text-[#212121] font-semibold text-[24px] md:text-[32px] leading-[140%] tracking-[-0.04em]">Lokasi Detail</h3>

        <div className="w-full h-[300px] sm:h-[400px] lg:h-[488px] rounded-[16px] overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.9353131646085!2d106.87230937475684!3d-6.900380493098852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68365b1160a923%3A0x498206a44e79b402!2sWORKSHOP%20MAP%20Adv.!5e1!3m2!1sid!2sid!4v1787121688495!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Lokasi Detail Workshop MAP Adv."
          />
        </div>
      </div>
    </section>
  );
};