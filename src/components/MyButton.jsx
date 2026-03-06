import React from 'react'

const MyButton = ({ children, dis}) => {
  return (
   <button disabled={dis} className='bg-violet-500  disable:bg-violet-300 text-white p-5 rounded-md'>
   {children}
   </button>
  )
}

export default MyButton;