
const Header = () => {
  return (
    <header className="p-4 text-white bg-black shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Market</h1>
        <nav className="flex gap-2">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="../pages/CartPage" className="hover:underline">Cart</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
