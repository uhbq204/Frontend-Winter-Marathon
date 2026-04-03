import { cva } from "class-variance-authority";

export const recipeCardVariants = cva('bg-white rounded-3xl', {
    variants: {
        size: {
            default: 'p-4',
            sm: 'p-3.5'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardBadgeVariants = cva('flex items-center gap-1.5 rouded-xl bg-gray-400 font-medium text-black/70', {
    variants: {
        size: {
            default: 'h-9 px-3 text-base',
            sm: 'h-8 px-2.5 text-sm'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardImageVariants = cva('relative rounded-3xl overflow-hidden w-full', {
    variants: {
        size: {
            default: 'aspect-[1.45/1]',
            sm: 'aspect-[1.42/1]'
        }
    },
    defaultVariants: {
        size: 'default'

    }
})


export const recipeCardTitleVariants = cva('font-semibold text-black tracking-tight line-clamp-1', {
    variants: {
        size: {
            default: 'text-2xl',
            sm: 'text-xl'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardDescriptionVariants = cva('text-black/55 line-clamp-2', {
    variants: {
        size: {
            default: 'mt-2 text-lg leading-6',
            sm: 'mt-1.5 text-base leading-5'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardFooterVariants = cva('inline-flex items-center gap-1.5 font-medium text-black/45', {
    variants: {
        size: {
            default: 'text-sm',
            sm: 'text-xs'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardDifficultyBadgeVariants = cva('flex items-center gap-1.5 font-semibold rounded-xl px-2.5 py-1', {
    variants: {
        tone: {
            easy: 'bg-green-300 text-green-700',
            medium: 'bg-yellow-300 text-yellow-700',
            hard: 'bg-red-300 text-red-700'
        },
        size: {
            default: 'text-sm',
            sm: 'text-xs'
        }
    },
    defaultVariants: {
        tone: 'easy',
        size: 'default'
    }
})