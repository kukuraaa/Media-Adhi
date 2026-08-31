import { AksiCepat } from "./section/AksiCepat"
import { LokasiDetail } from "./section/LokasiDetail"
import { LokasiPremium } from "./section/LokasiPremium"
import { SectionBillboard } from "./section/SectionBillboard"
import { Traffic } from "./section/Traffic"
import { WujudkanIde } from "./section/WujudkanIde"

export const BillboardDetailPage = () => {
  return (
    <div className="min-[1440px]:overflow-x-clip">
      <div className="px-4 md:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-[40px] w-full">
          <div className="w-full lg:w-[857px] shrink-0 flex flex-col">
            <SectionBillboard />
            <Traffic />
            <LokasiDetail />
            <div className="block lg:hidden w-full mt-6 sm:mt-8">
              <AksiCepat />
            </div>
          </div>
          <div className="hidden lg:block w-[383px] h-[2175px] shrink-0 self-start">
            <div className="sticky top-[40px] min-[1440px]:top-[165px]">
            <AksiCepat />
          </div>
          </div>
        </div>
      </div>
      <LokasiPremium />
      <WujudkanIde />
    </div>
  );
};