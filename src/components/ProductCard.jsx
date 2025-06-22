import React from "react";

const ProductCard = ({ product, handleDeleteProduct, handleEditProduct }) => {
  return (
    <div
      className={`border rounded-lg p-5 flex flex-col gap-2 font-bold m-5 w-[240px] text-2xl ${
        !product.isActive
          ? "bg-gray-200 opacity-70 border-gray-300"
          : "bg-white shadow-md"
      }`}
    >
      <span>{product.id}</span>
      <span>{product.name}</span>
      <span>${product.quantity}</span>

      <div className="flex flex-row gap-2 text-sm">
        <button
          type="button"
          className="border rounded-md px-2 py-1 font-semibold w-full hover:outline-none"
          onClick={() => handleEditProduct(product.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white rounded-md px-2 py-2 w-full"
          onClick={() => handleDeleteProduct(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
