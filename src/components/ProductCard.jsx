
const ProductCard = ({ product, onAddToCart, onImageClick }) => {
    const handleAddClick = () => {
      onAddToCart(product); // Llama a la función para agregar el producto al carrito
    };
  
    return (
      <div className="flex flex-col justify-between w-56 p-4 text-white rounded-md shadow-md h-96">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-40 mb-4 rounded-md cursor-pointer dropimage"
          onClick={() => onImageClick(product)}
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p>{product.category}</p>
        <p className="font-bold">Price: S/{product.price}</p>
        <p>{product.soles}</p>
        <button
          className="px-4 py-2 mt-4 text-white bg-green-600 rounded-md"
          onClick={handleAddClick}
        >
          Agregar al carrito
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  