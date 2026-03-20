import { Input } from "@/shared/components/ui/input";
import { cn } from "@/shared/utils";
import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";
import { LabelIcon } from "./LabelIcon";


interface Props extends ComponentProps<'input'> {
    label: string
    Icon: LucideIcon
}

export function InputLabel({ label, Icon, className, type, ...props }: Props) {
    return (
        <label className="relative block">
            <LabelIcon label={label} Icon={Icon} />
            <Input className={cn(className, 'rounded-3xl bg-gray-100 pl-9')} {...props} />
        </label>
    )
}