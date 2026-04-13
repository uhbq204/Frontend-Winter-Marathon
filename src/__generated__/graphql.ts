/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export enum ActivityLevel {
  Active = 'ACTIVE',
  Light = 'LIGHT',
  Moderate = 'MODERATE',
  Secondarily = 'SECONDARILY',
  VeryActive = 'VERY_ACTIVE'
}

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  user: UserModel;
};

export type BodyMeasurementModel = {
  __typename?: 'BodyMeasurementModel';
  activityLevel?: Maybe<ActivityLevel>;
  armCm?: Maybe<Scalars['Int']['output']>;
  chestCm?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  goalWeightKg?: Maybe<Scalars['Int']['output']>;
  heightCm?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  nutritionGoal?: Maybe<NutritionGoal>;
  thighCm?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  waistCm?: Maybe<Scalars['Int']['output']>;
  weightKg?: Maybe<Scalars['Int']['output']>;
};

export type BodyMeasurementPatchInput = {
  activityLevel?: InputMaybe<ActivityLevel>;
  armCm?: InputMaybe<Scalars['Int']['input']>;
  chestCm?: InputMaybe<Scalars['Int']['input']>;
  goalWeightKg?: InputMaybe<Scalars['Int']['input']>;
  heightCm?: InputMaybe<Scalars['Int']['input']>;
  nutritionGoal?: InputMaybe<NutritionGoal>;
  thighCm?: InputMaybe<Scalars['Int']['input']>;
  waistCm?: InputMaybe<Scalars['Int']['input']>;
  weightKg?: InputMaybe<Scalars['Int']['input']>;
};

export type CommentCreateInput = {
  content: Scalars['String']['input'];
  recipeId: Scalars['String']['input'];
};

