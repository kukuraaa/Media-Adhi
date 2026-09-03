export const SpesifikasiProject = () => {
  const specifications = [
    ["Client", "TACO Indonesia"],
    ["Material", "Acrylic 5 mm"],
    ["Frame", "Hollow Steel + Powder Coating"],
    ["Lighting", "LED Module"],
    ["Type", "Double Sided Round Sign"],
    ["Installation", "Outdoor"],
  ];

  return (
    <section className="w-[630px] h-[662px] rounded-[24px] border border-[#EDEDED] bg-[#F9F9F9] px-[20px] py-[24px]">
      <div className="w-[590px] h-full flex flex-col gap-[8px]">

        <div className="w-[267px] h-[48px] flex items-center gap-[16px]">
          <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-[20px] h-[20px] rounded-[4px] bg-blue-700" />
          </div>
    
          <h2 className="w-[203px] h-[34px] text-[24px] font-medium leading-[140%] tracking-[-0.02em] text-[#212121] m-0">Spesifikasi Project</h2>
        </div>

        <div className="w-[590px] h-[546px] overflow-hidden rounded-[16px] border border-[#DADADA]">
          
          <div className="grid grid-cols-2 w-full h-[64px] border-b border-[#DADADA]">
            <div className="flex items-center justify-center border-r border-[#DADADA] text-[14px] text-[#212121]">
              Item
            </div>
            <div className="flex items-center justify-center text-[14px] text-[#212121]">
              Item
            </div>
          </div>

          {specifications.map(([label, value]) => (
            <div key={label} className="grid grid-cols-2 w-full h-[80px] border-b border-[#DADADA] last:border-b-0">
              <div className="flex items-center justify-center border-r border-[#DADADA] text-[14px] text-[#777777]">{label}
              </div>

              <div className="flex items-center justify-center text-[14px] text-[#212121] text-center px-4">{value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};