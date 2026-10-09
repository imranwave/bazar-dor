import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}
const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  price: "টাকা",
};
const MarqueeeText = async() => {
    const res=await fetch('https://api.abcz.workers.dev/api/bazardor/products')
    const data:IProduct[]=await res.json()
    
    return (
       
        <div className="border py-2 border-gray-100">
           <MarqueeText direction="right" duration={10} pauseOnHover >
             {data.map((d)=><span key={d.id}>
                <span className="mx-5">{d.image} {d.nameBn} {d.today.toLocaleString("bn-BD")} টাকা / {unitBn[d.unit]}</span>
                <span className={`
            mb-1
            rounded-full
            bg-[#f1f6f3]
            px-3
            py-1
            text-[16px]
            ${
              d.change.dir === "up"
                ? "bg-[#f1f6f3] text-[#dc3545]"
                : "bg-[#e8f5e9] text-[#198754]"
            }
            `}>{d.change.dir === "up" ? "▲" : "▼"}
              {d.change.pct}</span>
            </span>)}
           </MarqueeText>
           
        </div>
    );
};

export default MarqueeeText;