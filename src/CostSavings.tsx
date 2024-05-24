import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart, Bar, BarChart, Pie, PieChart, Legend, Label, ReferenceLine, Cell, ResponsiveContainer, LabelList } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

// const data = [
//   { year: 'Year 1', cost: 50 * 35 * 1000 },
//   { year: 'Year 2', cost: 50 * 35 * 800 },
//   { year: 'Year 3', cost: 50 * 35 * 600 },
//   { year: 'Year 4', cost: 50 * 35 * 400 },
//   { year: 'Year 5', cost: 50 * 35 * 200 },
// ];

// Bar Chart Data
const barData = [
  { year: 'Year 1', withDS: 100, withoutDS: 150, improvement: ((150-100)/150 * 100).toFixed(0) },
  { year: 'Year 2', withDS: 80, withoutDS: 130, improvement: ((130-80)/130 * 100).toFixed(0) },
  { year: 'Year 3', withDS: 70, withoutDS: 120, improvement: ((120-70)/120 * 100).toFixed(0) },
  { year: 'Year 4', withDS: 60, withoutDS: 110, improvement: ((110-60)/110 * 100).toFixed(0) },
  { year: 'Year 5', withDS: 50, withoutDS: 100, improvement: ((100-50)/100 * 100).toFixed(0) },
];

// Pie Chart Data
const pieWithoutDS = [
  { name: 'Building UI', value: 30 },
  { name: 'Fixing UI Bugs', value: 40 },
  { name: 'Documentation', value: 5 },
  { name: 'Testing', value: 20 },
  { name: 'Maintenance', value: 5 },
];

const pieWithDS = [
  { name: 'Building UI', value: 50 },
  { name: 'Fixing UI Bugs', value: 20 },
  { name: 'Documentation', value: 10 },
  { name: 'Testing', value: 10 },
  { name: 'Maintenance', value: 10 },
];

// Area Chart Data
const areaData = [
  { year: 'Year 1', withDS: 100000, withoutDS: 150000 },
  { year: 'Year 2', withDS: 180000, withoutDS: 300000 },
  { year: 'Year 3', withDS: 250000, withoutDS: 450000 },
  { year: 'Year 4', withDS: 310000, withoutDS: 600000 },
  { year: 'Year 5', withDS: 360000, withoutDS: 750000 },
];

export function CostSavingsChart() {
  const dataWithSavings = areaData.map(item => ({
    ...item,
    savings: item.withoutDS - item.withDS,
  }));
  return (
    <div className='chartContainer'>
    <h2>Development Time Comparison</h2>
    <p>Consistent time savings with a unified design approach.</p>
    <BarChart
      width={500}
      height={300}
      data={barData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis label={{ value: "Development Hours", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="withoutDS" fill="#FF5733" > 
        <LabelList dataKey="withoutDS" position="top" /> 
      </Bar>
      <Bar dataKey="withDS" fill="#8884d8" >
        <LabelList 
          dataKey="improvement"
          position="top" 
          formatter={(value: any) => `-${value}%`} 
          fill="#fff"
        />
      </Bar>
      <Tooltip />
    </BarChart>
    <h2>Cumulative Cost Savings</h2>
    <p>See how a design system pays for itself over time.</p>
    <AreaChart
      width={500}
      height={400}
      data={dataWithSavings}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorWithDS" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorWithoutDS" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FF5733" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#FF5733" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#2ECC71" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="year" />
      <YAxis tick={false} label={{ value: "Cumulative Savings ($)", angle: -90, position: "outsideRight" }} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="withoutDS"
        stroke="#FF5733"
        fillOpacity={1}
        fill="url(#colorWithoutDS)"
      />
      <Area
        type="monotone"
        dataKey="withDS"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorWithDS)"
      />
      <Area
        type="monotone"
        dataKey="savings"
        stroke="#2ECC71"
        fillOpacity={1}
        fill="url(#colorSavings)"
      />
    </AreaChart>


    <h2>Task Distribution</h2>
    <p>Design systems automate repetitive tasks, allowing for more strategic work.</p>
      <ResponsiveContainer width="100%" height={400}>
      <div className='pie-charts-container' style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3 style={{ textAlign: 'center' }}>Without Design System</h3> 
          <PieChart width={300} height={300}>
            <Pie data={pieWithoutDS} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {pieWithoutDS.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
        <div>
          <h3 style={{ textAlign: 'center' }}>With a Design System</h3>
          <PieChart width={300} height={300}>
          <Pie data={pieWithDS} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
            {pieWithDS.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
        </div>
      </div>
    </ResponsiveContainer>

    </div>
  );
}