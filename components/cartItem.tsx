import { useCart } from "@/utils/cartContext";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface CartItemProps {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 100px));
  align-items: center;
  gap: 20px;
  background: white;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  height: 90px;
  position: relative;
`;

const ItemPhoto = styled.img<{ src: string; alt?: string }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
`;

const ItemName = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
`;

const ItemAmountContainerTotal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemAmountLabel = styled.span`
  position: absolute;
  top: -12px;
  font-size: 8px;
  font-weight: 400;
  margin-left: 8px;
  color: black;
`;

const ItemAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  padding: 4px 0px;
  border: 1px solid #bfbfbf;
  overflow: hidden;
`;

const ItemAmount = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-align: center;
  padding: 0px 8px;
  border: 0px solid #bfbfbf;
  border-left-width: 1px;
  border-right-width: 1px;
`;

const ItemAmountButton = styled(motion.button)`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  color: black;
  border: 0px;
  width: 40px;
  cursor: pointer;
  background: white;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
  color: black;
`;

const RemoveItemButton = styled(motion.button)`
  background-color: black;
  border: none;
  color: white;
  font-size: 16px;
  padding: 6px 8px 4px 8px;
  cursor: pointer;
  border-radius: 9999px;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  photo,
  price,
  quantity,
}) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const handleIncrease = () => {
    increaseQuantity(name);
  };

  const handleDecrease = () => {
    decreaseQuantity(name);
  };

  const handleRemove = () => {
    removeItem(name);
  };

  return (
    <CartItemContainer>
      <ItemPhoto src={photo} alt={name} />

      <ItemName>{name}</ItemName>

      <ItemAmountContainerTotal>
        <ItemAmountLabel>Qtd:</ItemAmountLabel>

        <ItemAmountContainer>
          <ItemAmountButton
            onClick={handleDecrease}
            whileHover={{
              opacity: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            -
          </ItemAmountButton>
          <ItemAmount>{quantity}</ItemAmount>
          <ItemAmountButton
            onClick={handleIncrease}
            whileHover={{
              opacity: 0.8,
              transition: { duration: 0.3 },
            }}
          >
            +
          </ItemAmountButton>
        </ItemAmountContainer>
      </ItemAmountContainerTotal>

      <ItemPrice>
        R$
        {(Number(price) * quantity).toLocaleString("pt-BR", {
          maximumFractionDigits: 2,
        })}
      </ItemPrice>

      <RemoveItemButton
        onClick={handleRemove}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
      >
        X
      </RemoveItemButton>
    </CartItemContainer>
  );
};

export default CartItem;
