import { RecipesDashboard } from "@/features/recipes/RecipesDashboard";
import { NO_INDEX_PAGE } from "@/shared/constants/seo.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recipes",
    ...NO_INDEX_PAGE
}

export default function Page() {
    return <RecipesDashboard />
}