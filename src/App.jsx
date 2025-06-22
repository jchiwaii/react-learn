import React from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const productList = [
    { id: "001", name: "Pineapple", quantity: 12 },
    { id: "002", name: "Apple", quantity: 20 },
    { id: "003", name: "Banana", quantity: 15 },
    { id: "004", name: "Orange", quantity: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-5xl font-bold">Products</h1>
        <button
          type="button"
          className="bg-black text-white py-2 px-4 rounded-md text-semi-bold hover:bg-green-600 transition-colors duration-300"
        >
          Add Product
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
