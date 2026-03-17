'use client'


import { useMutation, useQuery } from "@apollo/client/react";
import { GetProfileDocument, GetProfileQuery, MeDocument, UpdateProfileDocument } from "@/__generated__/graphql";
import toast from "react-hot-toast";
import { Button } from "@/shared/components/ui/button";
import { GeneralInformationForm } from "./GeneralInformationForm";
import { BodyMeasurementsForm } from "./BodyMeasurements";
import { useForm } from "react-hook-form";
import { HeadingWithIcon } from "@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon";
import { User } from "lucide-react";
import { useEffect } from "react";
import { TProfileForm } from "../types/profile-update.types";



export function ProfileForm({ data }: { data: GetProfileQuery }) {
    const form = useForm<TProfileForm>({
        mode: "onChange",
        defaultValues: {
            email: data?.me?.email ?? '',
            avatarUrl: data?.me?.avatarUrl ?? '',
            profile: data?.me?.profile ?? {},
            measurements: data?.me?.measurements ?? {}
        }
    })


    const [updateProfile, { loading }] = useMutation(
        UpdateProfileDocument, {
            refetchQueries: [GetProfileDocument, MeDocument],
            awaitRefetchQueries: true,
            onCompleted() {
                toast.success("Profile updated")
            }
        }
    )

    const submit = form.handleSubmit(data => {
        updateProfile({
            variables: {
                data
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
                            onClick={() => form.reset()}
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