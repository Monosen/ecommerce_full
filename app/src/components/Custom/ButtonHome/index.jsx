import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BsArrowLeft } from 'react-icons/bs'

export const ButtonHome = ({ styles }) => {
  const navigate = useNavigate()

  const handlerHome = () => {
    navigate('/')
  }

  return (
    <div
      className={`flex items-center justify-center h-6 text-white bg-red-300 rounded-md w-7 ${styles}`}
    >
      <BsArrowLeft
        className='w-full h-full px-1 cursor-pointer'
        onClick={handlerHome}
      />
    </div>
  )
}
