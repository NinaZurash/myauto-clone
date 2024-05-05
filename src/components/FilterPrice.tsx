import { Icons } from "@/Icons";
import { Input } from "./ui/input";

export default function FilterPrice({
  priceFromToLocal,
  setPriceFromToLocal,
}: {
  priceFromToLocal: [number | "", number | ""];
  setPriceFromToLocal: (value: [number | "", number | ""]) => void;
}) {
  return (
    <div className="flex px-6 justify-between  flex-col">
      <div className="flex py-3 items-center justify-between">
        <span className="text-[13px]">ფასი</span>
        <div className="flex gap-3 w-fit border rounded-3xl items-center">
          <span className="">{Icons.currency}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          onChange={(event) => {
            setPriceFromToLocal([
              Number(event.target.value),
              priceFromToLocal[1],
            ]);
          }}
          type="number"
        ></Input>
        <span className="items-center flex">{Icons.dash}</span>
        <Input
          onChange={(event) => {
            setPriceFromToLocal([
              priceFromToLocal[0],
              Number(event.target.value),
            ]);
          }}
          type="number"
        ></Input>
      </div>
    </div>
  );
}
