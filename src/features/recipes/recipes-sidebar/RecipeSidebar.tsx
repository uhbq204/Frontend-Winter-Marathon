import { SidebarMenuAccordion } from "@/shared/components/custom-ui/sidebar-menu-accordion/SidebarMenuAccordion";
import { InputLabel } from "@/shared/components/custom-ui/with-label/InputLabel";
import { CookingPot, Search } from "lucide-react";

export function RecipeSidebar() {
    return (
        <div>
            <InputLabel
                Icon={Search}
                placeholder="Search by recipes"
            />

            <SidebarMenuAccordion
                data={[
                    {
                        name: "All Recipes",
                        icon: CookingPot,
                        items: [
                            { label: "Pasta", value: "pasta" },
                            { label: "Pizza", value: "pizza" },
                            { label: "Salad", value: "salad" },
                        ]
                    },
                    {
                        name: "Favorites",
                        icon: CookingPot,
                        items: [
                            { label: "Pasta", value: "pasta" },
                            { label: "Pizza", value: "pizza" },
                            { label: "Salad", value: "salad" },
                        ]
                    }
                ]}
            />
        </div>
    )
}