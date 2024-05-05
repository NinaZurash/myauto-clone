import { Icons } from "@/Icons";

import { Input } from "../ui/input";

export default function FilterPrice({
  priceFromToLocal,
  setPriceFromToLocal,
}: {
  priceFromToLocal: [number | "", number | ""];
  setPriceFromToLocal: (value: [number | "", number | ""]) => void;
}) {
  return (
    <div className="flex flex-col justify-between  px-6">
      <div className="flex items-center justify-between py-3">
        <span className="text-[13px]">ფასი</span>
        <div className="flex w-fit items-center gap-3 rounded-3xl border">
          <span className="">{Icons.currency}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          onChange={(event) => {
            setPriceFromToLocal([Number(event.target.value), priceFromToLocal[1]]);
          }}
          type="number"
        ></Input>
        <span className="flex items-center">{Icons.dash}</span>
        <Input
          onChange={(event) => {
            setPriceFromToLocal([priceFromToLocal[0], Number(event.target.value)]);
          }}
          type="number"
        ></Input>
      </div>
    </div>
  );
}
