import { MenuAccordionItem } from "./MenuAccordionItem";
import { ISidebarMenuAccordionItem } from "./sidebar-menu-accordion-type";

interface Props {
    data: ISidebarMenuAccordionItem[]
}

export function SidebarMenuAccordion({ data }: Props) {
    return (
        <div>
            {data.map(item => (
                <MenuAccordionItem 
                    key={item.name}
                    items={item}
                />
            ))}
        </div>
    )
}