import { Difficulty, GetRecipeBySlugQuery } from "@/__generated__/graphql"
import { RecipeCardBadge } from "@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardBadge"
import { Clock4, Flame, UserPlus } from "lucide-react"
import { RecipeCardDifficultyBadge } from "@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardDifficultyBadge"
import Image from "next/image"



interface Props {
    recipe?: GetRecipeBySlugQuery["recipeBySlug"]
}

export function RecipeDetailsMeta({ recipe }: Props) {
    return (
        <div className="flex items-center justify-between mt-3">
            <div>
                <div className="flex items-center gap-2">
                    <RecipeCardBadge>{recipe?.mealType}</RecipeCardBadge>

                    <RecipeCardBadge Icon={Flame}>
                        {recipe?.calories}kcal
                    </RecipeCardBadge>

                    <RecipeCardBadge Icon={Clock4}>
                        {recipe?.cookingTime}min
                    </RecipeCardBadge>
                        
                    <RecipeCardDifficultyBadge
                        difficultyLevels={recipe?.difficulty || Difficulty.Easy}
                        size={'default'}
                    />
                </div>
            </div>

            <div className="flex items-center gap-0.5">
                <Image
                    src={recipe?.author.avatarUrl || "/images/default-avatar.png"}
                    alt={recipe?.author.profile?.fullName || ""}
                    width={20}
                    height={20}
                    className="h-auto w-5 rounded-full"
                    draggable={false}
                />
                <span className="opacity-65">
                    @{recipe?.author.profile?.fullName || "anonymous"}
                </span>
                <button className="rounded-3xl bg-violet-300 px-2 font-semibold flex items-center ml-2">
                    <UserPlus
                        size={16}
                        className="fill-violet-500"
                    />
                    <span className="text-violet-500">Follow</span>
                </button>
            </div>
        </div>
    )
}