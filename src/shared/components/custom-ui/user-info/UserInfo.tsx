import Image from "next/image"

interface Props {
    avatarUrl: string
    name: string
    email: string
}

export function UserInfo({ avatarUrl, name, email }: Props) {
    return (
        <div className="flex items-center gap-2 bg-white py-1.5 pl-2 pr-4 rounded-full hover:bg-gray-300 transition cursor-pointer">
            <Image
                src={avatarUrl}
                alt={name}
                width={45}
                height={45}
                className="rounded-full object-cover"
            />

            <div className="leading-tight">
                <p className="font-medium">{name}</p>
                <p className="text-gray-500 text-sm">{email}</p>
            </div> 
        </div>
    )
}