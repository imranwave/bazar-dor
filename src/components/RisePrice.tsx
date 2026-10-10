import { ProductType } from "@/productsType";
import AllProductsCard from "./AllProductsCard";

const RisePrice = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  const data: ProductType[] = await res.json();
  const filterProduct = data.filter((product) => product.change.dir === "up");

  return (
    <div className="container mx-auto pt-5 py-8">
      <h1 className="text-2xl font-semibold mb-3">
        <span className="text-red-600 ">▲</span> আজ দাম বেড়েছে
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {filterProduct.map((product) => (
          <AllProductsCard key={product.id} product={product}></AllProductsCard>
        ))}
      </div>
    </div>
  );
};

export default RisePrice;
