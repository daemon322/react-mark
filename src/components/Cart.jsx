const Cart = ({ cartItems, onRemoveItem, onCheckout }) => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
    return (
      <div>
        {cartItems.length > 0 ? (
          <>
            <ul className="p-2 overflow-y-scroll carrito2">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-1">
                    <img
                      src={item.image}
                      alt="image"
                      className="object-cover w-10 h-12"
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio S/{item.price * item.quantity}</p>
                    </div>
                  </div>
                  <button
                    className="p-2 text-white bg-red-500 rounded-md"
                    onClick={() => onRemoveItem(index)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="font-bold">Total: ${total.toFixed(2)}</p>
              <button
                className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md"
                onClick={onCheckout}
              >
                Realizar venta
              </button>
            </div>
          </>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
    );
  };
  
  export default Cart;
  