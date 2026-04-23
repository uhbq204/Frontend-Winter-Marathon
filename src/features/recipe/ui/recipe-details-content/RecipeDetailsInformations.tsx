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
            <div className="flex items-start justify-between">
                <h1 className="text-4xl font-bold leading-tight italic">
                    {recipe?.title}
                </h1>
                <div className="shrink-0">
                    <RecipeDetailsActions />
                </div>
            </div>

            <RecipeDetailsMeta recipe={recipe} />

            <RecipeDetailsDescription recipe={recipe} />
            
            <RecipeDetailsIngredients recipeIngredients={recipe?.recipeIngredients} />
        </div>
    )
}