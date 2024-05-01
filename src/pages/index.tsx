import Sidebar from '@/components/Sidebar'
import Identity from '@/components/form/Identity'
import React from 'react'

const index = () => {
  const menuItems = [
    "create an oc",
    "my oc library",
    "character journal",
    "oc creation Guide",
    "the universe",
    "mechanics",
    "join a game !",
    "discard"
  ];
  return (
    <div className='w-full  h-screen'>
      <div className=''>
         
      <Sidebar className={'!w-[40%]'} menuItems={menuItems as any} notificationLength={1}/>
      </div>
     
    </div>
  )
}

export default index
