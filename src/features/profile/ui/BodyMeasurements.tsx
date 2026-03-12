import { UseFormReturn } from "react-hook-form";
import { IProfileForm } from "../types/profile-update.types";
import { Ruler, Weight } from "lucide-react";
import { InputLabel } from "@/shared/components/custom-ui/input-label/InputLabel";


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
                <InputLabel
                    Icon={Ruler}
                    label="Height"
                    placeholder="Height cm"
                    {...register("heightCm")}
                />

                <InputLabel
                    Icon={Weight}
                    label="Weight"
                    placeholder="Weight kg"
                    {...register("weightKg")}
                />

                <InputLabel
                    Icon={Weight}
                    label="Goal weight"
                    placeholder="Goal weight kg"
                    {...register("goalWeightKg")}
                />
                <InputLabel
                    Icon={Ruler}
                    label="Chest"
                    placeholder="Chest cm"
                    {...register("chestCm")}
                />
                <InputLabel
                    Icon={Ruler}
                    label="Waist"
                    placeholder="Waist cm"
                    {...register("waistCm")}
                />
                <InputLabel
                    Icon={Ruler}
                    label="Thigh"
                    placeholder="Thigh cm"
                    {...register("thighCm")}
                />
                <InputLabel
                    Icon={Ruler}
                    label="Arm"
                    placeholder="Arm cm"
                    {...register("armCm")}
                />
            </div>
        </div>
    )
}