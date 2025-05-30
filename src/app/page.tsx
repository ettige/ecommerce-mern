import Image from "next/image";
import products from "../../products";
import { Link } from "@/lib/i18n";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover w-full h-[200px] rounded-md mb-2"
            />
            <Link href={"product/" + product._id}>
              <h2 className="text-lg font-medium">{product.name}</h2>
            </Link>
            <p className="text-gray-800 font-semibold">${product.price.toFixed(2)}</p>
            {product.countInStock === 0 && (
              <p className="text-red-500 font-semibold mt-1">Out of Stock</p>
            )}
            <p className="text-yellow-500">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
              <span className="ml-1 text-sm text-gray-600">({product.numReviews})</span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
