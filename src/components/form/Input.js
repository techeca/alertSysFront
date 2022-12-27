import React from 'react'

export default function Input({name, type, onchange, value}){
  const firstLetterCapitalize = name.charAt(0).toUpperCase() + name.slice(1)

  function getIcon(typeInput){
    switch (type) {
      case 'email':
        return <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9ca3af">
                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
               </svg>
        break;
      case 'password':
        return <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9ca3af">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
               </svg>
    }
  }


  return(
    <div className='relative w-full flex flex-wrap'>
      {type !== 'text' ?
        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
          {getIcon(type)}
        </div>
        :
        <></>
      }
      <input className={`border m-3 p-1.5 ${type !== 'text' ? 'pl-10' : 'pl-3 w-[100%]'} rounded-md outline-none`} id={name} name={name} type={name} placeholder={firstLetterCapitalize} onChange={onchange} value={value} />
    </div>
  )
}
