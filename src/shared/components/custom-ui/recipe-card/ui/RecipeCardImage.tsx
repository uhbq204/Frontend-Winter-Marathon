import Image from "next/image"
import { recipeCardImageVariants } from "../styles/recipe-card.styles"
import { TRecipeCardSize } from "../types/recipe-card.types"



interface Props {
    image: string
    name: string
    size: TRecipeCardSize
}

export function RecipeCardImage({ image, name, size }: Props) {
    return (
        <div className={recipeCardImageVariants({ size })}>
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-200 will-change-transform group-hover:scale-[1.03]"
                sizes={
                    size === 'sm'
                        ? '(max-width: 768px) 100vw, 200px'
                        : '(max-width: 1024px) 100vw, 400px'
                }
            />
        </div>
    )
}