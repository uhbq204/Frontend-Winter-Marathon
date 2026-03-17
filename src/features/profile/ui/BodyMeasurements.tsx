import { UseFormReturn } from "react-hook-form";
import { TProfileForm } from "../types/profile-update.types";
import { Ruler, Weight } from "lucide-react";
import { InputLabel } from "@/shared/components/custom-ui/input-label/InputLabel";
import Image from "next/image";


export function BodyMeasurementsForm({
    form
}: {
    form: UseFormReturn<TProfileForm, unknown, TProfileForm>
}) {
    const { register } = form

    return (
        <div className="flex items-center gap-4 rounded-xl border bg-white p-6">
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
                        {...register("measurements.heightCm")}
                    />

                    <InputLabel
                        Icon={Weight}
                        label="Weight"
                        placeholder="Weight kg"
                        {...register("measurements.weightKg")}
                    />

                    <InputLabel
                        Icon={Weight}
                        label="Goal weight"
                        placeholder="Goal weight kg"
                        {...register("measurements.goalWeightKg")}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Chest"
                        placeholder="Chest cm"
                        {...register("measurements.chestCm")}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Waist"
                        placeholder="Waist cm"
                        {...register("measurements.waistCm")}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Thigh"
                        placeholder="Thigh cm"
                        {...register("measurements.thighCm")}
                    />
                    <InputLabel
                        Icon={Ruler}
                        label="Arm"
                        placeholder="Arm cm"
                        {...register("measurements.armCm")}
                    />
                </div>
            </div>
        </div>
    )
}