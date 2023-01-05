import React from 'react'

export default function Select({onchange, value, options, foption}){

  return(
    <select id={'nivel'} name={'nivel'} className={'px-3 p-2 w-full rounded-md border bg-white'} onChange={onchange} value={value}>
        <option className={'text-gray-500'}>{foption}</option>
        {options.map((o, i) =>
          <option key={o} className={'text-gray-500'}>{o}</option>
        )}
    </select>
  )
}
