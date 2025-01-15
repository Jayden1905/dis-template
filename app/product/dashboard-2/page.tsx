import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CustomIndicator from '@/components/indicator/custom-indicator'
import CustomAreaChart from '@/components/charts/custom-area-chart'
import { CustomComposedChart } from '@/components/charts/custom-composed-chart'
import { CustomPieChart } from '@/components/charts/custom-pie-chart'

// Area Chart Data
const unitData = [
  { month: 'Jan', product1: 100, product2: 50, product3: 75 },
  { month: 'Feb', product1: 150, product2: 75, product3: 100 },
  { month: 'Mar', product1: 200, product2: 100, product3: 50 },
  { month: 'Apr', product1: 150, product2: 50, product3: 75 },
  { month: 'May', product1: 125, product2: 75, product3: 50 },
  { month: 'Jun', product1: 100, product2: 100, product3: 75 },
  { month: 'Jul', product1: 100, product2: 75, product3: 100 },
]

// Composed Chart Data
const salesData = [
  { quarter: 'Q1', product1: 100, product2: 150, product3: 200, total: 450 },
  { quarter: 'Q2', product1: 150, product2: 120, product3: 170, total: 440 },
  { quarter: 'Q3', product1: 200, product2: 180, product3: 150, total: 530 },
  { quarter: 'Q4', product1: 250, product2: 200, product3: 180, total: 630 },
]

// Composed Chart Color Config
const composedChartColorConfig = {
  product1: { label: 'Product 1', color: '#FF8BA7' }, // Pink
  product2: { label: 'Product 2', color: '#C77DFF' }, // Purple
  product3: { label: 'Product 3', color: '#4361EE' }, // Blue
  total: { label: 'Total', color: '#4CC9F0' }, // Cyan for line
}

// Pie Chart Data
const populationData = [
  { name: '0-14 years old', value: 25.45 },
  { name: '15-24 years old', value: 15.52 },
  { name: '25-54 years old', value: 40.59 },
  { name: '55-64 years old', value: 9.11 },
  { name: '65+ years old', value: 9.33 },
]

// Pie Chart Custom Colors
const customPieChartColors = [
  '#FF8BA7',
  '#C77DFF',
  '#4361EE',
  '#34D399',
  '#FBBF24',
]

export default async function Dashboard() {
  return (
    <div>
      <div>
        <div className='grid gap-4 p-4 md:grid-cols-2'>
          <div className='md:col-span-2'>
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='grid gap-4'>
                <CustomIndicator
                  machine='Machine #1'
                  machineGroup='Machine Group #1'
                  percentage={69}
                  start='Start: 20210420 11:11AM'
                  end='End: 20210420 11:11AM'
                  borderColor='#ef6664'
                />

                <CustomIndicator
                  machine='Machine #2'
                  machineGroup='Machine Group #2'
                  percentage={69}
                  start='Start: 20210420 11:11AM'
                  end='End: 20210420 11:11AM'
                  borderColor='#ef6664'
                />
              </div>
              <Card className='md:col-span-2'>
                <CardHeader>
                  <CardTitle>Sales Figure</CardTitle>
                </CardHeader>
                <CardContent>
                  <CustomComposedChart
                    data={salesData}
                    barKeys={['product1', 'product2', 'product3']}
                    lineKeys={['total']}
                    config={composedChartColorConfig}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>World Population by Broad Age Groups</CardTitle>
            </CardHeader>
            <CardContent className='items-center justify-center'>
              <CustomPieChart
                data={populationData}
                colors={customPieChartColors} // Optional custom colors
                showLegend={true} // Show or hide legend
                showTooltip={true} // Show or hide tooltip
                outerRadius={100} // Adjust pie size
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Units sold</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomAreaChart
                data={unitData}
                dataKeys={['product1', 'product2', 'product3']}
                colorScheme={['#8b5cf6', '#e879f9', '#f472b6']}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
