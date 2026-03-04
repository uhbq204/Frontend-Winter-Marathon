import { VerifyEmail } from "@/features/auth/ui/VerifyEmail";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Verify Email',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <VerifyEmail />
}