import { UseFormReturn } from "react-hook-form";
import { Mail, PenLine, UserCircle } from "lucide-react";
import { InputLabel } from "@/shared/components/custom-ui/input-label/InputLabel";
import { AvatarUpload } from "./AvatarUpload";
import { TProfileForm } from "../types/profile-update.types";


export function GeneralInformationForm({
    form
}: {
    form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
    const { register } = form

    return (
        <div className="rounded-xl border bg-white p-6">
            <h2 className="mb-6 text-lg font-semibold">General Information</h2>

            <div className="space-y-4">

                <div className="flex items-center gap-4">
                    <AvatarUpload onChange={
                            url => form.setValue('avatarUrl', url, { shouldDirty: true })
                        }
                        value={form.watch('avatarUrl') || undefined}
                    />

                    <InputLabel
                        Icon={PenLine}
                        label="Full name"
                        placeholder="Full name"
                        {...register("profile.fullName")}
                    />
                </div>

                <InputLabel
                    Icon={Mail}
                    label="Email"
                    placeholder="Email"
                    {...register("email")}
                />

                <InputLabel
                    Icon={UserCircle}
                    label="Age"
                    placeholder="Age"
                    type="number"
                    {...register("profile.age")}
                />

                <label className="relative block">
                    <span className="mb-1.5 block text-sm font-mono opacity-50">Bio</span>
                    <textarea
                        className="w-full rounded-md border p-3 font-mono focus-visible:border-ring focus-visible:ring-ring/80 focus-visible:ring-3"
                        placeholder="Bio"
                        {...register("profile.bio")}
                    />
                </label>
            </div>
        </div>
    )
}