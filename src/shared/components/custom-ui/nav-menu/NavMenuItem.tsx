import { cn } from "@/shared/utils"
import type { IMenuItem } from "./nav-menu.types"
import Link from "next/link"

interface Props {
    menuItem: IMenuItem
    isActive: boolean
}

export function NavMenuItem({ menuItem, isActive }: Props) {
    return (<Link 
        href={menuItem.href}
        className={cn(
            'flex items-center gap-1.5 rounded-4xl px-4 py-2 text-sm font-medium transition-colors',
            isActive
                ? 'bg-gray-800 text-white'
                : 'text-gray-600 hover:bg-gray-400 bg-gray-300',
        )}
        >
        <menuItem.icon
        className="size-4"
        aria-hidden="true"
        />
        <span>{menuItem.label}</span>
        </Link>
    )
    
}