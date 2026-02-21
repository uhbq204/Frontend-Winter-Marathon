import Image from "next/image"

interface Props {
    avatarUrl: string
    name: string
    email: string
}

export function UserInfo({ avatarUrl, name, email }: Props) {
    return (
        <div className="flex items-center gap-2">
            <Image
                src={avatarUrl}
                alt={name}
                width={45}
                height={45}
                className="rounded-full"
            />

            <div>
                <p className="font-medium">{name}</p>
                <p className="opacity-60 text-xs">{email}</p>
            </div> 
        </div>
    )
}