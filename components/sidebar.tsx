import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/utils/cartContext";
import CartItem from "@/components/cartItem";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  min-height: 100dvh;
  max-height: 100dvh;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-size: 16px;
  padding: 6px 6px 4px 6px;
  cursor: pointer;
  border-radius: 9999px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  width: 100%;
`;

const Total = styled.p`
  color: white;
  font-size: 20px;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
`;

const TotalValue = styled.p`
  color: white;
  font-size: 20px;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
`;

const CheckoutButton = styled(motion.button)`
  background-color: black;
  color: white;
  border: none;
  padding: 20px 10px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
`;

const CartItemContainer = styled.div`
  flex: 1;
  padding: 16px;
`;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { cartItems, total } = useCart();

  return (
    <SidebarContainer
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      transition={{ duration: 0.3, type: "tween" }}
    >
      <Header>
        <Title>
          Carrinho <br /> de Compras
        </Title>

        <CloseButton onClick={toggleSidebar}>
          <X size={24} />
        </CloseButton>
      </Header>

      <CartItemContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              photo={item.photo}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center" }}>
            Seu carrinho está vazio.
          </p>
        )}
      </CartItemContainer>

      <Footer>
        <TotalContainer>
          <Total>Total: </Total>
          <TotalValue>
            R${total.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}
          </TotalValue>
        </TotalContainer>

        <CheckoutButton
          whileHover={{
            opacity: 0.8,
            transition: { duration: 0.3 },
          }}
        >
          Finalizar Compra
        </CheckoutButton>
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
