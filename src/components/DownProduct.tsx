import { ProductType } from "@/productsType";
import AllProductsCard from "./AllProductsCard";


const DownProduct = async() => {
    const res=await fetch('https://api.api-store.workers.dev/api/bazardor/products')
    const data:ProductType[]=await res.json()
    const filterProduct=data.filter((product)=>product.change.dir==='down')
    
    return (
        <div className="container mx-auto my-8">
           <h1 className='text-2xl font-semibold mb-3'><span className='text-green-600 '>▲</span>আজ দাম কমেছে</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {filterProduct.map((product)=><AllProductsCard key={product.id} product={product}></AllProductsCard>)}
            </div>
        
        </div>
    );
};

export default DownProduct;