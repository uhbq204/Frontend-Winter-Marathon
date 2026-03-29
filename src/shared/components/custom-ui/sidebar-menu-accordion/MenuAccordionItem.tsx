import { ChevronDown, CornerDownRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../ui/collapsible";
import { ISidebarMenuAccordionItem } from "./sidebar-menu-accordion-type";
import { cn } from "@/shared/utils";

interface Props {
    items: ISidebarMenuAccordionItem
}

export function MenuAccordionItem({ items }: Props) {
    return (
        <Collapsible defaultOpen={items.isInitiallyOpen}>
            <CollapsibleTrigger className={cn("flex items-center justify-between w-full rounded-3xl p-2", { "bg-accent": items.isInitiallyOpen })}>
                    <span className="flex items-center gap-2 text-sm font-medium">
                        <items.icon size={20} />
                        {items.name}
                    </span>

                    <ChevronDown size={20} />
            </CollapsibleTrigger>
            <CollapsibleContent>
                <ul className="pl-5 space-y-2 text-sm pt-2">
                    {items.items.map(child => (
                        <li key={child.value} className="opacity-50">
                            <button className="flex items-center justify-between">
                                <span className="flex items-center gap-2">
                                    <CornerDownRight size={18}/>
                                    <span>{child.label}</span>
                                </span>

                                {!!child.badgeValue && (
                                    <span className="rounded-3xl bg-red-300 text-sm text-red-500 px-2">
                                        {child.badgeValue}
                                    </span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </CollapsibleContent>
        </Collapsible>
    )
}