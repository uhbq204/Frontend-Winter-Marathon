import { GetRecipeBySlugQuery } from "@/__generated__/graphql"
import Image from "next/image"



interface Props {
    recipeIngredients?: GetRecipeBySlugQuery["recipeBySlug"]["recipeIngredients"]
}

export function RecipeDetailsIngredients({ recipeIngredients }: Props) {
    return (
        <div>
            <div className="mb-2 font-semibold">Ingredients:</div>

            <ul className="flex flex-wrap items-center gap-2">
                {recipeIngredients?.map(rI => (
                    <li
                        key={rI.ingredient.id}
                        className="border-border rounded-3xl border"
                    >
                        <Image
                            src={`/images/ingredients/${rI.ingredient.iconUrl}`}
                            alt={rI.ingredient.name}
                            width={40}
                            height={40}
                        />
                        <span className="mt-1 opacity-65 text-xs p-2">
                            {rI.quantity}{rI.unit[0].toLowerCase()}
                        </span>
                    </li>
                ))} 
            </ul>
        </div>
    )
}