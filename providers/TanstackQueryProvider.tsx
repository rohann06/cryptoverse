"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const TanstackQueryProvider = ({ children }: { children: React.ReactNode }) => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default TanstackQueryProvider;
