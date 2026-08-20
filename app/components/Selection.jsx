import React from "react";

import ProductCard from "./ProductCard";

const Selection = ({ products }) => {
  return (
    <div>
      <div className="bg-primary/5">
        <div className="container mx-auto">
          <div className="py-30 text-center">
            <h2 className="text-5xl mb-12">Udvalgte maskiner fra Top Prime-serien</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  category={product.category}
                  specs={product.specs}
                  currentPrice={product.currentPrice}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                />
              ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
