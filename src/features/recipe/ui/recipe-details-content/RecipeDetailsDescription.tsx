import { GetRecipeBySlugQuery } from "@/__generated__/graphql"



interface Props {
    recipe?: GetRecipeBySlugQuery["recipeBySlug"]
}

export function RecipeDetailsDescription({ recipe }: Props) {
    return (
        <div>
            <div className="mb-1 mt-3 font-semibold">Description:</div>

            <div className="text-sm opacity-65">{recipe?.description}</div>

            <div className="flex flex-wrap items-center gap-1">
                {recipe?.tags?.map(tag => (
                    <span
                        key={tag.name}
                        className="text-primary-dark mb-1 text-sm font-semibold"
                    >
                        #{tag.name}
                    </span>
                ))}
            </div>

            <div className="mt-1 flex items-center gap-2">
                <div className="flex items-center gap-1">
                    <span className="font-semibold opacity-80">
                        {recipe?.nutritionFact?.carbohydrates}g
                    </span>
                    <span className="text-sm opacity-65">Carbohydrates</span>
                </div>

                <span className="text-sm">•</span>

                <div className="flex items-center gap-1">
                    <span className="font-semibold opacity-80">
                        {recipe?.nutritionFact?.proteins}g
                    </span>
                    <span className="text-sm opacity-65">Proteins</span>
                </div>

                <span className="text-sm">•</span>

                <div className="flex items-center gap-1">
                    <span className="font-semibold opacity-80">
                        {recipe?.nutritionFact?.fats}g
                    </span>
                    <span className="text-sm opacity-65">Fats</span>
                </div>

                <span className="text-sm">•</span>

                <div className="flex items-center gap-1">
                    <span className="font-semibold opacity-80">
                        {recipe?.nutritionFact?.fiber}g
                    </span>
                    <span className="text-sm opacity-65">Fiber</span>
                </div>
            </div>
        </div>
    )
}