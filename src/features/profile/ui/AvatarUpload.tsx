import { Button } from "@/shared/components/ui/button"
import { SERVER_URL } from "@/shared/config/api.config"
import { Edit } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


interface Props {
    value?: string
    onChange: (url: string) => void
}

export function AvatarUpload({ value, onChange }: Props) {
    const [loading, setLoading] = useState(false)

    async function upload(file: File) {
        setLoading(true)

        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch(`${SERVER_URL}/media-upload/avatar`, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })

        const data = await res.json()

        onChange(data.url)

        setLoading(false)
    }

    return (
        <div className="flex items-center gap-3 relative">
            <Image
                src={value || '/images/default-avatar.png'}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full object-cover"
            />

            <label>
                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={e => {
                        const file = e.target.files?.[0]
                        if (file) upload(file)
                    }}
                />

                <Button
                    variant="soft"
                    size="sm"
                    asChild
                    disabled={loading}
                    className="absolute right-0 bottom-[-9] rounded-full"
                >
                    <span>
                        <Edit className={loading ? 'animate-spin' : ''} />
                    </span>
                </Button>
            </label>
        </div>
    )
}