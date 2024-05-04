import { Badge } from "./ui/badge";
import { Cross2Icon } from "@radix-ui/react-icons";

const filters = ["განბაჟება", "იყიდება", "საქართველო", "2012"];

export default function MobileDefaultFilters() {
  return (
    <div className="flex sm:hidden gap-2 items-center m-4 overflow-x-hidden">
      {filters.map((filter) => (
        <Badge
          className="bg-white font-light items-center flex p-2 text-black text-xs gap-2"
          key={filter}
        >
          <span> {filter}</span>
          <div className="rounded-full p-[3px] bg-background">
            <Cross2Icon width="10px" height="10px" />
          </div>
        </Badge>
      ))}
    </div>
  );
}
