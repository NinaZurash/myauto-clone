import Image from "next/image";
import { useEffect, useState } from "react";

import { useProductsContext } from "@/providers/ProductsProvider";
import type { Model, Product } from "@/providers/types";
import { useModels } from "@/services/useModels";

import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardParameters from "./CardParameters";

export default function Card({ product }: { product: Product }) {
  const { mutateAsync } = useModels();
  const { manufacturers } = useProductsContext();
  const [modelType, setModelType] = useState<string>("");

  useEffect(() => {
    const fetchModels = async () => {
      const response = await mutateAsync({ manId: product.man_id + "" });
      const data = response.data.data;

      setModelType(
        data
          .find((model: Model) => model.model_id.toString() === product.model_id.toString())
          ?.model_name.toString() || "",
      );
    };
    fetchModels();
  }, [mutateAsync, product.man_id, product.model_id]);

  const man = manufacturers.find((man) => man.man_id.toString() === product.man_id.toString());

  return (
    <div className="flex w-full flex-col gap-2 rounded-md bg-white p-4">
      <div className="flex gap-4">
        <Image
          src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
          alt="car"
          width={178}
          height={140}
          className="rounded-md"
        />
        <div className="flex w-full flex-col justify-between gap-2">
          <CardHeader title={man?.man_name.toString() + " " + modelType || ""} product={product} />
          <CardParameters product={product} />
          <CardFooter product={product} />
        </div>
      </div>
    </div>
  );
}
