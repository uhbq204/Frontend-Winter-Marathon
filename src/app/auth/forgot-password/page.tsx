import ForgotPassword from "@/features/auth/ui/ForgotPassword";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Forgot Password',
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <ForgotPassword />
}