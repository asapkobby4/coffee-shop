import menuData from "../data/menu.json";
import useStore from "../../store/useStore";

export default function NewOrder() {
  const { cart, addToCart, checkout } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Menu Section */}
      <div className="col-span-2">
        <h2 className="text-2xl font-bold mb-4">New Order</h2>
        <div className="grid grid-cols-2 gap-4">
          {menuData.map((item) => (
            <button
              key={item.id}
              onClick={() => addToCart(item)}
              className="p-4 bg-white shadow rounded hover:bg-yellow-50"
            >
              {item.name} - ${item.price}
            </button>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-bold mb-2">Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            <ul className="space-y-1">
              {cart.map((c, i) => (
                <li key={i}>
                  {c.name} - ${c.price}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-semibold">
              Total: ${total.toFixed(0)}
            </p>
            <button
              onClick={checkout}
              className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
