import { TRecipeFilters } from "@/features/recipes/recipes-sidebar/recipe-sidebar-menu.types"
import { ISelectItem } from "@/shared/types"
import { LucideIcon } from "lucide-react"

export interface ISidebarMenuAccordionItem<K extends string = string> {
    isInitiallyOpen?: boolean
    name: string
    key: K
    icon: LucideIcon
    items: ISelectItem[]
}