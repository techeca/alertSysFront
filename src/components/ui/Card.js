import React from 'react'

export default function Card({children}){

  return(
    <div className={'flex bg-white flex-col p-6 rounded-md drop-shadow-lg m-3 border'}>
      {children}
    </div>
  )
}
