import { Cross2Icon } from "@radix-ui/react-icons";

import { Badge } from "../ui/badge";

const filters = ["განბაჟება", "იყიდება", "საქართველო", "2012"];

export default function MobileDefaultFilters() {
  return (
    <div className="m-4 flex items-center gap-2 overflow-x-hidden lg:hidden">
      {filters.map((filter) => (
        <Badge
          className="flex items-center gap-2 bg-white p-2 text-xs font-light text-black"
          key={filter}
        >
          <span> {filter}</span>
          <div className="rounded-full bg-background p-[3px]">
            <Cross2Icon width="10px" height="10px" />
          </div>
        </Badge>
      ))}
    </div>
  );
}
