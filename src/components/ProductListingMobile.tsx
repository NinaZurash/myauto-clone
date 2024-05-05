"use client";

import { useProducts } from "@/providers/ProductsProvider";

import CardMobile from "./CardMobile";

export default function ProductsListingMobile() {
  const { products, isLoading } = useProducts();
  if (isLoading) {
    return <div className="lg:hidden">Loading...</div>;
  }
  return (
    <div className="flex flex-1 flex-col lg:hidden lg:gap-4">
      {products.length > 0 &&
        products.map((product) => <CardMobile key={product.car_id} product={product} />)}
    </div>
  );
}
