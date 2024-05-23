"use client";

import { ThemeProvider } from "styled-components";
import { myTheme } from "../utils/theme";
import Header from "@/components/header";
import Products from "../components/products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/footer";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { CartProvider } from "@/utils/cartContext";

export default function Home() {
  const queryClient = new QueryClient();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <CartProvider>
        <Header toggleSidebar={toggleSidebar} />

        <QueryClientProvider client={queryClient}>
          <Products />
        </QueryClientProvider>

        <Footer />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </CartProvider>
    </ThemeProvider>
  );
}
