import { SkeletonLoader } from "@/shared/components/custom-ui/SkeletonLoader";

export function RecipeDetailsLoader() {
    return (
        <div>
            <div className="mb-5">
                <SkeletonLoader className="h-8 w-3xs" />
            </div>

            <div className="mb-5 grid grid-cols-2 gap-5">
                <SkeletonLoader className="h-80 w-full rounded-3xl" />

                <div>
                    <SkeletonLoader count={5} className="h-10 w-xs rounded-3xl" />
                </div>
            </div>

            <div className="mb-2">
                <SkeletonLoader className="h-8 w-3xs" />
            </div>

            <div className="grid grid-cols-4 gap-5">
                <SkeletonLoader count={4} className="h-48 w-full" />
            </div>
        </div>
    )
}