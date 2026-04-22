import { LucideIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { TRecipeCardSize } from "../../types/recipe-card.types";
import { recipeCardBadgeVariants } from "../../styles/recipe-card.styles";



interface Props extends PropsWithChildren {
    Icon?: LucideIcon
    size?: TRecipeCardSize
}

export function RecipeCardBadge({ Icon, size, children }: Props) {
    return (
        <div className={recipeCardBadgeVariants({ size })}>
            {Icon && <Icon className={size === 'sm' ? 'size-3.5' : 'size-4'} />}
            {children}
        </div>
    )
}