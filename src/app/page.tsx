import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import DownProduct from "@/components/DownProduct";
import RisePrice from "@/components/RisePrice";

export default function Home() {
  return (
    <div className="bg-base-200">
      <Banner></Banner>
      <RisePrice></RisePrice>
      <DownProduct></DownProduct>
      <AllProducts></AllProducts>
    </div>
  
  )
    
}
