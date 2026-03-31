import { MenuAccordionItem } from "./MenuAccordionItem";
import { ISidebarMenuAccordionItem } from "./sidebar-menu-accordion-type";

interface Props {
    data: ISidebarMenuAccordionItem[]
    activeValue?: string
    onValueChange?: (value: string) => void

}

export function SidebarMenuAccordion({ data, activeValue, onValueChange }: Props) {
    return (
        <div className="space-y-3.5">
            {data.map(item => (
                <MenuAccordionItem 
                    key={item.name}
                    items={item}
                    activeValue={activeValue}
                    onValueChange={onValueChange}
                />
            ))}
        </div>
    )
}