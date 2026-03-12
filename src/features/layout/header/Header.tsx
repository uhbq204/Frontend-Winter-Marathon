'use client'

import { NavMenu } from "@/shared/components/custom-ui/nav-menu/NavMenu";
import { navMenuItems } from "./nav.menu.data";
import Link from "next/link";
import { PAGES } from "@/shared/config/page.config";
import { Button } from "@/shared/components/ui/button";
import { Bell, Headset, LogOut, UserCog } from "lucide-react";
import { UserInfo } from "@/shared/components/custom-ui/user-info/UserInfo";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Logout } from "../../auth/ui/Logout";

export function Header() {
    const {user} = useAuth()

    return (
        <header className="p-5">
            <div className="flex items-center gap-6">
                <Link
                    href={PAGES.DASHBOARD}
                    className="flex items-center justify-center text-2xl font-black text-white size-9 bg-linear-to-b rounded-full from-primary to-primary-dark"
                >
                    F
                </Link>
                <NavMenu menu={navMenuItems} />
            </div>

            <div className="flex items-center absolute right-3 top-3">
                <Button variant="soft" className="mr-2 size-9">
                    <Headset className="size-5"/>
                </Button>
                <Button variant="soft" className="mr-6 size-9">
                    <Bell className="size-5"/>
                </Button>
                
                <div className="relative group inline-block">
                    <div className="flex items-center gap-4 cursor-pointer">
                        <UserInfo
                            avatarUrl={"https://upload.wikimedia.org/wikipedia/commons/1/1f/Woman_1.jpg"}
                            name={"Anonymous"}
                            email={user?.email || ''}
                        />
                    
                        <div className="absolute right-0 top-full mt-2 w-full rounded-3xl border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-1">
                            <div className="w-full text-left px-3 py-2 rounded-3xl not-first: hover:bg-gray-200 transition text-sm text-gray-600 flex items-center">
                                <LogOut className="size-4 mr-2"/>
                                <Logout />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}