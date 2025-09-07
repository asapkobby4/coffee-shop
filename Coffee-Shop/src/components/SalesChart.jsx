import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const data = [
{ time: "8am", sales: 20 },
{ time: "10am", sales: 35 },
{ time: "12pm", sales: 50 },
{ time: "2pm", sales: 40 },
{ time: "4pm", sales: 60 },
{ time: "6pm", sales: 30 },
];


export default function SalesChart() {
return (
<ResponsiveContainer width="100%" height={250}>
<LineChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="time" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="sales" stroke="#f59e0b" strokeWidth={2} />
</LineChart>
</ResponsiveContainer>
);
}