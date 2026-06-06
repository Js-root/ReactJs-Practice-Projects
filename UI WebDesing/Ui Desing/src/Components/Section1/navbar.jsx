import React from 'react'

const navbar = () => {
  return (
    <div className='flex items-center justify-between py-10 px-15'>
        <button className='uppercase bg-black text-white rounded-full px-6 py-2 tracking-widest text-xs'>Target Audience</button>
        <button className='uppercase text-xs bg-gray-200 px-6 py-2 rounded-full tracking-widest'>Digital Banking Platform</button> 
    </div>
  )
}

export default navbar