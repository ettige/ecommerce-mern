import Image from "next/image";
import products from "../../../../products";
//@ts-expect-error
export default async function Product({ params }) {
    const { id } = await params
    const product = products.find((p) => p._id === id);

    if (!product) {
        return (
            <main className="container mx-auto p-4">
                <h1 className="text-xl text-red-500 font-bold">Product not found</h1>
            </main>
        );
    }

    return (
        <main className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="rounded-xl w-full object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
                    {product.countInStock > 0 ? (
                        <p className="text-green-600 font-medium">In Stock</p>
                    ) : (
                        <p className="text-red-600 font-medium">Out of Stock</p>
                    )}
                    <p className="mt-4 text-sm text-gray-500">
                        Rating: {product.rating} / 5 ({product.numReviews} reviews)
                    </p>
                </div>
            </div>
        </main>
    );
}
