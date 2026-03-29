import { ISelectItem } from "@/shared/types"
import { LucideIcon } from "lucide-react"

export interface ISidebarMenuAccordionItem {
    isInitiallyOpen?: boolean
    name: string
    icon: LucideIcon
    items: ISelectItem[]
}