import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserProfile } from '../avatar/profile'
import Notifications from '../notification/notification'

export default function AppHeader() {
  return (
    <header className='flex h-16 w-full items-center justify-between px-6'>
      <div className='flex items-center relative'>
        <SidebarTrigger aria-describedby='dialog-button' />
        <h1 className='ml-4 text-2xl font-semibold'>Dashboard</h1>
      </div>
      <div className='flex items-center space-x-2'>
        <Notifications />
        <UserProfile />
      </div>
    </header>
  )
}
