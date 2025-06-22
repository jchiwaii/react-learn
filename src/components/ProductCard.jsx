import React from "react";

const ProductCard = (product) => {
  return (
    <div className="border rounded-lg p-5 flex flex-col gap-2 font-bold m-5 w-[240px] text-2xl">
      <span>{product.product.id}</span>
      <span>{product.product.name}</span>
      <span>{product.product.quantity}</span>
      <div className="flex flex-row gap-2 text-sm">
        <button
          type="button"
          className="border rounded-md px-2 py-1 font-semibold w-full hover:outline-none"
        >
          Edit
        </button>
        <button className="bg-red-500 text-white rounded-md px-2 py-2 w-full">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
