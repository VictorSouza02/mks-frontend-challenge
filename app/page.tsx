"use client";

import { ThemeProvider } from "styled-components";
import { myTheme } from "../utils/theme";
import Header from "@/components/header";
import Products from "../components/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/footer";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <ThemeProvider theme={myTheme}>
      <Header />

      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>

      <Footer />
    </ThemeProvider>
  );
}
