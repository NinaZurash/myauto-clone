"use client";

import { useFetchCategories } from "@/services/useFetchCategories";
import { useFetchManufacturers } from "@/services/useFetchManufacturers";
import { useFetchProducts } from "@/services/useFetchProducts";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type Product = {
  car_id: number;
  status_id: number;
  user_id: number;
  dealer_user_id: number | null;
  paid_add: number;
  photo: string;
  pic_number: number;
  prod_year: number;
  prod_month: number;
  man_id: number;
  car_model: string;
  price: number;
  price_usd: number;
  first_deposit: number;
  price_value: number;
  fuel_type_id: number;
  gear_type_id: number;
  drive_type_id: number;
  door_type_id: number;
  color_id: number;
  saloon_color_id: number;
  cylinders: number;
  car_run: number;
  car_run_km: number;
  car_run_dim: number;
  engine_volume: number;
  airbags: number;
  abs: boolean;
  esd: boolean;
  el_windows: boolean;
  conditioner: boolean;
  leather: boolean;
  disks: boolean;
  nav_system: boolean;
  central_lock: boolean;
  hatch: boolean;
  right_wheel: boolean;
  alarm: boolean;
  board_comp: boolean;
  hydraulics: boolean;
  chair_warming: boolean;
  climat_control: boolean;
  obstacle_indicator: boolean;
  customs_passed: boolean;
  client_name: string;
  client_phone: number;
  model_id: number;
  location_id: number;
  parent_loc_id: number;
  tech_inspection: boolean;
  checked_for_duplicates: boolean;
  order_number: number;
  stickers: null;
  changable: boolean;
  auction: boolean;
  has_turbo: boolean;
  for_rent: boolean;
  rent_daily: boolean;
  rent_purchase: boolean;
  rent_insured: boolean;
  rent_driver: boolean;
  currency_id: number;
  vehicle_type: number;
  category_id: number;
  vin: string;
  user_type: null;
  prom_color: number;
  special_persons: boolean;
  back_camera: boolean;
  car_desc: string;
  order_date: string;
  video_url: string;
  hp: number;
  hours_used: number;
  photo_ver: number;
  checked: boolean;
  lang_type_id: number;
  el_starter: number;
  start_stop: boolean;
  trunk: boolean;
  windshield: boolean;
  inspected_in_greenway: boolean;
  license_number: string;
  words_checked: number;
  is_payd: boolean;
  condition_type_id: number;
  primary_damage_type: number;
  secondary_damage_type: number;
  auction_has_key: number;
  is_auction: number;
  saloon_material_id: number;
  map_lat: number;
  map_long: number;
  zoom: number;
  predicted_price: string;
  hdd: number;
  map_title: string;
  has_catalyst: number;
  tmp: string;
  views: number;
  dealerId: null;
  has_logo: null;
  logo_ver: null;
  active_ads: null;
  dealer_title: string;
  has_predicted_price: boolean;
  pred_first_breakpoint: null;
  pred_second_breakpoint: null;
  pred_min_price: null;
  pred_max_price: null;
  comfort_features: number[];
  daily_views: {
    views: number;
    product_id: number;
    insert_Date: string;
  };
};

export type Manufacturer = {
  man_id: number;
  man_name: string;
  is_car: number;
  is_spec: number;
  is_moto: number;
};

export type Category = {
  category_id: number;
  category_type: number;
  has_icon: number;
  title: string;
  seo_title: string;
  vehicle_types: number[];
};

type ProductsContextType = {
  products: Product[];
  isLoading: boolean;
  periodFilter: string;
  setPeriodFilter: (value: string) => void;
  sortOrder: number;
  setSortOrder: (value: number) => void;
  categories: Category[];
  manufacturers: Manufacturer[];
  manFilter: string;
  catFilter: string;
  setManFilter: (value: string) => void;
  setCatFilter: (value: string) => void;
  totalItems: number;
};

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  isLoading: false,
  periodFilter: "3h",
  setPeriodFilter: () => {},
  sortOrder: 3,
  setSortOrder: () => {},
  categories: [],
  manufacturers: [],
  manFilter: "",
  catFilter: "",
  setManFilter: () => {},
  setCatFilter: () => {},
  totalItems: 0,
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
  const { mutateAsync, isPending } = useFetchProducts();
  const { mutateAsync: fetchCategories } = useFetchCategories();
  const { mutateAsync: fetchManufacturers } = useFetchManufacturers();
  const [totalItems, setTotalItems] = useState<number>(0);

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
  }, []);

  useEffect(() => {
    if (!sortOrder) return;

    const fetchProducts = async () => {
      const data = await mutateAsync({
        sortOrder,
        periodFilter,
        manFilter,
        catFilter,
      });
      setTotalItems(data.data.meta.total);
      setProducts(data.data.items);
    };
    fetchProducts();
  }, [sortOrder, periodFilter, manFilter, catFilter]);

  const values = {
    products,
    isLoading: isPending,
    periodFilter,
    setPeriodFilter,
    sortOrder,
    setSortOrder,
    categories,
    manufacturers,
    manFilter,
    catFilter,
    setManFilter,
    setCatFilter,
    totalItems,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};