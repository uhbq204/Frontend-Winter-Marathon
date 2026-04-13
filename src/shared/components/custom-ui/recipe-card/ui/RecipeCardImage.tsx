import Image from "next/image"
import { TRecipeCardSize } from "../types/recipe-card.types"
import Link from "next/link"
import { PAGES } from "@/shared/config/page.config"
import { cn } from "@/shared/utils"



interface Props {
  image: string
  title: string
  slug: string
  size: TRecipeCardSize
}

export function RecipeCardImage({ image, title, slug, size }: Props) {
  return (
    <Link
      href={PAGES.RECIPE_DETAIL(slug)}
      className="relative w-full"
    >
      <Image
        src={image}
        alt={title}
        className={cn(
          "object-cover transition-transform duration-200 will-change-transform group-hover:scale-[1.03] rounded-2xl",
          size === 'sm' ? 'h-30 w-60' : 'h-36 w-72'
        )}
        width={size === 'sm' ? 200 : 250}
        height={size === 'sm' ? 200 : 250}
        draggable={false}
      />
    </Link>
  )
}