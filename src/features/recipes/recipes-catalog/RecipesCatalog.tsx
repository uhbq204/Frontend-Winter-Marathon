import { RecipeCarousel } from "@/features/recipe-carousel/RecipeCarousel";
import { BookMarked, StarIcon } from "lucide-react";

interface Props {}

export function RecipesCatalog({}: Props) {
    return (
        <div>
            <RecipeCarousel
                Icon={BookMarked}
                title="Recommended"
            />

            <RecipeCarousel
                Icon={StarIcon}
                title="Popular"
            />
        </div>
    )
}