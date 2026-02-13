'use client'

import { getApolloClient } from "@/shared/lib/apollo/apollo.client";
import { ApolloProvider } from "@apollo/client/react";

const apllo = getApolloClient()

export function Provider({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={apllo}>{children}</ApolloProvider>
}