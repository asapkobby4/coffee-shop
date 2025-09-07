import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import NewOrder from "./pages/NewOrder";
import Menu from "./pages/Menu";
import Inventory from "./pages/Inventory";
import Employees from "./pages/Employees";
import Reports from "./pages/Reports";


export default function App() {
return (
<div className="flex h-screen">
<Sidebar />
<div className="flex flex-col flex-1">
<Topbar />
<main className="p-6 overflow-y-auto">
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/orders" element={<Orders />} />
<Route path="/new-order" element={<NewOrder />} />
<Route path="/menu" element={<Menu />} />
<Route path="/inventory" element={<Inventory />} />
<Route path="/employees" element={<Employees />} />
<Route path="/reports" element={<Reports />} />
</Routes>
</main>
</div>
</div>
);
}