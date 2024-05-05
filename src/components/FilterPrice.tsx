import { Icons } from "@/Icons";
import { Input } from "./ui/input";

export default function FilterPrice() {
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
            console.log(event.target.value);
          }}
          type="number"
        ></Input>
        <span className="items-center flex">{Icons.dash}</span>
        <Input type="number"></Input>
      </div>
    </div>
  );
}
