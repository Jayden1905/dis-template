'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { ChevronDown, LayoutDashboard } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'

type MenuItem = {
  title: string
  url?: string
  icon: ReactNode
  subItems?: MenuItem[]
}

const items: MenuItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: <LayoutDashboard className='h-4 w-4' />,
  },
  {
    title: 'Product',
    url: '/',
    icon: <LayoutDashboard className='h-4 w-4' />,
    subItems: [
      {
        title: 'Dashboard Sample 1',
        url: '/',
        icon: <LayoutDashboard className='h-4 w-4' />,
      },
      {
        title: 'Dashboard Sample 2',
        url: '/product/dashboard-2',
        icon: <LayoutDashboard className='h-4 w-4' />,
      },
    ],
  },
]

export function AppSidebar() {
  const currentPath = usePathname()
  const { theme } = useTheme()

  return (
    <Sidebar aria-describedby='dialog'>
      <SidebarHeader className='bg-background'>
        <Image
          src={
            theme === 'dark' ? '/logo/logo-dark.png' : '/logo/logo-light.png'
          }
          alt='logo'
          width={300}
          height={300}
          className='p-4'
          priority
        />
      </SidebarHeader>
      <SidebarContent aria-label='dialog window' className='bg-background'>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) =>
                item.subItems ? (
                  <Collapsible key={index} className='group/collapsible'>
                    <SidebarGroup>
                      <SidebarGroupLabel
                        asChild
                        className={`uppercase font-semibold`}
                      >
                        <CollapsibleTrigger>
                          {item.icon}
                          <span className='ml-3'>{item.title}</span>
                          <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent />
                        {item.subItems.map((subItem, index) => (
                          <SidebarMenuItem key={index}>
                            <SidebarMenuButton
                              key={index}
                              className={`${currentPath === (subItem?.url as string) ? 'bg-brand text-white hover:bg-brand hover:text-white' : ''} uppercase font-semibold p-5 text-xs`}
                              asChild
                            >
                              <Link href={subItem.url as string}>
                                {subItem.icon}
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      key={index}
                      className={`${currentPath.includes(item?.url as string) ? 'bg-brand text-white hover:bg-brand hover:text-white' : ''} uppercase font-semibold p-5`}
                      asChild
                    >
                      <Link href={item.url as string}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='p-4 bg-background'>
        <p className='text-sm text-gray-500'>© 2023 MyApp Inc.</p>
      </SidebarFooter>
    </Sidebar>
  )
}
