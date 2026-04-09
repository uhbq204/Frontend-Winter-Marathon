import { cva } from "class-variance-authority";

export const recipeCardVariants = cva('bg-white rounded-3xl', {
    variants: {
        size: {
            default: 'p-4',
            sm: 'p-3'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardBadgeVariants = cva('flex items-center gap-0.5 rounded-3xl bg-gray-200 font-medium text-black/70', {
    variants: {
        size: {
            default: 'py-1 px-1.5 text-[11px]',
            sm: 'py-0.5 px-1 text-[9px]'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardTitleVariants = cva('font-semibold text-black tracking-tight line-clamp-1', {
    variants: {
        size: {
            default: 'text-base',
            sm: 'text-xs'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardDescriptionVariants = cva('text-black/55 line-clamp-2', {
    variants: {
        size: {
            default: 'mt-2 text-sm leading-5',
            sm: 'mt-1.5 text-xs leading-4'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardFooterVariants = cva('inline-flex items-center gap-0.5 font-medium text-black/45', {
    variants: {
        size: {
            default: 'text-xs',
            sm: 'text-[10px]'
        }
    },
    defaultVariants: {
        size: 'default'
    }
})


export const recipeCardDifficultyBadgeVariants = cva('flex items-center gap-1 font-semibold rounded-xl px-1.5 py-0.5', {
    variants: {
        tone: {
            EASY: 'bg-green-300 text-green-700',
            MEDIUM: 'bg-yellow-300 text-yellow-700',
            HARD: 'bg-red-300 text-red-700'
        },
        size: {
            default: 'text-[9px]',
            sm: 'text-[7px]'
        }
    },
    defaultVariants: {
        tone: 'EASY',
        size: 'default'
    }
})