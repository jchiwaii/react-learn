import React from "react";

const AddProductModal = ({ closeToggleModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-5">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-full max-w-xl bg-white rounded-lg p-10 shadow-lg">
        <button
          type="button"
          className="absolute top-2 right-5 text-3xl p-0 text-gray-400 hover:cursor-pointer"
          onClick={closeToggleModal}
        >
          &times;
        </button>
        Add Product Modal
      </div>
    </div>
  );
};

export default AddProductModal;
