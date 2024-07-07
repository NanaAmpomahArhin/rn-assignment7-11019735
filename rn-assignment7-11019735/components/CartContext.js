import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const loadCartData = async () => {
      try {
        const storedCartData = await AsyncStorage.getItem("cartData");
        if (storedCartData) {
          setCartItem(JSON.parse(storedCartData));
        }
      } catch (error) {
        console.error("Error loading cart data", error);
      }
    };

    loadCartData();
  }, []);

  const addItemToCart = async (item) => {
    try {
      const newCart = [...cartItem, item];
      setCartItem(newCart);
      await AsyncStorage.setItem("cartData", JSON.stringify(newCart));
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  };

  const removeItemFromCart = async (itemToRemove) => {
    try {
      const newCart = cartItem.filter((item) => item !== itemToRemove);
      setCartItem(newCart);
      await AsyncStorage.setItem("cartData", JSON.stringify(newCart));
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
