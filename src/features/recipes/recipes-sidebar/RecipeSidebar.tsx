import { SidebarMenuAccordion } from "@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion";
import { InputLabel } from "@/shared/components/custom-ui/with-label/InputLabel";
import { Search } from "lucide-react";
import { recipeSidebarMenuData } from "./recipe-sidebar-menu-data";


export function RecipeSidebar() {
    return (
        <div className="w-full max-w-60 space-y-6 bg-white p-4 rounded-3xl">
            <InputLabel
                Icon={Search}
                placeholder="Search by recipes"
                className="bg-gray-200 border-none focus:ring-0"
            />

            <SidebarMenuAccordion
                data={recipeSidebarMenuData}
            />
        </div>
    )
}