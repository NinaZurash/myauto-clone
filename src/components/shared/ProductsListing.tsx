"use client";

import { Fragment, useEffect, useState } from "react";

import { useProductsContext } from "@/providers/ProductsProvider";

import Card from "../card/Card";
import MobileCard from "../card/MobileCard";

export default function ProductsListing() {
  const { products, isLoading } = useProductsContext();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window?.innerWidth);

    const handleResize = () => {
      setWidth(window?.innerWidth);
    };

    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex size-full items-center justify-center">
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
          className={"mt-64 animate-spin sm:mt-0"}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col lg:gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <Fragment key={product.car_id}>
            {width > 768 ? <Card product={product} /> : <MobileCard product={product} />}
          </Fragment>
        ))}
    </div>
  );
}
