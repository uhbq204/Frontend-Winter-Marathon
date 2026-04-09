import Image from "next/image"
import { TRecipeCardSize } from "../types/recipe-card.types"
import Link from "next/link"
import { PAGES } from "@/shared/config/page.config"



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
      className="relative w-full overflow-hidden rounded-3xl"
    >
      <Image
        src={image}
        alt={title}
        className="object-cover transition-transform duration-200 will-change-transform group-hover:scale-[1.03]"
        width={size === 'sm' ? 200 : 250}
        height={size === 'sm' ? 200 : 250}
        draggable={false}
      />
    </Link>
  )
}