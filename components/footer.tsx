import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  color: black;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>
        MKS sistemas © Todos os direitos reservados &#40;Víctor Souza&#41;
      </span>
    </FooterContainer>
  );
};

export default Footer;
