import { Controller, UseFormReturn } from "react-hook-form";
import { TProfileForm } from "../types/profile-update.types";
import { Activity, Goal, Ruler, Weight } from "lucide-react";
import Image from "next/image";
import { InputLabel } from "@/shared/components/custom-ui/with-label/InputLabel";
import { SelectLabel } from "@/shared/components/custom-ui/with-label/SelectLabel";
import { ActivityLevel, NutritionGoal } from "@/__generated__/graphql";


export function BodyMeasurementsForm({
    form
}: {
    form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
    const { register } = form

    return (
        <div className="flex items-center gap-4 rounded-xl border p-6">
            <Image
                src="/images/Female.svg"
                alt="Female"
                width={150}
                height={700}
            />
            
            <div>
                <h2 className="mb-6 text-lg font-semibold">Body Measurements</h2>

                <div className="grid grid-cols-2 gap-4">
                    <InputLabel
                        Icon={Ruler}
                        label="Height"
                        placeholder="Height cm"
                        {...register("measurements.heightCm", {
                            setValueAs: value => (value === '' ? undefined : Number(value))
                        })}
                    />

                    <InputLabel
                        Icon={Weight}
                        label="Weight"
                        placeholder="Weight kg"
                        {...register("measurements.weightKg", {
                            setValueAs: value => (value === '' ? undefined : Number(value))
                        })}
                    />

                    <InputLabel
                        Icon={Weight}
                        label="Goal weight"
                        placeholder="Goal weight kg"
                        {...register("measurements.goalWeightKg", {
                            setValueAs: value => (value === '' ? undefined : Number(value))
                        })}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Chest"
                        placeholder="Chest cm"
                        {...register("measurements.chestCm", {
                            setValueAs: value => (value === '' ? undefined : Number(value))
                        })}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Waist"
                        placeholder="Waist cm"
                        {...register("measurements.waistCm", {
                            setValueAs: value => (value === '' ? undefined : Number(value))
                        })}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Thigh"
                        placeholder="Thigh cm"
                        {...register("measurements.thighCm", {
                            setValueAs: value => (value === '' ? undefined : Number(value))
                        })}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Arm"
                        placeholder="Arm cm"
                        {...register("measurements.armCm", {
                            setValueAs: value => (value === '' ? undefined : Number(value))
                        })}
                    />

                    <Controller
                        control={form.control}
                        name="measurements.nutritionGoal"
                        render={({ field }) => (
                            <SelectLabel
                                value={field.value}
                                onChange={field.onChange}
                                Icon={Goal}
                                label="Set your nutrition goal"
                                options={[
                                    {
                                        label: "Lose weight",
                                        value: NutritionGoal.WeightLoss
                                    },
                                    {
                                        label: "Maintain weight",
                                        value: NutritionGoal.Maintenance
                                    },
                                    {
                                        label: "Gain muscle",
                                        value: NutritionGoal.MuscleGain
                                    }
                                ]}
                            />
                        )}
                    />

                    <Controller
                        control={form.control}
                        name="measurements.activityLevel"
                        render={({ field }) => (
                            <SelectLabel
                                value={field.value}
                                onChange={field.onChange}
                                Icon={Activity}
                                label="Define your activity level"
                                options={[
                                    {
                                        label: "Lightly active",
                                        value: ActivityLevel.Light
                                    },
                                    {
                                        label: "Moderately active",
                                        value: ActivityLevel.Moderate
                                    },
                                    {
                                        label: "Active",
                                        value: ActivityLevel.Active
                                    },
                                    {
                                        label: "Secondarily active",
                                        value: ActivityLevel.Secondarily
                                    },
                                    {
                                        label: "Very active",
                                        value: ActivityLevel.VeryActive
                                    }
                                ]}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    )
}