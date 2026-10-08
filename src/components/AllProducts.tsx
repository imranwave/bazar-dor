import AllProductsCard from "./AllProductsCard";

interface IAllProduct {
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


const AllProducts = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products",);
  const data: IAllProduct[] = await res.json();

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">সব পণ্য</h2>
      <p className="font-thin my-2">মোট {data.length} টি পণ্য দেখানো হচ্ছে</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((product) => (
          <AllProductsCard key={product.id} product={product}></AllProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
