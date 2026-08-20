import { AksiCepat } from "./section/AksiCepat"
import { LokasiDetail } from "./section/LokasiDetail"
import { LokasiPremium } from "./section/LokasiPremium"
import { SectionBillboard } from "./section/SectionBillboard"
import { Traffic } from "./section/Traffic"

export const BillboardDetailPage = () => {
  return (
    <div>
      <SectionBillboard />
      <Traffic/>
      <LokasiDetail />
      <AksiCepat />
      <LokasiPremium />
    </div>
  )
}
