"use client";

import { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import { useProducts } from "@/providers/ProductsProvider";
import CardMobile from "./CardMobile";

export default function ProductsListing() {
  const { products, isLoading } = useProducts();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={"animate-spin mt-64 sm:mt-0"}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <Fragment key={product.car_id}>
            {width > 768 ? (
              <Card product={product} />
            ) : (
              <CardMobile product={product} />
            )}
          </Fragment>
        ))}
    </div>
  );
}
