'use client'

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface PopulationChartProps {
  data: { name: string; value: number }[]
  colors?: string[]
  showLegend?: boolean
  showTooltip?: boolean
  outerRadius?: number
}

export function CustomPieChart({
  data,
  colors,
  showLegend = true,
  showTooltip = true,
  outerRadius = 80,
}: PopulationChartProps) {
  const defaultColors = ['#f472b6', '#C77DFF', '#4361EE', '#A5B4FC', '#818CF8']

  const appliedColors = colors || defaultColors

  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          outerRadius={outerRadius}
          dataKey='value'
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={appliedColors[index % appliedColors.length]}
            />
          ))}
        </Pie>
        {showTooltip && <Tooltip />}
        {showLegend && <Legend />}
      </PieChart>
    </ResponsiveContainer>
  )
}
