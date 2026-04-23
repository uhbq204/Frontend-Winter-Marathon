'use client'

import { GetRecipeBySlugQuery } from "@/__generated__/graphql"
import Image from "next/image"
import { RecipeDetailsInformations } from "./RecipeDetailsInformations"
import { RecipeDetailsSteps } from "../recipe-details-steps/RecipeDetailsSteps"
import { RecipeDetailsBreadcrumbs } from "../RecipeDetailsBreadcrumbs"



interface Props {
    recipe?: GetRecipeBySlugQuery["recipeBySlug"]
}

export function RecipeDetailsContent({ recipe }: Props) {
    return (
        <div>
            <RecipeDetailsBreadcrumbs title={recipe?.title} />
            <div className="bg-white p-5 rounded-3xl">
                <div className="grid grid-cols-2 gap-5">
                    <Image
                        src={recipe?.image || ""}
                        alt={recipe?.title || ""}
                        width={800}
                        height={450}
                        className="h-auto w-full rounded-3xl object-cover"
                        draggable={false}
                        priority
                    />
                    
                    <RecipeDetailsInformations recipe={recipe} />
                </div>

                <RecipeDetailsSteps steps={recipe?.recipeSteps} />
            </div>
        </div>
    )
}