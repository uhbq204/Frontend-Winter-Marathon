'use client'

import { match } from "path-to-regexp";
import type { IMenuItem } from "./nav-menu.types";
import { NavMenuItem } from "./NavMenuItem";
import { usePathname } from "next/navigation";

interface Props {
    menu: IMenuItem[]
}

export function NavMenu({ menu }: Props) {
    const pathname = usePathname()

    return (
        <nav className="flex items-center gap-2">
            {menu.map(menuItem => (
                <NavMenuItem
                    key={menuItem.label}
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathname)}
                />
            ))}
        </nav>
    )
}