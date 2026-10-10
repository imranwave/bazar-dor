import { ProductType } from "@/productsType";
import Link from "next/link";

export interface AllProductsCardProps {
  product: Omit<ProductType, "markets">;
}
const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  price: "টাকা",
};
export default function AllProductsCard({ product }: AllProductsCardProps) {
  return (
    <Link href={`/cardDetails/${product.id}`}>
    <div key={product.id}>
      <div
        className="
        rounded-xl
  border
  border-transparent
  hover:border-[#009447]
  bg-[#f9fbfa]
  px-5
  py-5
  shadow-md
      "
      >
        {/* Top Section */}
        <div className="flex items-center gap-4">
          {/* Product Image */}
          <div
            className="
            flex
            h-[62px]
            w-[62px]
            shrink-0
            items-center
            justify-center
            rounded-[16px]
            bg-[#f0f4f1]
          "
          >
            <span className="text-[36px]">{product.image}</span>
          </div>

          {/* Product Info */}
          <div>
            <h2
              className="
              text-[24px]
              font-bold
              leading-[1.1]
              text-[#111]
            "
            >
              {product.nameBn}
            </h2>

            <p className="mt-1 text-[17px] text-[#737373]">
              প্রতি {unitBn[product.unit]}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 flex items-end justify-between">
          {/* Price */}
          <div>
            <p className="text-[16px] text-[#777]">আজকের দাম</p>

            <div className="mt-1 flex items-baseline gap-2">
              {/* <span className="text-[26px] font-bold text-[#111]">{d.today}</span> */}
              <span className="text-[26px] font-bold text-[#111]">
                {product.today.toLocaleString("bn-BD")}
              </span>

              <span className="text-[19px] text-[#555]">টাকা</span>
            </div>
          </div>

          {/* Price Change */}
          <div
            className={`
            mb-1
            rounded-full
            bg-[#f1f6f3]
            px-3
            py-1
            text-[16px]
            ${
              product.change.dir === "up"
                ? "bg-[#f1f6f3] text-[#dc3545]"
                : "bg-[#e8f5e9] text-[#198754]"
            }
            `}
          >
            <span className="mr-1">
              {product.change.dir === "up" ? "▲" : "▼"}
              {product.change.pct}
            </span>
            {product.change.pct}
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

