import { Difficulty } from "@/__generated__/graphql"
import { recipeCardDifficultyBadgeVariants, recipeCardFooterVariants } from "../styles/recipe-card.styles"
import { ChefHat, Eye, Heart } from "lucide-react"
import { formatCompactNumber } from "@/shared/utils/format-compact-number.util"
import { TRecipeCardSize } from "../types/recipe-card.types"



interface Props {
    views?: number | null
    likes?: number | null
    difficultyLevels?: Difficulty
    size: TRecipeCardSize
}

export function RecipeCardFooter({ views, likes, difficultyLevels, size }: Props) {
    const hatCount = difficultyLevels === Difficulty.EASY ? 1 : difficultyLevels === Difficulty.MEDIUM ? 2 : 3

    return (
        <div className="mt-2.5 flex items-center justify-between gap-3">
            <div className={recipeCardDifficultyBadgeVariants({
                    tone: difficultyLevels,
                    size
                })}
            >
                <span className="flex gap-0.5">
                    {[...Array(hatCount)].map((_, index) => (
                        <ChefHat
                            key={index}
                            className={size === 'sm' ? 'size-3' : 'size-4'}
                        />
                    ))}
                </span>
                <span className="capitalize">{difficultyLevels}</span>
            </div>

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