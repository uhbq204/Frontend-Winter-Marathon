'use client'

import { GetRecipeBySlugDocument } from "@/__generated__/graphql"
import { useQuery } from "@apollo/client/react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { RecipeDetailsInformations } from "./RecipeDetailsInformations"
import { RecipeDetailsSteps } from "../recipe-details-steps/RecipeDetailsSteps"
import { RecipeDetailsBreadcrumbs } from "../RecipeDetailsBreadcrumbs"
import { RecipeDetailsLoader } from "../RecipeDetailsLoader"



export function RecipeDetailsContent() {
    const params = useParams()

    const {data: recipe, loading} = useQuery(GetRecipeBySlugDocument, {
        variables: {
            slug: params.slug?.toString() || ""
        },
        skip: !params.slug
    })

    if (loading) {
        return <RecipeDetailsLoader />
    }

    return (
        <div>
            <RecipeDetailsBreadcrumbs title={recipe?.recipeBySlug.title} />
            <div className="bg-white p-5 rounded-3xl">
                <div className="grid grid-cols-2 gap-5">
                    <Image
                        src={recipe?.recipeBySlug.image || ""}
                        alt={recipe?.recipeBySlug.title || ""}
                        width={800}
                        height={400}
                        className="h-auto w-full rounded-3xl object-cover"
                        draggable={false}
                        priority
                    />
                    
                    <RecipeDetailsInformations />
                </div>

                <RecipeDetailsSteps steps={recipe?.recipeBySlug.recipeSteps} />
            </div>
        </div>
    )
}