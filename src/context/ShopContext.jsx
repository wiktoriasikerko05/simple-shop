import { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // 1. Dodawanie do koszyka
  const addToCart = (product, size = 'M') => {
    setCart((prevCart) => {
    
      const existingItem = prevCart.find((item) => item.id === product.id && item.selectedSize === size);
      
      if (existingItem) {
        return prevCart.map((item) =>
          (item.id === product.id && item.selectedSize === size)
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
    
      return [...prevCart, { ...product, quantity: 1, selectedSize: size }];
    });
  };

  // 2. Usuwanie z koszyka
  const removeFromCart = (id, size) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.selectedSize === size)));
  };

  // 3. Ulubione
  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isFavorite = prev.find(item => item.id === product.id);
      if (isFavorite) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // 4. Konwerter Walut
  const formatPrice = (priceInUSD) => {
  
    const priceInPLN = Math.round(priceInUSD * 4.1); 
    
    return new Intl.NumberFormat('pl-PL', { 
      style: 'currency', 
      currency: 'PLN',
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    }).format(priceInPLN);
  };


  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <ShopContext.Provider value={{ 
      cart, addToCart, removeFromCart, cartTotal, cartCount,
      favorites, toggleFavorite, formatPrice 
    }}>
      {children}
    </ShopContext.Provider>
  );
};


export const useShop = () => useContext(ShopContext);
