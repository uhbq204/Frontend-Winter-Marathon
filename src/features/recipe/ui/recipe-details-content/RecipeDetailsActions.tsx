import { Heart, Share, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

interface Props {}

export function RecipeDetailsActions({}: Props) {
    return (
        <div className="flex items-center gap-2.5">
            <button className="opacity-70 transition-opacity hover:opacity-100"
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    toast.success('Link copied to clipboard!')
                }}
            >
                <Share size={22} stroke="currentColor" />
            </button>

            <button className="opacity-70 transition-opacity hover:opacity-100">
                <ShoppingCart size={22} />
            </button>

            <button className="opacity-80 transition-opacity hover:opacity-100">
                <Heart size={24} fill="tomato" stroke="tomato"/>
            </button>
        </div>
    )
}