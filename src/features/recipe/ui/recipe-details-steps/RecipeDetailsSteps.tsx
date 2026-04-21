import { GetRecipeBySlugQuery } from "@/__generated__/graphql"
import { CookingPot } from "lucide-react"
import Image from "next/image"



interface Props {
    steps: GetRecipeBySlugQuery["recipeBySlug"]["recipeSteps"]
}

export function RecipeDetailsSteps({ steps }: Props) {
    return (
        <div className="mt-6">
            <div className="mb-3 flex items-center">
                <CookingPot className="mr-1.5 opacity-70" />
                <h2 className="text-lg font-semibold text-gray-800">
                    Step-by-step preparation Instructions:
                </h2>
            </div>

            <div className="grid grid-cols-4 gap-5">
                {steps?.map((step, index) => (
                    <div key={step?.id}>
                        <div className="relative mb-2 aspect-video w-full overflow-hidden rounded-3xl">
                            <Image
                                src={step?.image || ""}
                                alt={step?.title || ""}
                                fill
                                className="object-cover"
                                draggable={false}
                            />
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">
                            Step {index + 1} of {steps?.length}
                        </h3>
                        <h4 className="text-md font-semibold text-gray-800">
                            {step?.title}
                        </h4>
                        <p className="text-sm text-gray-600">{step?.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}