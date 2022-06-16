import React from 'react'

export default function Title(props) {
  return (
    <div className="m-auto">
    <p className='text-white text-[25px] text-center font-bold mb-[10px]'>
        {props.title}
    </p>
    </div>
  )
}
