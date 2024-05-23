import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import Product from "@/components/product";
import { ProductSkeleton } from "@/components/productSkeleton";
import { fetchProducts } from "@/utils/getProducts";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  products: Product[];
  count: number;
}

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px;
  justify-content: center;
  background-color: white;
  min-height: calc(100dvh - 98px);
`;

const ProductsContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 16px;
  padding: 16px 0px;
  grid-template-columns: repeat(1, minmax(0, 100%));

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 250px));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 250px));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 250px));
  }
`;

const Products: React.FC = () => {
  const { data, error, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ["products"],
    queryFn: () => {
      return new Promise<ApiResponse>((resolve, reject) => {
        // Atraso para poder ver o skeleton
        setTimeout(() => {
          fetchProducts().then(resolve).catch(reject);
        }, 2000);
      });
    },
  });

  if (isLoading) {
    return (
      <MainContainer>
        <ProductsContainer>
          {[...Array(8)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </ProductsContainer>
      </MainContainer>
    );
  }

  if (error || !data) {
    return null;
  }

  return (
    <MainContainer>
      <ProductsContainer>
        {data.products.map((product: Product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            brand={product.brand}
            description={product.description}
            photo={product.photo}
            price={product.price}
            createdAt={product.createdAt}
            updatedAt={product.updatedAt}
          />
        ))}
      </ProductsContainer>
    </MainContainer>
  );
};

export default Products;
