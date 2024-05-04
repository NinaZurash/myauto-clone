import { Icons } from "@/Icons";
import CardFilterStatus from "./CardFilterStatus";
import Image from "next/image";
import { Model, Product, useProducts } from "@/providers/ProductsProvider";
import CardHeader from "./CardHeader";
import CardParameters from "./CardParameters";
import CardFooter from "./CardFooter";
import { useFetchModels } from "@/services/useFetchModels";
import { useEffect, useState } from "react";

export default function Card({ product }: { product: Product }) {
  const { mutateAsync } = useFetchModels();
  const { manufacturers } = useProducts();
  const man = manufacturers.find(
    (man) => man.man_id.toString() === product.man_id.toString()
  );
  const [modelType, setModelType] = useState<string>("");

  useEffect(() => {
    const fetchModels = async () => {
      const response = await mutateAsync({ manId: product.man_id + "" });
      const data = response.data.data;

      setModelType(
        data
          .find(
            (model: Model) =>
              model.model_id.toString() === product.model_id.toString()
          )
          ?.model_name.toString() || ""
      );
    };
    fetchModels();
  }, []);
  return (
    <div className="w-full flex flex-col p-4 gap-2 bg-white rounded-md">
      <div className="flex gap-4">
        <Image
          src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
          alt="car"
          width={178}
          height={140}
          className="rounded-md"
        />
        <div className="flex w-full gap-2 flex-col justify-between">
          <CardHeader
            title={man?.man_name.toString() + " " + modelType || ""}
            product={product}
          />
          {/* <div className="flex items-center justify-between gap-2">
            <h3 className="text-[#272A37] font-bold flex gap-2 items-center">
              <span>108,122</span> {Icons.gel}
            </h3>
            <CardFilterStatus />
          </div> */}
          <CardParameters product={product} />
          <CardFooter product={product} />
        </div>
      </div>
    </div>
  );
}
