import { Difficulty } from "@/__generated__/graphql"
import { recipeCardDifficultyBadgeVariants, recipeCardFooterVariants } from "../styles/recipe-card.styles"
import { ChefHat, Eye, Heart } from "lucide-react"
import { formatCompactNumber } from "@/shared/utils/format-compact-number.util"
import { TRecipeCardSize } from "../types/recipe-card.types"
import { RecipeCardDifficultyBadge } from "./badges/RecipeCardDifficultyBadge"



interface Props {
    views?: number | null
    likes?: number | null
    difficultyLevels?: Difficulty
    size: TRecipeCardSize
}

export function RecipeCardFooter({ views, likes, difficultyLevels, size }: Props) {
    return (
        <div className="mt-2.5 flex items-center justify-between gap-3">
            <RecipeCardDifficultyBadge
                difficultyLevels={difficultyLevels || Difficulty.Easy}
                size={size}
            />

            <div className="flex items-center gap-2">
                <span className={recipeCardFooterVariants({ size })}>
                    <Heart className={size === 'sm' ? 'size-3' : 'size-4'} />
                    {formatCompactNumber(likes)}
                </span>

                <span className={recipeCardFooterVariants({ size })}>
                    <Eye className={size === 'sm' ? 'size-3' : 'size-4'} />
                    {formatCompactNumber(views)}
                </span>
            </div>
        </div>
    )
}