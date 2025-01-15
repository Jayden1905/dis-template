import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'

type IndicatorProps = {
  machine: string
  machineGroup: string
  percentage: number
  start: string
  end: string
  borderColor?: string
}

export default function CustomIndicator({
  machine,
  machineGroup,
  percentage,
  start,
  end,
  borderColor = '#4ade80',
}: IndicatorProps) {
  return (
    <Card
      style={{
        borderLeftColor: borderColor,
      }}
      className={`border-l-[6px] cursor-pointer hover:shadow-lg`}
    >
      <CardHeader className='space-y-1'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-bold'>{machine}</h1>
          <ChevronRight />
        </div>
        <p className='uppercase text-muted-foreground text-sm font-bold'>
          {machineGroup}
        </p>
      </CardHeader>
      <CardContent>
        <h1 className='text-xl font-bold'>{percentage}%</h1>
        <p className='text-muted-foreground text-sm font-bold'>{start}</p>
        <p className='text-muted-foreground text-sm font-bold'>{end}</p>
      </CardContent>
    </Card>
  )
}
