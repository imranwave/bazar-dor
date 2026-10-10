import { MarketType } from "@/productsType"
const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  price: "টাকা",
};

export interface ProductTableProps {
    summery:MarketType[]
}

export default function ProductTable({ summery }: ProductTableProps) {
    console.log(summery, "productTable");
    
    return <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[650px] border-collapse border border-gray-200 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-3">বাজার</th>
            <th className="border border-gray-200 px-4 py-3">বিভাগ</th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              সর্বনিম্ন
            </th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              সর্বাধিক
            </th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              গড়
            </th>
          </tr>
        </thead>

        <tbody>
            
          {summery.map((item,id:number) =>{
            const average=(item.max+item.min)/2
            return (
                <tr key={id} className="hover:bg-green-50">
              <td className="border border-gray-200 px-4 py-3">
                {item.market}
              </td>
              <td className="border border-gray-200 px-4 py-3">
                {item.division}
              </td>
              <td className="border border-gray-200 px-4 py-3 text-right">
                {item.min} টাকা
              </td>
              <td className="border border-gray-200 px-4 py-3 text-right">
                {item.max} টাকা
              </td>
              <td className="border border-gray-200 px-4 py-3 text-right font-semibold text-green-700">
                {average.toLocaleString("bn-BD")} টাকা
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
}