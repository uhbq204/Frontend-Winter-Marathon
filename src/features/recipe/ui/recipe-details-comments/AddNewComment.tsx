import { AddNewCommentDocument } from "@/__generated__/graphql"
import { Input } from "@/shared/components/ui/input"
import { Reference } from "@apollo/client"
import { useMutation } from "@apollo/client/react"
import { ArrowUp, Loader2 } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"



interface Props {
    recipeId?: string
}

export const AddNewComment = ({ recipeId }: Props) => {
    const [comment, setComment] = useState('')

    const [mutate, { loading }] = useMutation(AddNewCommentDocument, {
        onCompleted() {
            setComment('')
            toast.success('Comment added successfully!')
        },
        update(cache, { data }) {
            const newComment = data?.createComment

            if (!newComment || !recipeId) return

            cache.modify({
                id: cache.identify({
                    __typename: 'Recipe',
                    id: recipeId
                }),
                fields: {
                    comments(
                        existingComments: ReadonlyArray<Reference> = [],
                        { readField, toReference }
                    ) {
                        const newCommentRef = toReference(newComment)

                        if (!newCommentRef) {
                            return existingComments
                        }

                        const alreadyExists = existingComments.some(item => {
                            return readField('id', item) === newComment.id
                        })

                        if (alreadyExists) {
                            return existingComments
                        }

                        return [...existingComments, newCommentRef]
                    }
                }
            })
        }
    })
    
    return (
        <div className="border-primary mt-4 flex items-center gap-2 rounded-3xl border p-2 transition-colors">
            <Input
                type="text"
                placeholder="Add a new comment..."
                value={comment}
                onChange={e => setComment(e.target.value)}
                className="rounded-3xl"
            />
            <button
                className="rounded-full bg-gray-700 p-1 text-white transition-colors hover:bg-gray-900 cursor-pointer"
                disabled={loading || !comment.trim()}
                onClick={() =>
                    recipeId && 
                    mutate({ variables: { input: { content: comment, recipeId } } })
                }
            >
                {loading ? <Loader2 className="animate-spin" /> : <ArrowUp />}
            </button>
        </div>
    )
}