/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import { RiHeart3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const showProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div
      className="max-w-sm bg-[#F5F7FA] rounded-2xl shadow-md p-6 relative cursor-pointer"
      onClick={() => showProductDetails(product?._id)}
    >
      {/* Product ID */}
      <div className="absolute top-2 right-4 text-xs text-gray-400 border">
        {product?._id}
      </div>

      {/* Product Image */}
      <div className="flex justify-center">
        <img
          className="w-48 h-64 object-cover"
          src={product?.productImage}
          alt={product?.title}
        />
      </div>

      {/* Wishlist and Compare Icons */}
      <div className="absolute top-10 right-6 flex flex-col items-center space-y-2">
        {/* <FaBalanceScale className="text-[#5C5F80] bg-[#EDEFF3] p-2 rounded-full w-10 h-10 shadow-md" /> */}
        <RiHeart3Fill className="text-[#5C5F80] hover:scale-105 hover:text-pink-600 hover:shadow-lg transition-all duration-300 cursor-pointer bg-[#EDEFF3] p-2 rounded-full w-12 h-12 shadow-md" />
      </div>

      {/* Product Title */}
      <h2 className="text-lg font-medium text-gray-900 mt-4">
        {product?.title}
      </h2>

      {/* Rating and Reviews */}
      <div className="flex items-center mt-2">
        <ReactStars
          count={5}
          value={5}
          size={25}
          activeColor="#404040"
          edit={false}
        />
        <span className="ml-2 text-gray-600 text-sm">
          ({product?.ratings?.length})
        </span>
      </div>

      {/* Price and Discount */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <div className="text-base text-gray-400 flex gap-1">
            <span className="line-through">${product?.price - 100}</span>
            <span className="text-[10px] text-gray-900 font-medium bg-blue-100 px-2 rounded-sm">
              -10%
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900 tracking-wider border">
            ${product?.price}
          </div>
        </div>
        <div>
          {/* Add to Cart Button */}
          <button className="relative bg-[#2667ff] hover:bg-[#2158d8] hover:scale-105 transition duration-200 text-white p-3 rounded shadow-md ">
            {/* Cart Icon */}
            {/* <ShoppingCartIcon className="h-6 w-6 text-gray-700" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
