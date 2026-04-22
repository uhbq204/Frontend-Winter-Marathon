import { Heart, Share, ShoppingCart } from "lucide-react";

interface Props {}

export function RecipeDetailsActions({}: Props) {
    return (
        <div className="flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
            <button>
                <Share size={20} />
            </button>

            <button>
                <ShoppingCart size={20} />
            </button>

            <button>
                <Heart size={20} fill="tomato"/>
            </button>
        </div>
    )
}