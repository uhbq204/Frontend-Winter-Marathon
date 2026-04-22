import { ChefHat } from "lucide-react";
import { recipeCardDifficultyBadgeVariants } from "../../styles/recipe-card.styles";
import { Difficulty } from "@/__generated__/graphql";
import { TRecipeCardSize } from "../../types/recipe-card.types";



interface Props {
    difficultyLevels: Difficulty
    size: TRecipeCardSize
}

export function RecipeCardDifficultyBadge({ difficultyLevels, size }: Props) {
    const hatCount = difficultyLevels === Difficulty.Easy ? 1 : difficultyLevels === Difficulty.Medium ? 2 : 3

    return (
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
    )
}