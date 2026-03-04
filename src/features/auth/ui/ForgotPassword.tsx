'use client'

import { RequestPasswordResetDocument } from "@/__generated__/graphql"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { useMutation } from "@apollo/client/react"
import { isEmailRegex } from "../utils/is-email.regex"
import { Turnstile } from "@marsidev/react-turnstile"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"


interface FormData {
    email: string
}

export default function ForgotPassword() {
    const { register, handleSubmit } = useForm<FormData>()

    const [requestReset, { loading }] = useMutation(
        RequestPasswordResetDocument,
        {
            onCompleted: () => {
                toast.success("If email exists, reset link was sent")
            },
            onError: () => {
                toast.error("Something went wrong")
            }
        }
    )

    const [captchaToken, setCaptchaToken] = useState<string | null>(null)

    const onSubmit = (data: FormData) => {
        if (!captchaToken) {
            toast.error("Please complete the CAPTCHA challenge", {
                id: 'captcha-error'
            })
            return
        }

        requestReset({ variables: { data }, 
            context: {
                headers: {
                    'cf-turnstile-token': captchaToken
                }
            }
        })
    }

    return (
        <div className="flex h-screen">
            <div className="m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg relative">
                <h1 className="mb-5 text-center text-[2.3rem] font-bold">
                    Forgot Password
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <Input
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: isEmailRegex,
                                message: "Invalid email format"
                            }
                        })}
                        type="email"
                        placeholder="Enter your email:"
                    />

                    <div className="flex justify-center pt-2">
                        <Turnstile
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                            onSuccess={token => setCaptchaToken(token)}
                            onExpire={() => setCaptchaToken(null)}
                            options={{
                                theme: 'light'
                            }}
                        />
                    </div>
                    
                    <div className="text-center">
                        <Button type="submit" disabled={loading}>
                            Send Reset Link
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}