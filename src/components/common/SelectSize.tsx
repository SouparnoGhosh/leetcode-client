import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sizes = [
  { value: "small", label: "S" },
  { value: "medium", label: "M" },
  { value: "large", label: "L" },
  { value: "x-large", label: "XL" },
  { value: "xx-large", label: "XXL" },
];

export function SelectSize() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sizes</SelectLabel>
          {sizes.map((size) => (
            <SelectItem
              key={size.value}
              value={size.value}
              className="cursor-pointer hover:bg-slate-100"
            >
              {size.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
