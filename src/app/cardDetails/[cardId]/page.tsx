import PriceSummery from "@/components/PriceSummery";
import ProductTable from "@/components/ProductTable";
import { MarketType, ProductType } from "@/productsType";
import { notFound } from "next/navigation";
const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  price: "টাকা",
};
const ProductDetailsPage = async ({
  params,
}: {
  params: { cardId: string };
}) => {
  const { cardId } = await params;
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${cardId}`
  );

  const data: ProductType = await res.json();
  const marketBazar:MarketType[]=data.markets;
if(!marketBazar){
  notFound()
}
  return (
    <div className="container mx-auto">
    
      <div className="w-full rounded-[21px] border border-[#dfe6df] bg-[#f9fbf9] p-6">
        <div className="flex min-h-[176px] items-center justify-between gap-5">
          {/* Left Side */}
          <div className="flex min-w-0 items-center gap-5">
            {/* Rice Icon */}
            <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-[22px] bg-[#f0f4f0] text-5xl">
              {data.image}
            </div>
            {/* Rice Information */}{" "}
            <div className="min-w-0">
              {" "}
              <h2 className="text-3xl font-bold leading-tight text-[#17221b] sm:text-4xl">
                {data.nameBn}
              </h2>
              <p className="mt-1 text-lg text-[#52665a]">
                প্রতি {unitBn[data.unit]} . {data.nameBn}
              </p>
              <p className="mt-2 text-base text-[#52665a]">
                গতকালের তুলনায় আজ দাম{" "}
                <span
                  className={`font-semibold ${
                    data.change.dir === "up"
                      ? "text-gray-500"
                      : data.change.dir === "down"
                        ? "text-gray-500"
                        : "text-gray-500"
                  }`}
                >
                  {data.change.dir === "up"
                    ? "বেড়েছে"
                    : data.change.dir === "down"
                      ? "কমেছে"
                      : "অপরিবর্তিত"}
                </span>{" "}
                <span
                  className={`font-semibold ${
                    data.change.dir === "up"
                      ? "text-gray-500"
                      : data.change.dir === "down"
                        ? "text-gray-500"
                        : "text-gray-500"
                  }`}
                >
                  {data.change.dir === "up" ? "+" : ""}
                  {data.change.pct.toLocaleString("bn-BD")}%
                </span>
              </p>
            </div>
          </div>
          {/* Right Side: Price */}
          <div className="flex h-[171px] w-[161px] shrink-0 flex-col items-center justify-center rounded-[22px] bg-[#f0f4f0]">
            <p className="text-lg text-[#52665a]"> আজকের দাম </p>
            <h3 className="my-1 text-4xl font-bold text-[#17221b]">
              {" "}
              {data.today.toLocaleString("bn-BD")}{" "}
            </h3>
            <p className="text-lg text-[#52665a]">
              {" "}
              টাকা / {unitBn[data.unit]}{" "}
            </p>
            <p className="mt-1 text-base text-[#52665a]">
              {" "}
              <span
                className={
                  data.change.dir === "up"
                    ? "text-red-700"
                    : "text-green-700"
                }
              >
                {data.change.dir === "up" ? "▲" : "▼"}
              </span>
              {data.change.pct.toLocaleString("bn-BD")}{" "}
            </p>
          </div>
        </div>
      </div>

      {/* price summery */}
      <div className="mt-10">
       {/* {marketBazar.map((summery,ind:number)=><PriceSummery key={ind} summery={summery}></PriceSummery>)} */}

       <PriceSummery summery={marketBazar}></PriceSummery>

       <ProductTable summery={marketBazar}></ProductTable>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
