import AllProductsCard from "@/components/AllProductsCard";
import { ProductType } from "@/productsType";


const ProductCategory = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const data: ProductType[] = await res.json();
  return (
    <div className="container mx-auto">
      {data.slice(0, 1).map((product) => (
        <div key={product.id}>
          <div className="p-3 flex items-center justify-center">
            <div className="w-full  bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
               {product.image}
              </div>

              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {product.nameBn}
                </h2>
                <p className="text-sm font-normal text-gray-500 mt-1">
                  {data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <p className="py-4 font-thin">
        মোট {data.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.map((product) => (
          <AllProductsCard key={product.id} product={product}></AllProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

