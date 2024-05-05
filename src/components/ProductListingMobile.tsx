"use client";

import { useProducts } from "@/providers/ProductsProvider";

import CardMobile from "./CardMobile";

export default function ProductsListingMobile() {
  const { products, isLoading, totalItems } = useProducts();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="lg:hidden flex flex-1 flex-col lg:gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <CardMobile key={product.car_id} product={product} />
        ))}
    </div>
  );
}
