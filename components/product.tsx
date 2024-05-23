import { ShoppingBag } from "lucide-react";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useCart } from "@/utils/cartContext";

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  height: 300px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 150px;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const CardPhoto = styled.img<{ src: string; alt?: string }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 125px;
  pointer-events: none;
`;

const HorizontalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: black;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`;

const Price = styled.span`
  width: min;
  height: 30px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  background: #373737;
  border-radius: 5px;
  padding: 8px;
  color: white;
`;

const Description = styled.span`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  text-align: left;
  height: 30px;
`;

const BuyButton = styled(motion.button)`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  transition: filter 500ms ease;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  margin-top: auto;
`;

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  photo,
  price,
}) => {
  const { addToCart } = useCart();

  let formattedPrice =
    "R$" +
    Number(price).toLocaleString("pt-BR", {
      maximumFractionDigits: 0,
    });

  const handleAddToCart = () => {
    addToCart({ id, name, photo, price, quantity: 1 });
  };

  return (
    <Card>
      <CardHeader>
        <CardPhoto src={photo} alt={name} />
      </CardHeader>
      <CardBody>
        <HorizontalDiv>
          <Title>{name}</Title>

          <Price>{formattedPrice}</Price>
        </HorizontalDiv>

        <Description>{description}</Description>
      </CardBody>
      <BuyButton
        onClick={handleAddToCart}
        whileHover={{
          opacity: 0.8,
          transition: { duration: 0.3 },
        }}
      >
        <ShoppingBag size={16} strokeWidth={3} />
        Comprar
      </BuyButton>
    </Card>
  );
};

export default Product;
