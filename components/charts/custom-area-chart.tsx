'use client'

import { useTheme } from 'next-themes'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface ProductChartProps {
  data: Record<string, unknown>[]
  dataKeys: string[]
  colorScheme?: string[]
  xAxisKey?: string
}

export default function CustomAreaChart({
  data,
  dataKeys,
  colorScheme,
  xAxisKey = 'month',
}: ProductChartProps) {
  const { theme } = useTheme()

  const defaultColors = [
    '#8b5cf6', // Indigo
    '#e879f9', // Pink
    '#f472b6', // Rose
    '#34d399', // Green
    '#60a5fa', // Blue
    '#fbbf24', // Yellow
  ]

  const colors = colorScheme || defaultColors

  const gridColor = theme === 'dark' ? '#374151' : '#e5e7eb'
  const textColor = theme === 'dark' ? '#9ca3af' : '#4b5563'
  const tooltipBg = theme === 'dark' ? '#1f2937' : '#ffffff'

  return (
    <div className='h-[400px]'>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke={gridColor} />
          <XAxis dataKey={xAxisKey} stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              borderColor: gridColor,
              color: textColor,
            }}
          />

          {/* Dynamically render the Area components based on dataKeys */}
          {dataKeys.map((key, index) => (
            <Area
              key={key}
              type='monotone'
              dataKey={key}
              stackId='1'
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
