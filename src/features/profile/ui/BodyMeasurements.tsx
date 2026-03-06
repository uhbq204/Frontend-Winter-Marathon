import { UseFormReturn } from "react-hook-form";
import { IProfileForm } from "../types/profile-update.types";
import { Ruler, Weight } from "lucide-react";
import { Input } from "@/shared/components/ui/input";


export function BodyMeasurementsForm({
    form
}: {
    form: UseFormReturn<IProfileForm, unknown, IProfileForm>
}) {
    const { register } = form

    return (
        <div className="rounded-xl border bg-white p-6">
            <h2 className="mb-6 text-lg font-semibold">Body Measurements</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                    <Ruler
                        size={16}
                        className="absolute top-3 left-3 opacity-50"
                    />
                    <Input
                        className="pl-9"
                        placeholder="Height cm"
                        {...register("heightCm")}
                    />
                </div>

                <div className="relative">
                    <Weight
                        size={16}
                        className="absolute top-3 left-3 opacity-50"
                    />
                    <Input
                        className="pl-9"
                        placeholder="Weight kg"
                        {...register("weightKg")}
                    />
                </div>

                <Input
                    placeholder="Goal weight"
                    {...register("goalWeightKg")}
                />
                <Input
                    placeholder="Chest cm"
                    {...register("chestCm")}
                />
                <Input
                    placeholder="Waist cm"
                    {...register("waistCm")}
                />
                <Input
                    placeholder="Thigh cm"
                    {...register("thighCm")}
                />
                <Input
                    placeholder="Arm cm"
                    {...register("armCm")}
                />
            </div>
        </div>
    )
}