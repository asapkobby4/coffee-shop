import menuData from "../data/menu.json";


export default function Menu() {
return (
<div>
<h2 className="text-2xl font-bold mb-4">Menu</h2>
<ul className="space-y-2">
{menuData.map((item) => (
<li key={item.id} className="bg-white p-3 rounded shadow">
{item.name} - ${item.price}
</li>
))}
</ul>
</div>
);
}