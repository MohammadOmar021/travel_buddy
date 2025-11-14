import React from 'react'

const StatsCard = ({value, numbers}) => {
  return (
    <>
    <div className='shadow-lg w-70 h-32 flex flex-col p-2 hover:shadow-2xl rounded-2xl'>
            <span className='text-xs'>{value}</span>
            <span className='text-4xl ml-4 mt-2'>{numbers}</span>
    </div>
    </>
  )
}

export default StatsCard