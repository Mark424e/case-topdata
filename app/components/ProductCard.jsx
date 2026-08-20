"use client";

import Image from "next/image";
import AddShoppingCartSharpIcon from "@iconify-react/material-symbols/add-shopping-cart-sharp";

const ProductCard = ({
  title,
  currentPrice,
  originalPrice,
  discount,
  image,
  specs,
}) => {
  return (
    <div className="flex flex-col justify-between bg-linear-to-b from-[#89142E] to-[#10080A] rounded-lg shadow-md shadow-primary/50 overflow-hidden hover:shadow-lg transition-shadow duration-150">
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          loading="eager"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-[1.5rem] mb-2">{title}</h3>
        <p className="text-md opacity-50 mt-2">{specs}</p>
        <div className="flex flex-col items-center justify-center mt-8">
          {originalPrice > currentPrice && (
            <p className="text-xs opacity-50 line-through ml-2">
              {originalPrice.toFixed(3)} kr.
            </p>
          )}
          <p className="font-bold">{currentPrice.toFixed(3)} kr.</p>
          {discount > 0 && (
            <p className="font-bold">Spar {discount} kr.</p>
          )}
        </div>
      </div>
      <button className="group flex cursor-pointer items-center w-full bg-accent text-center rounded-b hover:bg-primary transition-all duration-150">
        <span className="group bg-primary group-hover:bg-secondary transition-all duration-150 px-6 py-3 mr-2">
          <AddShoppingCartSharpIcon
            className="group-hover:scale-125 transition-all duration-150 hover:text-green-300"
            height="1.4em"
          />
        </span>
        <p className="w-full font-bold">Læg i kurv</p>
      </button>
    </div>
  );
};

export default ProductCard;
