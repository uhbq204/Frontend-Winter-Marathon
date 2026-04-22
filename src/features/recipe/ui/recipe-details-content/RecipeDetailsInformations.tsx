import { GetRecipeBySlugQuery } from "@/__generated__/graphql"
import { RecipeDetailsActions } from "./RecipeDetailsActions"
import { RecipeDetailsMeta } from "./RecipeDetailsMeta"
import { RecipeDetailsIngredients } from "./RecipeDetailsIngredients"
import { RecipeDetailsDescription } from "./RecipeDetailsDescription"



interface Props {
    recipe?: GetRecipeBySlugQuery["recipeBySlug"]
}

export function RecipeDetailsInformations({ recipe }: Props) {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold leading-tight italic">
                    {recipe?.title}
                </h1>

                <RecipeDetailsActions />
            </div>

            <RecipeDetailsMeta recipe={recipe} />

            <RecipeDetailsDescription recipe={recipe} />
            
            <RecipeDetailsIngredients recipeIngredients={recipe?.recipeIngredients} />
        </div>
    )
}