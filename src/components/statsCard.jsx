import React from 'react'

const StatsCard = ({value}) => {
  return (
    <>
    <div className='shadow-lg w-70 h-32 flex flex-col p-2 hover:shadow-2xl rounded-2xl'>
            <span className='text-xs'>{value}</span>
            <span className='text-4xl mt-2'>1240</span>
    </div>
    </>
  )
}

export default StatsCard