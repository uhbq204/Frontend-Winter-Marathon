import { RecipeDetails } from "@/features/recipe/RecipeDetails";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata>
{
    // {
    //     params
    // }: {
    //     params: { slug }
    // }
    // const product = await getData(slug)
    return { title: 'Recipe' }
}

export default function Page() {
    return <RecipeDetails />
}