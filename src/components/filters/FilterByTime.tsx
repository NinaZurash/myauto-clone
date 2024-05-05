import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductsContext } from "@/providers/ProductsProvider";

const filterValues = [1, 3, 6, 12, 24];

export default function FilterByTime() {
  const { periodFilter, setPeriodFilter } = useProductsContext();
  return (
    <div>
      <Select
        onValueChange={(value) => {
          setPeriodFilter(value + "h");
        }}
        defaultValue={periodFilter?.replace("h", "")}
      >
        <SelectTrigger className="w-[140px] bg-white text-xs">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {filterValues.map((value) => (
            <SelectItem key={value} value={value + ""}>
              ბოლო {value} საათი
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
