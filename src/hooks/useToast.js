import {useState} from 'react'

export default function useToast(){
  const [toastList, setToastList] = useState([])

  function addToast(content, type){
    const newList = toastList
    const newToast = {content:content, type:type}
    newList.push(newToast)
    setToastList(newList)
  }

  function test(){
    console.log(toastList);
  }

  return {
    toastList,
    addToast,
    test
  }
}
