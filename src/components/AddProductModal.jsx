import React from "react";

const AddProductModal = ({ closeToggleModal, handleAddProduct }) => {
  const [data, setData] = React.useState({
    id: "",
    name: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", data);
    handleAddProduct(data);
  };

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
        <h1 className="text-4xl mb-6">Add Product</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-lg font-semibold">
              Product ID
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product ID"
                name="id"
                onChange={handleChange}
              />
            </label>
            <label className="block mb-2 text-lg font-semibold">
              Product Name
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"
                name="name"
                onChange={handleChange}
              />
            </label>
            <label className="block mb-4 text-lg font-semibold">
              Quantity
              <input
                type="number"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter quantity"
                name="quantity"
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-md text-semi-bold hover:bg-green-600 transition-colors duration-300 w-full"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
