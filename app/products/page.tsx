interface Product {
  id: string;
  name: string;
  data: any;
}

export default async function ProductsPage() {
  const res = await fetch('https://api.restful-api.dev/objects');
  const products: Product[] = await res.json();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-8">
          Mobile Products
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
                {product.name}
              </h2>
              {product.data && (
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {Object.entries(product.data).map(([key, value]) => (
                    <div key={key} className="mb-1">
                      <span className="font-medium">{key}:</span> {String(value)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}