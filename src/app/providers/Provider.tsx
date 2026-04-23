'use client'

import { getApolloClient } from "@/shared/lib/apollo/apollo.client";
import { ApolloProvider } from "@apollo/client/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "react-hot-toast";


const apollo = getApolloClient()

export function Provider({ children }: { children: React.ReactNode }) {
    return (
        <NuqsAdapter>
            <ApolloProvider client={apollo}>{children}
                <Toaster 
                    position="top-center"
                    containerClassName="mt-14 font-mono font-medium"
                />
            </ApolloProvider>
        </NuqsAdapter>
    )
}