export type CommentModel = {
  __typename?: 'CommentModel';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentUpdateInput = {
  content: Scalars['String']['input'];
};

export type CreateOrderInput = {
  quantity?: Scalars['Float']['input'];
  recipeIngredientId: Scalars['ID']['input'];
};

export enum Cuisine {
  Chinese = 'CHINESE',
  French = 'FRENCH',
  Indian = 'INDIAN',
  Italian = 'ITALIAN',
  Mexican = 'MEXICAN',
  Russian = 'RUSSIAN'
}

export enum DietaryPreference {
  DairyFree = 'DAIRY_FREE',
  GlutenFree = 'GLUTEN_FREE',
  Keto = 'KETO',
  LowCarb = 'LOW_CARB',
  Vegetarian = 'VEGETARIAN'
}

export enum Difficulty {
  Easy = 'EASY',
  Hard = 'HARD',
  Medium = 'MEDIUM',
  MEDIUM = "MEDIUM",
  EASY = "EASY"
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export enum HealthGoal {
  HeartHealth = 'HEART_HEALTH',
  MuscleGain = 'MUSCLE_GAIN',
  WeightLoss = 'WEIGHT_LOSS'
}

export type IngredientCreateInput = {
  content: Scalars['String']['input'];
  iconUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type IngredientModel = {
  __typename?: 'IngredientModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  unit?: Maybe<Unit>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum MealType {
  Breakfast = 'BREAKFAST',
  Dessert = 'DESSERT',
  Dinner = 'DINNER',
  Drinks = 'DRINKS',
  Lunch = 'LUNCH',
  Snack = 'SNACK'
}

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CommentModel;
  createIngredient: IngredientModel;
  createOrder: OrderModel;
  createRecipe: RecipeModel;
  deleteComment: CommentModel;
  deleteIngredientById: IngredientModel;
  deleteRecipeById: RecipeModel;
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  register: AuthResponse;
  requestPasswordReset: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  toggleLike: ToggleLikeResponse;
  updateComment: CommentModel;
  updateIngredient: IngredientModel;
  updateProfile: UserModel;
  updateRecipe: RecipeModel;
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationCreateCommentArgs = {
  input: CommentCreateInput;
};


export type MutationCreateIngredientArgs = {
  input: IngredientCreateInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateRecipeArgs = {
  input: RecipeCreateInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationDeleteIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: AuthInput;
};


export type MutationRegisterArgs = {
  data: AuthInput;
};


export type MutationRequestPasswordResetArgs = {
  data: RequestPasswordResetInput;
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationToggleLikeArgs = {
  recipeId: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  commentId: Scalars['String']['input'];
  input: CommentUpdateInput;
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['String']['input'];
  input: IngredientCreateInput;
};


export type MutationUpdateProfileArgs = {
  data: UserUpdateCustomInput;
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['String']['input'];
  input: RecipeCreateInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type NutritionFact = {
  __typename?: 'NutritionFact';
  carbohydrates: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  fats: Scalars['Float']['output'];
  fiber: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  proteins: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type NutritionFactUpdateInput = {
  carbohydrates: Scalars['Float']['input'];
  fats: Scalars['Float']['input'];
  fiber: Scalars['Float']['input'];
  proteins: Scalars['Float']['input'];
};

export enum NutritionGoal {
  Maintenance = 'MAINTENANCE',
  MuscleGain = 'MUSCLE_GAIN',
  WeightLoss = 'WEIGHT_LOSS'
}

export type OrderItemModel = {
  __typename?: 'OrderItemModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  recipeIngredient: RecipeIngredientModel;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderModel = {
  __typename?: 'OrderModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: Array<OrderItemModel>;
  orderId: Scalars['String']['output'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type ProfileModel = {
  __typename?: 'ProfileModel';
  age?: Maybe<Scalars['Int']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  fullName: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProfilePatchInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
};

export type Query = {
  __typename?: 'Query';
  Ingredients: Array<IngredientModel>;
  adminRecipes: Array<RecipeModel>;
  ingredientById: IngredientModel;
  me: UserModel;
  myOrders: Array<OrderModel>;
  newTokens: AuthResponse;
  recipeById: RecipeModel;
  recipeBySlug: RecipeModel;
  recipes: Array<RecipeModel>;
  users: Array<UserModel>;
};


export type QueryIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryRecipeBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryRecipesArgs = {
  input: RecipesQueryInput;
};

export type RecipeCreateInput = {
  calories: Scalars['Int']['input'];
  cookingTime: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  difficulty: Difficulty;
  ingredients?: InputMaybe<Array<RecipeIngredientInput>>;
  nutritionFact?: InputMaybe<NutritionFactUpdateInput>;
  recipeSteps?: InputMaybe<Array<RecipeStepInput>>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type RecipeIngredientInput = {
  ingredientId: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  unit: Unit;
};

export type RecipeIngredientModel = {
  __typename?: 'RecipeIngredientModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ingredient: IngredientModel;
  quantity: Scalars['Float']['output'];
  unit: Unit;
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeModel = {
  __typename?: 'RecipeModel';
  author: UserModel;
  authorId: Scalars['String']['output'];
  calories: Scalars['Int']['output'];
  cookingTime: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  cuisine: Cuisine;
  description: Scalars['String']['output'];
  dietaryPreference: DietaryPreference;
  difficulty: Difficulty;
  healthGoal: HealthGoal;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  mealType: MealType;
  nutritionFact?: Maybe<NutritionFact>;
  recipeIngredients?: Maybe<Array<RecipeIngredientModel>>;
  recipeSteps?: Maybe<Array<RecipeStepModel>>;
  slug: Scalars['String']['output'];
  specialOccasion: SpecialOccasion;
  tags?: Maybe<Array<RecipeTagModel>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Int']['output'];
};

/** Sorting options for recipes */
export enum RecipeSort {
  New = 'NEW',
  Popular = 'POPULAR',
  Recommended = 'RECOMMENDED'
}

export type RecipeStepInput = {
  description: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type RecipeStepModel = {
  __typename?: 'RecipeStepModel';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  recipe: RecipeModel;
  recipeId?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipeTagModel = {
  __typename?: 'RecipeTagModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RecipesQueryInput = {
  cuisine?: InputMaybe<Cuisine>;
  dietaryPreference?: InputMaybe<DietaryPreference>;
  healthGoal?: InputMaybe<HealthGoal>;
  limit?: Scalars['Int']['input'];
  mealType?: InputMaybe<MealType>;
  page?: Scalars['Int']['input'];
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<RecipeSort>;
  specialOccasion?: InputMaybe<SpecialOccasion>;
};

export type RequestPasswordResetInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SpecialOccasion {
  Anniversary = 'ANNIVERSARY',
  Birthday = 'BIRTHDAY',
  Holiday = 'HOLIDAY',
  Party = 'PARTY'
}

export type ToggleLikeResponse = {
  __typename?: 'ToggleLikeResponse';
  liked: Scalars['Boolean']['output'];
};

export enum Unit {
  Cloves = 'CLOVES',
  Gram = 'GRAM',
  Milliliter = 'MILLILITER',
  Piece = 'PIECE',
  Tablespoon = 'TABLESPOON',
  Teaspoon = 'TEASPOON'
}

export type UserModel = {
  __typename?: 'UserModel';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  measurements?: Maybe<BodyMeasurementModel>;
  profile?: Maybe<ProfileModel>;
  role: Role;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserUpdateCustomInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<BodyMeasurementPatchInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<ProfilePatchInput>;
};

export type GetNewTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewTokensQuery = { __typename?: 'Query', newTokens: { __typename?: 'AuthResponse', user: { __typename?: 'UserModel', id: string } } };

export type LoginMutationVariables = Exact<{
  data: AuthInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', user: { __typename?: 'UserModel', id: string, email: string, role: Role, avatarUrl?: string | null } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserModel', id: string, email: string, role: Role, avatarUrl?: string | null } };

export type RegisterMutationVariables = Exact<{
  data: AuthInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', user: { __typename?: 'UserModel', id: string, email: string, role: Role, avatarUrl?: string | null } } };

export type RequestPasswordResetMutationVariables = Exact<{
  data: RequestPasswordResetInput;
}>;


export type RequestPasswordResetMutation = { __typename?: 'Mutation', requestPasswordReset: boolean };

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: boolean };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', me: { __typename?: 'UserModel', id: string, email: string, avatarUrl?: string | null, profile?: { __typename?: 'ProfileModel', fullName: string, gender?: Gender | null, age?: number | null, bio?: string | null } | null, measurements?: { __typename?: 'BodyMeasurementModel', heightCm?: number | null, weightKg?: number | null, goalWeightKg?: number | null, chestCm?: number | null, waistCm?: number | null, thighCm?: number | null, armCm?: number | null, activityLevel?: ActivityLevel | null, nutritionGoal?: NutritionGoal | null } | null } };

export type UpdateProfileMutationVariables = Exact<{
  data: UserUpdateCustomInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'UserModel', id: string, email: string, avatarUrl?: string | null, profile?: { __typename?: 'ProfileModel', fullName: string, gender?: Gender | null, age?: number | null, bio?: string | null } | null, measurements?: { __typename?: 'BodyMeasurementModel', heightCm?: number | null, weightKg?: number | null, goalWeightKg?: number | null, chestCm?: number | null, waistCm?: number | null, thighCm?: number | null, armCm?: number | null, activityLevel?: ActivityLevel | null, nutritionGoal?: NutritionGoal | null } | null } };

export type GetRecipesQueryVariables = Exact<{
  input: RecipesQueryInput;
}>;


export type GetRecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'RecipeModel', image: string, title: string, description: string, slug: string, calories: number, cookingTime: number, difficulty: Difficulty, likes?: number | null, views: number, mealType: MealType }> };


export const GetNewTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetNewTokensQuery, GetNewTokensQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const RequestPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestPasswordResetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResetPasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"measurements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heightCm"}},{"kind":"Field","name":{"kind":"Name","value":"weightKg"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeightKg"}},{"kind":"Field","name":{"kind":"Name","value":"chestCm"}},{"kind":"Field","name":{"kind":"Name","value":"waistCm"}},{"kind":"Field","name":{"kind":"Name","value":"thighCm"}},{"kind":"Field","name":{"kind":"Name","value":"armCm"}},{"kind":"Field","name":{"kind":"Name","value":"activityLevel"}},{"kind":"Field","name":{"kind":"Name","value":"nutritionGoal"}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateCustomInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"measurements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heightCm"}},{"kind":"Field","name":{"kind":"Name","value":"weightKg"}},{"kind":"Field","name":{"kind":"Name","value":"goalWeightKg"}},{"kind":"Field","name":{"kind":"Name","value":"chestCm"}},{"kind":"Field","name":{"kind":"Name","value":"waistCm"}},{"kind":"Field","name":{"kind":"Name","value":"thighCm"}},{"kind":"Field","name":{"kind":"Name","value":"armCm"}},{"kind":"Field","name":{"kind":"Name","value":"activityLevel"}},{"kind":"Field","name":{"kind":"Name","value":"nutritionGoal"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const GetRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecipes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RecipesQueryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recipes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"cookingTime"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"views"}},{"kind":"Field","name":{"kind":"Name","value":"mealType"}}]}}]}}]} as unknown as DocumentNode<GetRecipesQuery, GetRecipesQueryVariables>;