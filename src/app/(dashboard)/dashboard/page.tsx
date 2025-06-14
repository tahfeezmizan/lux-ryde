import DataOverview from '@/components/dashboard/dataOverview'
import RevenueChart from '@/components/dashboard/revenue-chats'
import SupportMessages from '@/components/dashboard/supportMessage'
import React from 'react'

export default function page() {
  return (
    <div>
         <DataOverview/>
<div className='flex gap-4 mt-10'>
  
<RevenueChart/>
   <SupportMessages/>
</div>

  
    </div>
  )
}
