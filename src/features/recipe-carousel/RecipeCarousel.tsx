import { GetRecipesQuery } from "@/__generated__/graphql";
import { HeadingWithIcon } from "@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon";
import { RecipeCard } from "@/shared/components/custom-ui/recipe-card/RecipeCard";
import { TRecipeCardSize } from "@/shared/components/custom-ui/recipe-card/types/recipe-card.types";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/components/ui/carousel";
import { cn } from "@/shared/utils";
import { LucideIcon } from "lucide-react";



interface Props {
  Icon: LucideIcon
  title: string
  size: TRecipeCardSize
  recipes: GetRecipesQuery['recipes']
}

export function RecipeCarousel({ Icon, title, size, recipes }: Props) {
  return (
    <div className="mb-6">
      <HeadingWithIcon
        className="mb-4" 
        Icon={Icon}
      >
        {title}
      </HeadingWithIcon>

      <Carousel>
        <CarouselContent className="px-3 py-2">
          {recipes.map(recipe => (
            <CarouselItem
              key={recipe.slug}
              className={cn(
                "group transition-transform duration-300 will-change-transform",
                size === 'sm' ? 'basis-[22%]' : 'basis-[26%]',
                size === 'sm' ? 'hover:-rotate-3' : 'hover:rotate-3'
              )}
            >
              <RecipeCard
                recipe={recipe}
                size={size}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}