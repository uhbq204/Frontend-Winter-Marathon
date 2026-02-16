'use client'

import { getApolloClient } from "@/shared/lib/apollo/apollo.client";
import { ApolloProvider } from "@apollo/client/react";
import { Toaster } from "react-hot-toast";

const apllo = getApolloClient()

export function Provider({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={apllo}>
        {children}
        <Toaster position="top-center" />
        </ApolloProvider>
}