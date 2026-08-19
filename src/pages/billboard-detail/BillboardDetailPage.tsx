import { LokasiDetail } from "./section/LokasiDetail"
import { SectionBillboard } from "./section/SectionBillboard"
import { Traffic } from "./section/Traffic"

export const BillboardDetailPage = () => {
  return (
    <div>
      <SectionBillboard />
      <Traffic/>
      <LokasiDetail />
    </div>
  )
}
