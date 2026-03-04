'use client'

import { LogoutDocument } from "@/__generated__/graphql";
import { PAGES } from "@/shared/config/page.config";
import { useApolloClient, useMutation } from "@apollo/client/react";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function Logout() {
    const [logout, { loading }] = useMutation(LogoutDocument)

    const client = useApolloClient()
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await logout()
            await client.clearStore()
            
            router.replace(PAGES.LOGIN)
        } catch (error) {
            console.error("Logout failed:", error)
        }
    }

    return (
        <div>
            <button onClick={handleLogout} disabled={loading}>
                Logout
            </button>
        </div>
    )
}