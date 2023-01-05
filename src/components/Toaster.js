import React, {useState, useEffect} from 'react'
import { Transition } from '@headlessui/react'
import useToast from '../hooks/useToast'

export default function Toaster(){
  const [isShowing, setIsShowing] = useState(true)
  const [list, setList] = useState([])
  const mitoaster = useToast()
  const icons = {
      SUCCESS:<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg ">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Check icon</span>
              </div>,
      DANGER:<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Error icon</span>
             </div>,
      WARNING:<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Warning icon</span>
    </div>
           }

  useEffect(() => {
    setList(mitoaster.toastList)
  }, [mitoaster.toastList])

  console.log('en toaster');
  console.log(mitoaster.toastList);

  return(
    mitoaster.toastList.length > 0 ?
      <div className={`flex absolute z-10 flex-col bottom-0 right-10`}>
      {mitoaster.toastList.map((t, i) =>
        <Transition
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >

          <div className="flex select-none transition-opacity duration-1000 ease-in opacity-1 bottom-0 right-10 items-center p-4 mb-4 w-full max-w-[350px] text-gray-500 bg-white rounded-lg shadow border">
              {icons[t.type]}
              <div className="ml-3 text-sm font-normal">{t.content}</div>
              <button onClick={() => setIsShowing(false)} type="button" className="ml-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8">
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
          </div>
        </Transition>
      )}
      </div>
      :
      <></>

  )
}
