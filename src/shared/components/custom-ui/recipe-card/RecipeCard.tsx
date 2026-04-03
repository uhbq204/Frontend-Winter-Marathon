import { GetRecipesQuery } from "@/__generated__/graphql";
import { recipeCardVariants } from "./styles/recipe-card.styles";
import { TRecipeCardSize } from "./types/recipe-card.types";



interface Props {
    recipe: GetRecipesQuery['recipes'][0]
    size?: TRecipeCardSize
}

export function RecipeCard({ recipe, size }: Props) {
    return <div className={recipeCardVariants({ size })}>
        RecipeCard
    </div>
}