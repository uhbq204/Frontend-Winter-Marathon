import { CornerDownRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../ui/collapsible";
import { ISidebarMenuAccordionItem } from "./sidebar-menu-accordion-type";

interface Props {
    items: ISidebarMenuAccordionItem
}

export function MenuAccordionItem({ items }: Props) {
    return (
        <Collapsible>
            <CollapsibleTrigger>
                <span className="flex items-center gap-3">
                    <items.icon />
                    {items.name}
                </span>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <ul>
                    {items.items.map(child => (
                        <li key={child.value}>
                            <button className="flex items-center justify-between">
                                <span className="flex items-center gap-1">
                                    <CornerDownRight />
                                    <span>{child.label}</span>
                                </span>

                                {!!child.badgeValue && (
                                    <span className="rounded-3xl bg-red-300 text-sm text-red-500">
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