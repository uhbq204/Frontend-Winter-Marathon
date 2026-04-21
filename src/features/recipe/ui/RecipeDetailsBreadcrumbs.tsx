import { PAGES } from "@/shared/config/page.config"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"



interface Props {
    title?: string
}

export function RecipeDetailsBreadcrumbs({ title }: Props) {
    return (
        <div className="mb-6 flex items-center text-sm">
            <Link href={PAGES.RECIPES} className="flex items-center text-gray-700 hover:underline transition-colors hover:text-gray-900 gap-2">
                <ArrowLeft size={16} />
                <span className="font-medium">Back</span>
            </Link>
            <span className="mx-2 text-gray-700">/</span>
            <span className="text-gray-800 font-semibold">{title}</span>
        </div>
    )
}