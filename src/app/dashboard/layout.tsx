import { Header } from "@/features/layout/header/Header";
import { PropsWithChildren } from "react";

export default function Layout({ children}: PropsWithChildren<unknown>) {
    return (
        <div className="px-5">
            <Header />
            <div className="mt-6">{children}</div>
        </div>
    )
}