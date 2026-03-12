'use client'

import { IProfileForm } from "../types/profile-update.types";
import { useMutation, useQuery } from "@apollo/client/react";
import { GetProfileDocument, UpdateProfileDocument } from "@/__generated__/graphql";
import toast from "react-hot-toast";
import { Button } from "@/shared/components/ui/button";
import { GeneralInformationForm } from "./GeneralInformationForm";
import { BodyMeasurementsForm } from "./BodyMeasurements";
import { useForm } from "react-hook-form";
import { HeadingWithIcon } from "@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon";
import { User } from "lucide-react";
import { useEffect } from "react";



export function Profile() {
    const form = useForm<IProfileForm>({
        mode: "onChange"
    })

    const { data } = useQuery(GetProfileDocument)

    useEffect(() => {
        if (!data?.me) return

        form.reset({
            fullName:data.me.profile?.fullName || '',
            email: data.me.email || '',
            age: data.me.profile?.age || undefined,
            bio: data.me.profile?.bio || '',
            avatarUrl: data.me.avatarUrl || '',
            heightCm: data.me.measurements?.heightCm || undefined,
            weightKg: data.me.measurements?.weightKg || undefined,
            goalWeightKg: data.me.measurements?.goalWeightKg || undefined,
            chestCm: data.me.measurements?.chestCm || undefined,
            waistCm: data.me.measurements?.waistCm || undefined,
            thighCm: data.me.measurements?.thighCm || undefined,
            armCm: data.me.measurements?.armCm || undefined,
            activityLevel: data.me.measurements?.activityLevel || undefined,
            nutritionGoal: data.me.measurements?.nutritionGoal || undefined
        })
    }, [data, form])

    const [updateProfile, { loading }] = useMutation(
        UpdateProfileDocument, {
            onCompleted() {
                toast.success("Profile updated")
            }
        }
    )

    const submit = form.handleSubmit(data => {
        updateProfile({
            variables: {
                input: {
                    profile: {
                        fullName: data.fullName,
                        gender: data.gender,
                        age: data.age,
                        bio: data.bio
                    },
                    measurements: {
                        heightCm: data.heightCm,
                        weightKg: data.weightKg,
                        goalWeightKg: data.goalWeightKg,
                        chestCm: data.chestCm,
                        waistCm: data.waistCm,
                        thighCm: data.thighCm,
                        armCm: data.armCm,
                        activityLevel: data.activityLevel,
                        nutritionGoal: data.nutritionGoal
                    }
                }
            }
        })
    })

    return (
        <div>
            <form
                onSubmit={submit}
                className="space-y-6"
            >
                <div className="flex items-center justify-between">
                    <HeadingWithIcon Icon={User}>Personal Information</HeadingWithIcon>
                    <div className="flex justify-end gap-3">
                        <Button
                            variant="outline"
                            type="button"
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="outline"
                            disabled={loading}
                        >
                            Save changes
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <GeneralInformationForm form={form} />
                    <BodyMeasurementsForm form={form} />
                </div>
            </form>
        </div>
    )
}