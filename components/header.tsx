import { ShoppingCart } from "lucide-react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useCart } from "@/utils/cartContext";

interface HeaderProps {
  toggleSidebar: () => void;
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 61px;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
`;

const TitlesContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  line-height: 19px;
  text-align: left;
  margin-top: 6px;
`;

const CartButton = styled(motion.button)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: white;
  color: black;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
`;

const CartAmount = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 19px;
  text-align: left;
`;

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { cartItems } = useCart();

  return (
    <HeaderContainer>
      <HeaderContent>
        <TitlesContainer>
          <Title>MKS</Title>
          <Subtitle>Sistemas</Subtitle>
        </TitlesContainer>

        <CartButton
          onClick={toggleSidebar}
          whileHover={{
            scale: 0.97,
            opacity: 0.8,
            transition: { duration: 0.3 },
          }}
        >
          <ShoppingCart />

          <CartAmount>{cartItems.length}</CartAmount>
        </CartButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
