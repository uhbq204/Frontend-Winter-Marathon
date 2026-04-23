import { AddNewCommentDocument } from "@/__generated__/graphql"
import { Input } from "@/shared/components/ui/input"
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
        updateQueries: {}
    })
    
    return (
        <div className="focus-within:border-primary mt-4 fle w-full items-center gap-2 rounded-3xl border border-transparent p-2 transition-colors">
            <Input
                type="text"
                placeholder="Add a new comment..."
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button
                className="rounded-full bg-gray-800 p-2 text-white transition-colors hover:bg-gray-700 disabled:bg-gray-400"
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