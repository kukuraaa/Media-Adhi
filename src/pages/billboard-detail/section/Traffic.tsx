import { Eye, Bike, Car, Footprints, Truck, Bus } from "lucide-react";

const trafficData = [
  { icon: Eye, title: "Visibility", value: "±80 meter", subtext: "Jarak pandang" },
  { icon: Bike, title: "Roda 2", value: "8.500", subtext: "Motor & sepeda motor" },
  { icon: Car, title: "Roda 4", value: "2.400", subtext: "Mobil & kendaraan pribadi" },
  { icon: Footprints, title: "Pejalan Kaki", value: "600", subtext: "Keramaian area" },
  { icon: Truck, title: "Truk", value: "350", subtext: "Distribusi & logistik" },
  { icon: Bus, title: "Bis", value: "5", subtext: "Transportasi publik" },
];

export const Traffic = () => {
  return (
    <section className="w-full py-6 max-[767px]:w-[448px] max-[767px]:h-[729px] md:w-[720px] md:h-[603px] lg:py-10 lg:w-[857px] lg:h-[465px]">
      <div className="flex flex-col gap-4 md:gap-[20px] w-full max-[767px]:w-[448px] max-[767px]:h-[729px] md:w-[720px] md:h-[603px] lg:w-[857px] lg:h-[465px]">
        
        <h2 className="w-full max-[767px]:w-[448px] max-[767px]:h-[45px] md:w-[720px] md:h-[45px] lg:w-[857px] h-auto lg:h-[45px] text-[24px] sm:text-[28px] lg:text-[32px] max-[767px]:text-[24px] font-semibold leading-[140%] max-[767px]:leading-[45px] tracking-[-0.04em] text-[#212121]">Traffic Harian (Estimasi)</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-[8px] md:gap-4 lg:gap-[8px] w-full max-[767px]:w-[448px] max-[767px]:h-[664px] md:w-[720px] md:h-[538px] lg:w-[857px] lg:h-[400px]">
          {trafficData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                  className="flex flex-col justify-between max-[767px]:justify-start w-full h-auto min-h-[170px] max-[767px]:w-[220px] max-[767px]:h-[216px] max-[767px]:min-h-0 md:w-[356px] md:h-[174px] md:min-h-0 lg:w-[280.33px] lg:h-[196px] lg:min-h-0 bg-[#F9F9F9] rounded-[20px] lg:rounded-[24px] p-3 sm:p-4 max-[767px]:p-[20px] lg:p-[20px]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 w-full md:w-[316px] md:h-[48px] lg:w-full lg:h-[48px]">
                  <div className="flex items-center justify-center w-[36px] max-[767px]:w-[48px] sm:w-[40px] md:w-[48px] lg:w-[48px] h-[36px] max-[767px]:h-[48px] sm:h-[40px] md:h-[48px] lg:h-[48px] rounded-full bg-[#E4F0FF] shrink-0">
                    <IconComponent className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px] text-[#0052CC]" />
                  </div>

                  <span className="max-[767px]:w-[93px] max-[767px]:h-[34px] max-[767px]:whitespace-nowrap text-[15px] sm:text-[18px] lg:text-[24px] max-[767px]:text-[24px] font-medium leading-[140%] max-[767px]:leading-[34px] tracking-[-0.02em] text-[#212121]">
                    {item.title}
                  </span>
                </div>

                <div className="flex flex-col mt-2 sm:mt-0">
                  <span className="w-full max-[767px]:w-[180px] md:w-[316px] md:h-[45px] lg:w-[240.33px] h-auto max-[767px]:h-[45px] lg:h-[67px] text-[32px] sm:text-[32px] lg:text-[48px] font-semibold leading-[45px] lg:leading-[67px] tracking-[-0.04em] text-[#212121]">
                    {item.value}
                  </span>
                  
                  <span className="w-full max-[767px]:w-[180px] md:w-[316px] md:h-[25px] lg:w-[240.33px] h-auto max-[767px]:h-[25px] lg:h-[25px] text-[11px] sm:text-[13px] lg:text-[14px] font-normal leading-[25px] lg:leading-[25px] tracking-[-0.02em] text-[#777777]">
                    {item.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};