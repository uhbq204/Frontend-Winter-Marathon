import { SidebarMenuAccordion } from "@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion";
import { InputLabel } from "@/shared/components/custom-ui/with-label/InputLabel";
import { Search } from "lucide-react";
import { recipeSidebarMenuData } from "./recipe-sidebar-menu-data";
import { TRecipeFilters } from "./recipe-sidebar-menu.types";


interface Props {
    filters: TRecipeFilters
    debouncedSearchTerm: string
    setSearchTerm: (term: string) => void
    setFilters: (filters: Partial<TRecipeFilters>) => void
}

export function RecipeSidebar({ filters, setSearchTerm, setFilters, debouncedSearchTerm }: Props) {

    const setActiveFilter = (key: keyof TRecipeFilters, value: string) => {
        setFilters({ [key]: value })
    }
    
    return (
        <div className="w-full space-y-6 bg-white p-4 rounded-3xl">
            <InputLabel
                Icon={Search}
                placeholder="Search by recipes"
                className="bg-gray-200 border-none focus:ring-0"
                value={debouncedSearchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />

            <SidebarMenuAccordion
                data={recipeSidebarMenuData}
                values={filters}
                onValueChange={setActiveFilter}
            />
        </div>
    )
}