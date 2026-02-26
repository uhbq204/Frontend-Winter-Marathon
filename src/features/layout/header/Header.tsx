'use client'

import { NavMenu } from "@/shared/components/custom-ui/nav-menu/NavMenu";
import { navMenuItems } from "./nav.data";
import Link from "next/link";
import { PAGES } from "@/shared/config/page.config";
import { Button } from "@/shared/components/ui/button";
import { Bell, Headset } from "lucide-react";
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

            <div className="flex items-center absolute right-5 top-5">
                <Button variant="soft" className="mr-2 size-9">
                    <Headset className="size-5"/>
                </Button>
                <Button variant="soft" className="mr-6 size-9">
                    <Bell className="size-5"/>
                </Button>
                
                <div className="flex items-center gap-4">
                    <UserInfo
                        avatarUrl={"https://upload.wikimedia.org/wikipedia/commons/1/1f/Woman_1.jpg"}
                        name={"Anonymous"}
                        email={user?.email || ''}
                    />
                    <Logout />
                </div>
            </div>
        </header>
    )
}