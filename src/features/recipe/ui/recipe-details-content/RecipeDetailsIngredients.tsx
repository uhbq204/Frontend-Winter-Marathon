import { GetRecipeBySlugQuery } from "@/__generated__/graphql"
import Image from "next/image"



interface Props {
    recipeIngredients?: GetRecipeBySlugQuery["recipeBySlug"]["recipeIngredients"]
}

export function RecipeDetailsIngredients({ recipeIngredients }: Props) {
    return (
        <div>
            <div className="mt-2 mb-1 font-semibold">Ingredients:</div>

            <ul className="flex flex-wrap items-center gap-2">
                {recipeIngredients?.map(rI => (
                    <li
                        key={rI.ingredient.id}
                        className="border-border rounded-3xl border flex flex-col items-center px-3 py-1"
                    >
                        <Image
                            src={`/images/ingredients/${rI.ingredient.iconUrl}`}
                            alt={rI.ingredient.name}
                            width={40}
                            height={40}
                        />
                        <span className=" mb-1 lowercase opacity-65 text-xs">
                            {rI.quantity} {rI.unit}
                        </span>
                    </li>
                ))} 
            </ul>
        </div>
    )
}