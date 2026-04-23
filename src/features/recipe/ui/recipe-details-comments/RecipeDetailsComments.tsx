import { GetRecipeBySlugQuery } from "@/__generated__/graphql";
import { recipeCardBadgeVariants } from "@/shared/components/custom-ui/recipe-card/styles/recipe-card.styles";
import { formatCompactNumber } from "@/shared/utils/format-compact-number.util";
import { profile } from "console";
import { Eye, Heart, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { AddNewComment } from "./AddNewComment";

interface Props {
    comments?: GetRecipeBySlugQuery["recipeBySlug"]["comments"]
    likes?: number | null
    views?: number | null
    recipeId?: string
}

export const RecipeDetailsComments = ({ comments, likes, views, recipeId }: Props) => {
    return (
        <div>
            <div className="mb-3 flex items-center">
                <MessageCircleMore className="mr-2 opacity-70" />
                <h2 className="text-xl font-semibold text-gray-800">Comments</h2>
                <div className="ml-1 rounded bg-gray-200 p-0.5 text-gray-500">
                    {comments?.length}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className={recipeCardBadgeVariants({ size: 'default' })}>
                    <Heart className={'size-4'} />
                    {formatCompactNumber(likes)}
                </span>

                <span className={recipeCardBadgeVariants({ size: 'default' })}>
                    <Eye className={'size-4'} />
                    {formatCompactNumber(views)}
                </span>
            </div>

            {comments?.length ? comments.map(comment => (
                <div key={comment.id} className="mt-4 rounded-3xl bg-gray-100 p-4">
                    <div className="flex items-center gap-1">
                        <Image
                            src={comment?.author.avatarUrl || '/images/default-avatar.png'}
                            alt={comment?.author.profile?.fullName || ''}
                            width={24}
                            height={24}
                            className="rounded-full h-6 w-6 object-cover"
                            draggable={false}
                        />
                        <span>
                            @{comment?.author.profile?.fullName || 'anonymous'}
                        </span>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-800">
                            {comment.content}
                        </p>
                        <p className="text-xs text-gray-500">
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            )
        ) : (
            <p className="text-gray-500">
                No comments yet. Be the first to comment on this recipe!
            </p>
        )}

        <AddNewComment recipeId={recipeId} />
        </div>
    )
}