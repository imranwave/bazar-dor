import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  console.log(date);
  return (
    <div className="py-8"> 
      <div className="flex-col flex-col-reverse md:flex-row flex   bg-white container mx-auto rounded-xl p-4 items-center space-y-3">
        <div className="space-y-2">
          <span className="bg-[#05893E20] p-2 py-1 rounded-full text-green-700">{date}</span>
          <h1 className="my-4 text-5xl font-semibold">আজকের বাজারের দাম <br /> এক নজরে</h1>
          <p className="text-gray-500 text-xl font-thin">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <button className="btn bg-green-600 text-white font-semibold my-2">সব পন্য দেখুন</button>
        </div>
        <div>
          <Image
            alt="bannerLogo"
            width={600}
            height={600}
            src="/bazar-hero.png"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
