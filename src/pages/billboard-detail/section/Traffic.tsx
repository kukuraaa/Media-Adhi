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
    <section className="px-4 md:px-8 lg:px-20 py-6 lg:py-10">
      <div className="flex flex-col gap-4 lg:gap-[20px] w-full lg:w-[857px]">
        
        <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-[140%] tracking-[-0.04em] text-[#212121]">Traffic Harian (Estimasi)</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 md:gap-4 lg:gap-[8px] w-full lg:w-[857px] h-auto lg:h-[400px]">
          {trafficData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col justify-between w-full h-auto min-h-[170px] lg:h-[196px] bg-[#F9F9F9] rounded-[20px] lg:rounded-[24px] border border-[#000000]/[0.04] p-3 sm:p-4 lg:p-[20px]"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 w-full lg:h-[48px]">
                  <div className="flex items-center justify-center w-[36px] sm:w-[40px] lg:w-[48px] h-[36px] sm:h-[40px] lg:h-[48px] rounded-full bg-[#E4F0FF] shrink-0">
                    <IconComponent className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px] text-[#0052CC]" />
                  </div>

                  <span className="text-[15px] sm:text-[18px] lg:text-[24px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121]">
                    {item.title}
                  </span>
                </div>

                <div className="flex flex-col mt-2 sm:mt-0">
                  <span className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold leading-[120%] lg:leading-[140%] tracking-[-0.04em] text-[#212121]">
                    {item.value}
                  </span>
                  
                  <span className="text-[11px] sm:text-[13px] lg:text-[14px] font-normal leading-[150%] lg:leading-[180%] tracking-[-0.02em] text-[#777777]">
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