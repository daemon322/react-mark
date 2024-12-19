import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { products } from "../data/products";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [saleDetails, setSaleDetails] = useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSaleModalOpen, setIsSaleModalOpen] = useState(false);

  // Estados para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Número de productos por página

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    setIsCartModalOpen(true);
  };

  const handleCheckout = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSaleDetails({
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
    });
    setCartItems([]);
    localStorage.removeItem("cartItems");
    setIsCartModalOpen(false);
    setIsSaleModalOpen(true); // Abrir modal del resumen de venta
  };

  const handlePrint = () => {
    if (saleDetails) {
      const printWindow = window.open("", "PRINT", "height=600,width=800");
      printWindow.document.write(
        "<html><head><title>Resumen de Venta</title></head><body>"
      );
      printWindow.document.write("<h1>Mini Market DREFAB</h1>");
      printWindow.document.write(
        `<div>${saleDetails.items
          .map(
            (item) =>
              `<p>${item.name} (${item.quantity}) - $${item.price.toFixed(
                2
              )} c/u</p>`
          )
          .join("")}</div>`
      );
      printWindow.document.write(
        `<p><strong>Total:</strong> $${saleDetails.total.toFixed(2)}</p>`
      );
      printWindow.document.write(
        `<p><strong>Fecha:</strong> ${saleDetails.date}</p>`
      );
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;

    const matchesSearchQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearchQuery;
  });

  // Productos paginados
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <Header />
      <main className="flex flex-wrap pt-5 bg-sky-950 max-md:flex-wrap">
        <section className="w-full">
          {/* Filtro de Categorías */}
          <CategoryFilter
            categories={[
              "Todos",
              "Verduras",
              "Frutas",
              "Condimentos",
              "Conservas y Enlatados",
              "Lácteos",
              "Bebidas",
              "Golosinas",
              "Plasticos",
              "Amigurumi",
              "Productos Limpieza",
              "Higiene Personal",
              "Mascotas",
            ]}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          {/* Buscador */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              className="px-4 py-2 border rounded-md w-80"
              placeholder="Buscar por nombre o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Productos filtrados con paginación */}
          <div className="flex flex-wrap justify-center w-full gap-5 p-4">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onImageClick={() => handleImageClick(product.image)}
              />
            ))}
          </div>
          {/* Paginación */}
          <div className="flex justify-center pb-4 mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-4 py-2 mx-1 rounded-md ${
                  i + 1 === currentPage
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-400 text-gray-700"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
      <ImageSlider />
      {/* Modal del carrito */}
      {isCartModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={(e) => {
            if (e.target.classList.contains("z-50")) setIsCartModalOpen(false);
          }}
        >
          <div
            className="w-11/12 p-6 bg-white rounded-lg md:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón visible en pantallas pequeñas */}
            <button
              className="block w-full p-2 mb-4 text-white bg-red-600 rounded-md md:hidden"
              onClick={() => setIsCartModalOpen(false)}
            >
              Cerrar
            </button>
            <h2 className="mb-4 text-xl font-bold">Productos Seleccionados</h2>
            <Cart
              cartItems={cartItems}
              onRemoveItem={(index) =>
                setCartItems((prevItems) =>
                  prevItems.filter((_, i) => i !== index)
                )
              }
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      )}
      {/* Modal para visualizar la imagen */}
      {isImageModalOpen && (
        <div
          className="fixed top-0 left-0 flex justify-center w-full h-full py-2 bg-black bg-opacity-50"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="p-4 m-auto bg-transparent rounded-lg h-2/3 md:h-full">
            <img
              src={selectedImage}
              alt="Producto"
              className="object-contain w-full h-full md:object-cover md:w-full dropimage"
            />
          </div>
        </div>
      )}
      {/* Modal del resumen de venta */}
      {isSaleModalOpen && (
        <div
          className="fixed top-0 left-0 flex justify-center w-full h-full py-2 bg-black bg-opacity-50"
          onClick={(e) => {
            if (e.target.classList.contains("z-50")) setIsSaleModalOpen(false);
          }}
        >
          <div
            className="relative flex flex-col justify-between w-11/12 p-8 m-auto bg-white rounded-lg shadow-lg md:w-1/2 h-5/6 lg:h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-red-700"
              onClick={() => setIsSaleModalOpen(false)}
            >
              &#x2715;
            </button>
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
              Resumen de la Venta
            </h2>
            <ul className="space-y-3 overflow-y-scroll h-96">
              {saleDetails.items.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between px-3 py-2 bg-gray-100 rounded-lg"
                >
                  <span>
                    {item.name} ({item.quantity})
                  </span>
                  <span className="font-semibold text-green-600">
                    ${item.price.toFixed(2)} c/u
                  </span>
                </li>
              ))}
            </ul>
            <div className="px-3 py-2 mb-4 bg-gray-200 rounded-lg">
              <p className="flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-green-700">
                  ${saleDetails.total.toFixed(2)}
                </span>
              </p>
            </div>
            <p className="mb-4 text-sm text-center text-gray-500">
              Fecha de la venta: {saleDetails.date}
            </p>
            <button
              className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handlePrint}
            >
              Imprimir Resumen
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
