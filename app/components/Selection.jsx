import React from 'react'

import ProductCard from './ProductCard'

const Selection = ({ products }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
  )
}

export default Selection