'use client'

import { LoginDocument, LoginMutation, MeDocument, RegisterDocument, type AuthInput, type LoginMutationVariables, type RegisterMutation, type RegisterMutationVariables } from "@/__generated__/graphql"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { useApolloClient, useMutation } from "@apollo/client/react"
import { AuthChangeTypeForm } from "./AuthChangeTypeForm"
import { useForm } from "react-hook-form"
import { isEmailRegex } from "../utils/is-email.regex"
import { toast } from "react-hot-toast"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { PAGES } from "@/shared/config/page.config"





interface Props {
    type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
    const isLogin = type === 'login'

    const {register, handleSubmit, formState: { errors, isValid }} = useForm<AuthInput>({
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const client = useApolloClient()
    const router = useRouter()

    const [auth, { loading }] = useMutation<
        LoginMutation | RegisterMutation,
        LoginMutationVariables | RegisterMutationVariables
    >(
        isLogin ? LoginDocument : RegisterDocument,
        {
            onCompleted: data => {
                const authData = 'login' in data ? data?.login : data?.register

                client.writeQuery({
                    query: MeDocument,
                    data: {
                        me: authData.user
                    }
                })

                toast.success(
                    isLogin ? 'Logged in successfully!' : 'Registered successfully!',
                    {
                        id: 'auth-success'
                    }
                )

                router.replace(PAGES.DASHBOARD)
            },

            onError: error => {
                toast.error(error.message, {
                    id: 'auth-error'
                })
            }
        }
    )

    const handleAuth = (data: AuthInput) => {
        auth({
            variables: {
                data
            }
        })
    }

    return (
        <div className="flex h-screen">
            <div className="m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg relative">
                <h1 className="mb-5 text-center text-[2.3rem] font-bold">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </h1>

                <form className="space-y-3" onSubmit={handleSubmit(handleAuth)}>
                    <Input
                        {...register('email', {
                            required: true, 
                            pattern: {
                                value: isEmailRegex, 
                                message: 'Invalid email address'
                            }
                        })}
                        type="email"
                        placeholder="Enter your email:"
                        aria-invalid={!!errors.email}
                    />

                    {errors.email && (
                        <p className="text-xs text-destructive block  -mt-1">
                            {errors.email.message}
                        </p>
                    )}

                    <Input
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })}
                        type="password"
                        placeholder="Enter your password:"
                        aria-invalid={!!errors.password}
                    />

                    {errors.password && (
                        <p className="text-xs text-destructive block  -mt-1">
                            {errors.password.message}
                        </p>
                    )}

                    <div className="text-center">
                        <Button
                            type="submit"
                            disabled={!isValid || loading}
                        >
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </div>
                </form>
                <AuthChangeTypeForm isLogin={isLogin} />

                <Image
                    src="/emotions/salad.png"
                    alt="Salad"
                    width={200}
                    height={200}
                    className="absolute -bottom-18 -left-22 -rotate-12"
                    draggable={false}
                />
            </div>
        </div>
    )
}