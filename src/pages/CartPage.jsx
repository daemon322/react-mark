import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow h-screen p-4">
        <h1 className="mb-6 text-2xl font-bold text-center">Carrito de Compras</h1>
        <Cart cartItems={cartItems} onRemoveItem={(index) =>
          setCartItems((prevItems) => prevItems.filter((_, i) => i !== index))
        } />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
