import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">☕ CoffeeShop</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:bg-gray-800 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/orders" className="hover:bg-gray-800 p-2 rounded">
          Orders
        </Link>
        <Link to="/new-order" className="hover:bg-gray-800 p-2 rounded">
          New Order
        </Link>
        <Link to="/menu" className="hover:bg-gray-800 p-2 rounded">
          Menu
        </Link>
        <Link to="/inventory" className="hover:bg-gray-800 p-2 rounded">
          Inventory
        </Link>
        <Link to="/employees" className="hover:bg-gray-800 p-2 rounded">
          Employees
        </Link>
        <Link to="/reports" className="hover:bg-gray-800 p-2 rounded">
          Reports
        </Link>
      </nav>
    </div>
  );
}
