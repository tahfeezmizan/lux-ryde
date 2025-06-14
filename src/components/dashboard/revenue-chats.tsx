"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { CalendarClock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"


const data = [
  { month: "Jan", value: 48 },
  { month: "Feb", value: 32 },
  { month: "Mar", value: 63 },
  { month: "Apr", value: 42 },
  { month: "May", value: 78 },
  { month: "Jun", value: 24 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 48 },
  { month: "Sep", value: 32 },
  { month: "Oct", value: 58 },
  { month: "Nov", value: 45 },
  { month: "Dec", value: 68 },
]

export default function RevenueChart() {
  const [period, setPeriod] = useState("yearly")


  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#D1B574",
    },
  }

  return (
    <Card className="w-full max-w-6xl mx-auto bg-[#2F2D2E] border-gray-800 max-h-screen ">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="font-sans font-medium text-xl text-white">Revenue & Performance Graphs</CardTitle>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[120px] bg-gray-900/50 border-gray-700 text-[#D1B574]">
            <CalendarClock className="mr-2 h-4 w-4 text-[#D1B574]" />
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700">
            <SelectItem value="yearly" className="text-white">
              Yearly
            </SelectItem>
            <SelectItem value="quarterly" className="text-white ">
              Quarterly
            </SelectItem>
            <SelectItem value="monthly" className="text-white">
              Monthly
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[300px] w-full">
          <ChartContainer
  config={chartConfig}
  className="min-h-[300px] w-full"
  style={{
    width: '100%',
    height: '100%',
  }}
>
            <BarChart
              data={data.map((item) => ({ month: item.month, revenue: item.value }))}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              accessibilityLayer
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#333" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#FF0000" }} />
              <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#999",
                strokeWidth: 2,
                stroke: "#999",
                fontSize: 14
              }}
              tickFormatter={(value) => `${value}`}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar
              dataKey="revenue"
              fill={chartConfig.revenue.color}
              radius={[2, 2, 0, 0]}
              barSize={30}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

