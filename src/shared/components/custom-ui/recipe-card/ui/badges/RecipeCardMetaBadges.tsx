import { GetRecipesQuery } from "@/__generated__/graphql";
import { TRecipeCardSize } from "../../types/recipe-card.types";
import { RecipeCardBadge } from "./RecipeCardBadge";
import { Clock4, Flame } from "lucide-react";



interface Props {
    recipe: GetRecipesQuery['recipes'][number]
    size: TRecipeCardSize
}

export function RecipeCardMetaBadges({ recipe, size }: Props) {
    return (
        <div className="mt-4 flex items-center gap-2">
            <RecipeCardBadge size={size}>
                Main dish
            </RecipeCardBadge>

            <RecipeCardBadge Icon={Flame} size={size}>
                {recipe.calories}kcal
            </RecipeCardBadge>

            <RecipeCardBadge Icon={Clock4} size={size}>
                {recipe.cookingTime}min
            </RecipeCardBadge>
        </div>
    )
}