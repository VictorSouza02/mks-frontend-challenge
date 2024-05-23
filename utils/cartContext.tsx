import React, { createContext, useState, useContext, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

interface CartContextProps {
  cartItems: Product[];
  total: number;
  addToCart: (product: Product) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  removeItem: (name: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      const existingProduct = prevCartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (name: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (name: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (name: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.name !== name)
    );
  };

  const total = cartItems.reduce((acc, item) => {
    const itemTotal = parseFloat(item.price) * item.quantity;
    return acc + itemTotal;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
