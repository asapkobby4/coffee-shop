import SalesChart from "../components/SalesChart";


export default function Dashboard() {
return (
<div>
<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-4 bg-white rounded shadow">
<h3 className="font-bold mb-2">Daily Sales</h3>
<SalesChart />
</div>
<div className="p-4 bg-white rounded shadow">
<h3 className="font-bold mb-2">Quick Stats</h3>
<ul className="space-y-1">
<li>☕ Orders today: 42</li>
<li>💵 Revenue: $230</li>
<li>📦 Low stock items: 3</li>
</ul>
</div>
</div>
</div>
);
}