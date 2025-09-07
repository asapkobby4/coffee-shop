import useStore from "../../store/useStore";

export default function Orders() {
  const { orders } = useStore();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const total = order.items.reduce((sum, item) => sum + item.price, 0);

            return (
              <div
                key={order.id}
                className="border p-4 rounded-lg shadow bg-white"
              >
                <h3 className="font-semibold">Order #{order.id}</h3>
                <p className="text-sm text-gray-500">
                  Placed at: {order.createdAt}
                </p>

                <ul className="mt-2 list-disc list-inside">
                  {order.items.map((item, i) => (
                    <li key={i}>
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>

                <p className="mt-2 font-semibold">Total: ${total.toFixed(0)}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
