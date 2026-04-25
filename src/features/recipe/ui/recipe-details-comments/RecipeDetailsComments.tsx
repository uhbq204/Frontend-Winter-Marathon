import { GetRecipeBySlugQuery } from "@/__generated__/graphql";
import { recipeCardBadgeVariants } from "@/shared/components/custom-ui/recipe-card/styles/recipe-card.styles";
import { formatCompactNumber } from "@/shared/utils/format-compact-number.util";
import { Eye, Heart, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import { AddNewComment } from "./AddNewComment";
import dayjs from "dayjs";

interface Props {
    comments?: GetRecipeBySlugQuery["recipeBySlug"]["comments"]
    likes?: number | null
    views?: number | null
    recipeId?: string
}

export const RecipeDetailsComments = ({ comments, likes, views, recipeId }: Props) => {
    return (
        <div className="rounded-3xl bg-white p-5 flex flex-col justify-between">
            <div>
                <div className="mb-1 flex items-center">
                    <MessageCircleMore className="mr-2 opacity-70" />
                    <h2 className="text-xl font-semibold text-gray-800">Comments</h2>
                    <div className="ml-2 rounded-3xl bg-gray-200 px-1.5 py-0.5 text-sm  text-gray-600 font-medium">
                        {comments?.length}
                    </div>
                </div>

                <div className="grid grid-cols-[32px_1fr]">
                    <div></div>

                        <div className="flex items-center gap-1 opacity-80">
                            <span className={recipeCardBadgeVariants({ size: 'default', className: "bg-white" })}>
                                <Heart className={'size-4'} fill="#cfcfcf" />
                                {formatCompactNumber(likes)}
                            </span>

                            <span className={recipeCardBadgeVariants({ size: 'default', className: "bg-white" })}>
                                <Eye className={'size-4'} fill="#cfcfcf" />
                                {formatCompactNumber(views)}
                            </span>
                        </div>
                </div>

                <div className="mt-2">
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
                                    {dayjs(comment.createdAt).format('MMMM D, YYYY')}
                                </p>
                            </div>
                        </div>
                    )
                ) : (
                    <p className="text-gray-500 mt-3">
                        No comments yet. Be the first to comment on this recipe!
                    </p>
                )}
            </div>
        </div>
        
            <AddNewComment recipeId={recipeId} />
        </div>
    )
}