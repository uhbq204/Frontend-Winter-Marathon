'use client'

import { LoginDocument, RegisterDocument, type AuthInput } from "@/__generated__/graphql"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { useMutation } from "@apollo/client/react"
import { AuthChangeTypeForm } from "./AuthChangeTypeForm"
import { useForm } from "react-hook-form"
import { isEmailRegex } from "../utils/is-email.regex"
import { cn } from "@/shared/utils"
import { toast } from "react-hot-toast/headless"



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

    const [auth, { loading }] = useMutation(
        isLogin ? LoginDocument : RegisterDocument,
        {
            onCompleted: () => {
                toast.success(
                    isLogin ? 'Logged in successfully!' : 'Registered successfully!',
                    {
                        id: 'auth-success'
                    }
                )
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
            <div className="m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-5 text-white shadow-lg">
                <h1 className="mb-5 text-center text-4xl font-bold">
                    {isLogin ? 'Login' : 'Register'}
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
                        className={cn(
                            'border border-transparent transition-colors', 
                            errors.email ? "text-destructive" : ""
                        )}
                    />

                    {errors.email && (
                        <p className="text-sm text-destructive">
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
                        className={cn(
                            'border border-transparent transition-colors', 
                            errors.password ? "text-destructive" : ""
                        )}
                    />

                    {errors.password && (
                        <p className="text-sm text-destructive">
                            {errors.password.message}
                        </p>
                    )}

                    <div className="text-center">
                        <Button
                            type="submit"
                            disabled={!isValid || loading}
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                    </div>
                </form>
                <AuthChangeTypeForm isLogin={isLogin} />
            </div>
        </div>
    )
}