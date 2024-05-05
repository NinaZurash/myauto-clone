"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { useCategories } from "@/services/useCategories";
import { useManufacturers } from "@/services/useManufacturers";
import { useProducts } from "@/services/useProducts";

import type { Category, Manufacturer, Product } from "./types";

type ProductsContextType = {
  products: Product[];
  isLoading: boolean;
  periodFilter: string;
  sortOrder: number;
  categories: Category[];
  manufacturers: Manufacturer[];
  manFilter: string;
  catFilter: string;
  forRent: number;
  totalItems: number;
  priceFromTo: [number | "", number | ""];
  setSortOrder: (value: number) => void;
  setManFilter: (value: string) => void;
  setCatFilter: (value: string) => void;
  setPeriodFilter: (value: string) => void;
  setForRent: (value: number) => void;
  setPriceFromTo: (value: [number | "", number | ""]) => void;
};

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  isLoading: false,
  periodFilter: "3h",
  sortOrder: 3,
  categories: [],
  manufacturers: [],
  manFilter: "",
  catFilter: "",
  priceFromTo: [0, ""],
  totalItems: 0,
  forRent: 0,
  setForRent: () => {},
  setManFilter: () => {},
  setSortOrder: () => {},
  setCatFilter: () => {},
  setPriceFromTo: () => {},
  setPeriodFilter: () => {},
});

type Props = { children: ReactNode };

export const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [periodFilter, setPeriodFilter] = useState<string>("3h");
  const [sortOrder, setSortOrder] = useState<number>(3);
  const [manFilter, setManFilter] = useState<string>("");
  const [catFilter, setCatFilter] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [forRent, setForRent] = useState<number>(0);
  const { mutateAsync, isPending } = useProducts();
  const { mutateAsync: fetchCategories } = useCategories();
  const { mutateAsync: fetchManufacturers } = useManufacturers();
  const [totalItems, setTotalItems] = useState<number>(0);
  const [priceFromTo, setPriceFromTo] = useState<[number | "", number | ""]>([0, ""]);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const data = await fetchCategories();
      setCategories(data.data);
    };
    const fetchAllManufacturers = async () => {
      const data = await fetchManufacturers();
      setManufacturers(data.data);
    };
    fetchAllManufacturers();
    fetchAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!sortOrder) return;

    const fetchProducts = async () => {
      const data = await mutateAsync({
        sortOrder,
        periodFilter,
        manFilter,
        catFilter,
        forRent,
        priceFromTo,
      });
      setTotalItems(data.data.meta.total);
      setProducts(data.data.items);
    };
    fetchProducts();
  }, [sortOrder, periodFilter, manFilter, catFilter, forRent, priceFromTo, mutateAsync]);

  const values = {
    products,
    isLoading: isPending,
    periodFilter,
    sortOrder,
    categories,
    manufacturers,
    manFilter,
    catFilter,
    forRent,
    priceFromTo,
    totalItems,
    setManFilter,
    setCatFilter,
    setPeriodFilter,
    setSortOrder,
    setForRent,
    setPriceFromTo,
  };

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
