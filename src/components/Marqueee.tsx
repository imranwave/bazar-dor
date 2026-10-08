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
const MarqueeeText = async() => {
    const res=await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const data:IProduct[]=await res.json()
    
    return (
       
        <div className="border py-2 border-gray-100">
           <MarqueeText direction="right" duration={15} pauseOnHover >
             {data.map((d)=><span key={d.id}>
                <span className="mx-5">{d.image} {d.nameBn} {d.unit}</span>
                <span></span>
            </span>)}
           </MarqueeText>
           
        </div>
    );
};

export default MarqueeeText;