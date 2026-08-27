import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { SiteHeader } from "@/components/site-header"

const areaData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const barData = [
  { product: "Alpha", sales: 400, profit: 240 },
  { product: "Beta", sales: 300, profit: 139 },
  { product: "Gamma", sales: 200, profit: 98 },
  { product: "Delta", sales: 278, profit: 390 },
  { product: "Epsilon", sales: 189, profit: 80 },
]

const lineData = [
  { week: "W1", a: 400, b: 240 },
  { week: "W2", a: 300, b: 139 },
  { week: "W3", a: 200, b: 980 },
  { week: "W4", a: 278, b: 390 },
  { week: "W5", a: 189, b: 480 },
  { week: "W6", a: 239, b: 380 },
  { week: "W7", a: 349, b: 430 },
]

const pieData = [
  { name: "Direct", value: 400, fill: "var(--chart-1)" },
  { name: "Search", value: 300, fill: "var(--chart-2)" },
  { name: "Social", value: 200, fill: "var(--chart-3)" },
  { name: "Referral", value: 100, fill: "var(--chart-4)" },
]

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
  sales: { label: "Sales", color: "var(--chart-1)" },
  profit: { label: "Profit", color: "var(--chart-2)" },
  a: { label: "Series A", color: "var(--chart-1)" },
  b: { label: "Series B", color: "var(--chart-2)" },
} satisfies ChartConfig

export function ChartsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle>Area</CardTitle>
            <CardDescription>Stacked area over six months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <AreaChart data={areaData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  dataKey="mobile"
                  stackId="a"
                  stroke="var(--color-mobile)"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                />
                <Area
                  dataKey="desktop"
                  stackId="a"
                  stroke="var(--color-desktop)"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bar</CardTitle>
            <CardDescription>Sales vs profit by product</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <BarChart data={barData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="product" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
                <Bar dataKey="profit" fill="var(--color-profit)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Line</CardTitle>
            <CardDescription>Two series across seven weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <LineChart data={lineData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="week" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  dataKey="a"
                  type="monotone"
                  stroke="var(--color-a)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="b"
                  type="monotone"
                  stroke="var(--color-b)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pie</CardTitle>
            <CardDescription>Traffic sources share</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={256}>
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={48}
                  outerRadius={88}
                  strokeWidth={2}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
