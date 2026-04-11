import { SidebarMenuAccordion } from "@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion";
import { InputLabel } from "@/shared/components/custom-ui/with-label/InputLabel";
import { Search } from "lucide-react";
import { recipeSidebarMenuData } from "./recipe-sidebar-menu-data";


interface Props {
    filters: string[]
    debouncedSearchTerm: string
    setSearchTerm: (term: string) => void
    setFilters: (filters: string[]) => void
}

export function RecipeSidebar({ filters, setSearchTerm, setFilters, debouncedSearchTerm }: Props) {

    const setActiveFilter = (filter: string) => {
        setFilters([filter])
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
                activeValue={filters[0]}
                onValueChange={setActiveFilter}
            />
        </div>
    )
}