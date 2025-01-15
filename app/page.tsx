import CustomAreaChart from '@/components/charts/custom-area-chart'
import CustomIndicator from '@/components/indicator/custom-indicator'
import { productColumns } from '@/components/table/columns/product-columns'
import { DataTable } from '@/components/table/data-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export type Product = {
  id: number
  name: string
  quantity: string
}

const data = [
  { month: 'Jan', value1: 150, value2: 170, value3: 240 },
  { month: 'Feb', value1: 190, value2: 220, value3: 250 },
  { month: 'Mar', value1: 300, value2: 350, value3: 400 },
  { month: 'Apr', value1: 210, value2: 240, value3: 300 },
  { month: 'May', value1: 180, value2: 200, value3: 250 },
  { month: 'Jun', value1: 170, value2: 180, value3: 200 },
  { month: 'Jul', value1: 200, value2: 210, value3: 220 },
]

const products: Product[] = [
  { id: 1, name: 'Chai', quantity: '10 boxes x 20 bags' },
  { id: 2, name: 'Chang', quantity: '24 - 12 oz bottles' },
  { id: 3, name: 'Aniseed Syrup', quantity: '12 - 550 ml bottles' },
  { id: 4, name: "Chef Anton's Cajun Seasoning", quantity: '48 - 6 oz jars' },
  { id: 5, name: "Chef Anton's Gumbo Mix", quantity: '36 boxes' },
  { id: 6, name: "Grandma's Boysenberry Spread", quantity: '12 - 8 oz jars' },
  {
    id: 7,
    name: "Uncle Bob's Organic Dried Pears",
    quantity: '12 - 1 lb pkgs.',
  },
  { id: 8, name: 'Northwoods Cranberry Sauce', quantity: '12 - 12 oz jars' },
  { id: 9, name: 'Mishi Kobe Niku', quantity: '18 - 500 g pkgs.' },
  { id: 10, name: 'Ikura', quantity: '12 - 200 ml jars' },
]

export default async function DashboardOne() {
  return (
    <div className='p-4 space-y-4 bg-background text-foreground'>
      <div className='grid gap-4 md:grid-cols-3'>
        <div className='flex flex-col gap-4'>
          <Link href='/product/dashboard-2'>
            <CustomIndicator
              machine='Machine #2'
              machineGroup='Machine Group #2'
              percentage={96}
              start='Start: 20210420 11:11AM'
              end='End: 20210420 11:11AM'
            />
          </Link>
          <Card>
            <CardHeader className='space-y-1'>
              <div className='text-2xl font-bold'>Units Sold</div>
            </CardHeader>
            <CardContent>
              <CustomAreaChart
                data={data}
                dataKeys={['value1', 'value2', 'value3']}
                colorScheme={['#8b5cf6', '#e879f9', '#f472b6']}
              />
            </CardContent>
          </Card>
        </div>
        <Card className='md:col-span-2'>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col h-fit justify-between'>
            <DataTable columns={productColumns} data={products} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
