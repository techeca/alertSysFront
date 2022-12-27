import React from 'react'

export default function Button({text, type, bgColor, hoverColor}){
  //const bColor = `bg-${String(bgColor)}`
  //const hColor = hoverColor
    //red-500 red-600 gree indigo yellow

  return(
    <button className={`bg-${bgColor} hover:bg-${hoverColor} w-full text-white rounded-md p-2 mt-3 transition ease-in duration-500 font-semibold`} type={type}>{text}</button>
  )
}
