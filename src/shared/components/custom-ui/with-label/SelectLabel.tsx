import { LucideIcon } from "lucide-react";
import { LabelIcon } from "./LabelIcon";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectLabel as SelectInsideLabel, SelectItem } from "../../ui/select";


interface Props {
    label: string
    Icon: LucideIcon
    options?: { value: string; label: string } []
    value?: string | null
    onChange?: (value: string | null) => void
}

export function SelectLabel({ label, Icon, options=[], value, onChange }: Props) {
    return (
        <label className="relative block text-gray-600">
            <LabelIcon label={label} Icon={Icon} />
            
            <Select value={value || undefined} onValueChange={onChange}>
                <SelectTrigger className="w-full rounded-3xl bg-gray-100 pl-9">
                    <SelectValue placeholder={label} /> 
                </SelectTrigger>
                <SelectContent className="text-gray-600">
                    <SelectGroup>
                        <SelectInsideLabel>{label}</SelectInsideLabel>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </label>
    )
}