import { cn } from "@/shared/utils";
import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";
import { Input } from "../../ui/input";


interface Props extends ComponentProps<'input'> {
    label: string
    Icon: LucideIcon
}

export function InputLabel({ label, Icon, className, type, ...props }: Props) {
    return (
        <label className="relative block">
            <span className="mb-1.5 block text-sm font-mono opacity-50">{label}</span>
            <Icon size={17} className="absolute bottom-2.5 left-3 opacity-50" />
            <Input className={cn(className, 'rounded-3xl bg-gray-100 pl-9')} {...props} />
        </label>
    )
}