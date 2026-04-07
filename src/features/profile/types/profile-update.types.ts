import { ActivityLevel, Gender, NutritionGoal, UserUpdateCustomInput } from "@/__generated__/graphql"

export type TProfileForm = Omit<UserUpdateCustomInput, 'password'>