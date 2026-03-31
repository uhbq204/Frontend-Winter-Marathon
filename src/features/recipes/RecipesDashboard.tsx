'use client'

import { useDebounce } from "@/shared/hooks/useDebounce"
import { RecipeSidebar } from "./recipes-sidebar/RecipeSidebar"
import { useQueryState } from "nuqs"
import { RecipesBanners } from "./recipes-banners/RecipesBanners"
import { RecipesCatalog } from "./recipes-catalog/RecipesCatalog"

export function RecipesDashboard() {
    const [searchTerm, setSearchTerm] = useQueryState("q", {
        defaultValue: "",
    })

    const [filter, setFilter] = useQueryState("f", {
        defaultValue: "",
    })

    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    return (
        <div>
            <RecipeSidebar
                filter={filter}
                debouncedSearchTerm={debouncedSearchTerm}
                setSearchTerm={setSearchTerm}
                setFilter={setFilter}
            />
            <main>
                <RecipesBanners />
                <RecipesCatalog />
            </main>
        </div>
    )
}