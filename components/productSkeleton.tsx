import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Card = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  height: 300px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 2px 8px 0px #00000022;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const CardHeader = styled.div`
  display: grid;
  height: 150px;
  place-items: center;
  background-color: #d1d5db;
`;

const HorizontalSkeletons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkeletonElement = styled.div<{ height: string; width: string }>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 9999px;
  background-color: #d1d5db;
`;

const BuyButton = styled.div`
  height: 47px;
  width: 100%;
  background-color: #d1d5db;
  margin-top: 15px;
`;

export function ProductSkeleton() {
  return (
    <Card>
      <CardHeader />
      <CardBody>
        <HorizontalSkeletons>
          <SkeletonElement height="1.5rem" width="124px" />
          <SkeletonElement height="1.5rem" width="51px" />
        </HorizontalSkeletons>
        <SkeletonElement height="0.5rem" width="80%" />
        <SkeletonElement height="0.5rem" width="65%" />
        <SkeletonElement height="0.5rem" width="50%" />
      </CardBody>
      <BuyButton />
    </Card>
  );
}
