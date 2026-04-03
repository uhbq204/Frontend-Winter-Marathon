import { Button } from "@/shared/components/ui/button";
import { Plus, Utensils } from "lucide-react";
import Image from "next/image";


export function RecipesBanners() {
    return (
        <div className="mb-5 grid grid-cols-[2.5fr_1fr] gap-5">
            <div className="from-primary-dark to-primary relative rounded-3xl bg-linear-to-r px-4 py-4 text-white">
                <div className="absolute -bottom-2 -left-4.5">
                    <Image
                        src="/emotions/burger.png"
                        alt="Burger"
                        width={170}
                        height={140}
                        className="h-auto w-35 object-contain"
                        draggable={false}
                        priority
                    />
                </div>

                <div className="flex items-start gap-6 absolute top-4 bottom-4 right-4">
                    <div className="min-w-0">
                        <h2 className="text-3xl leading-none font-black italic">Got a Recipe That Rocks?</h2>

                        <p className="mt-1 text-sm text-white/80">
                            Share It &amp; Shine! Your recipe might just become the next big hit!
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {[
                                'Gain Recognition',
                                'Inspire Others',
                                'Showcase Your Skills'
                            ].map(item => (
                                <span
                                    key={item}
                                    className="rounded-3xl bg-white/12 px-3 py-1 text-sm font-medium backdrop-blur-xs">{item}</span>
                            ))}
                        </div>
                    </div>

                    <Button
                        type="button"
                        variant="soft"
                        className="shrink-0 rounded-3xl bg-white px-5 text-black hover:bg-white/90"
                    >
                        <Plus />
                        Add Recipe        
                    </Button>
                </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-white px-5 py-4">
                <div className="flex items-center gap-2 font-semibold text-black text-lg">
                    <Utensils
                        size={20}
                        className="opacity-60"
                    />
                    <span>Your Recipes</span>
                </div>

                <div className="mt-6 flex items-end justify-between gap-4">
                    <div className="flex items-end gap-2">
                        <span className="text-4xl leading-none font-black tracking-[-0.04em] italic">12</span>
                        <span className="text-black/45">Created</span>
                    </div>

                    <div className="flex -space-x-3">
                        {[
                            '/images/default-avatar.png',
                            '/images/default-avatar.png',
                            '/images/default-avatar.png',
                            '/images/default-avatar.png'
                        ].map((src, index) => (
                            <div
                                key={src + index}
                                className="relative size-9 overflow-hidden rounded-full border-2 border-white bg-white"
                            >
                                <Image
                                    src={src}
                                    alt={`Recipe author ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    draggable={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}