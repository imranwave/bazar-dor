import { MarketType } from "@/productsType";

export interface PriceSummeryProps {
  summery: MarketType[];
}

export default function PriceSummery({ summery }: PriceSummeryProps) {
  return (
    <div>
      <section className="w-full rounded-[21px] border border-[#dfe6df] bg-[#f9fbf9] p-5 sm:p-6">
        {" "}
        <h2 className="mb-4 text-[24px] font-bold text-[#17221b]">
          {" "}
          দামের সারসংক্ষেপ{" "}
        </h2>{" "}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {" "}
          {/* Minimum Price */}{" "}
          <div className="flex min-h-[132px] flex-col justify-center rounded-[21px] border border-[#dfe6df] px-7 py-4">
            {" "}
            <p className="text-[17px] text-[#718073]"> সর্বনিম্ন দাম </p>{" "}
            <p className="text-[30px] font-bold leading-tight text-green-600">
              {" "}
              {}{" "}
              <span className="ml-1 text-[18px] font-normal"> টাকা </span>{" "}
            </p>{" "}
            <p className="text-[16px] text-[#718073]">
              {" "}
              সবচেয়ে কম দামের বাজার{" "}
            </p>{" "}
          </div>{" "}
          {/* Maximum Price */}{" "}
          <div className="flex min-h-[132px] flex-col justify-center rounded-[21px] border border-[#dfe6df] px-7 py-4">
            {" "}
            <p className="text-[17px] text-[#718073]"> সর্বোচ্চ দাম </p>{" "}
            <p className="text-[30px] font-bold leading-tight text-red-500">
              {" "}
              {}{" "}
              <span className="ml-1 text-[18px] font-normal"> টাকা </span>{" "}
            </p>{" "}
            <p className="text-[16px] text-[#718073]">
              {" "}
              সবচেয়ে বেশি দামের বাজার{" "}
            </p>{" "}
          </div>{" "}
          {/* Average Price */}{" "}
          <div className="flex min-h-[132px] flex-col justify-center rounded-[21px] border border-[#dfe6df] px-7 py-4">
            {" "}
            <p className="text-[17px] text-[#718073]"> গড় দাম </p>{" "}
            <p className="text-[30px] font-bold leading-tight text-green-700">
              {" "}
              {" "}
              <span className="ml-1 text-[18px] font-normal"> টাকা </span>{" "}
            </p>{" "}
            <p className="text-[16px] text-[#718073]">
              {" "}
              প্রতি পিসের হিসাবে{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </div>
  );
}
