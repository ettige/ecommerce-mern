import Image from "next/image";
import products from "../../products"
export default function Home() {
  return (
    <main className="">
      <h1 className="text-2xl font-semibold mb-4">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-2" />
            <h2 className="text-lg font-medium">{product.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
      // <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      
      // </main>