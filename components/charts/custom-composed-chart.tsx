'use client'

import {
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface SalesChartProps {
  data: Record<string, unknown>[]
  barKeys: string[]
  lineKeys?: string[]
  config?: Record<string, { label: string; color: string }>
}

export function CustomComposedChart({
  data,
  barKeys,
  lineKeys = [],
  config,
}: SalesChartProps) {
  const defaultColors = [
    '#FF8BA7', // Pink
    '#C77DFF', // Purple
    '#4361EE', // Blue
    '#4895EF', // Light Blue
    '#4CC9F0', // Cyan
  ]

  const getColor = (key: string, index: number) =>
    config && config[key]
      ? config[key].color
      : defaultColors[index % defaultColors.length]

  return (
    <ResponsiveContainer width='100%' height={400}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='quarter' />
        <YAxis />
        <Tooltip />
        <Legend />

        {barKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            stackId='a'
            fill={getColor(key, index)}
          />
        ))}

        {lineKeys.map((key, index) => (
          <Line
            key={key}
            type='monotone'
            dataKey={key}
            stroke={getColor(key, index)}
            dot={{
              fill: 'white',
              stroke: getColor(key, index),
              strokeWidth: 2,
            }}
          />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  )
}
