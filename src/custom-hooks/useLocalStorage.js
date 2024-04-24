import {useState,useEffect} from 'react';
 
const useLocalStorage=(token, initial="")=>{
  const [storedData, setStoredData]=useState(()=>{
    if(!!window && !!window.localStorage) {
        if(localStorage.getItem(token)===null){
            return initial;
        }
        let saved= JSON.parse(localStorage.getItem(token))
        return saved;
  } return initial;
 });

   useEffect(() => {
    if(!!window && !!window.localStorage) {
      localStorage.setItem(token, JSON.stringify(storedData))
    }       
}, [storedData, initial])

 return [storedData, setStoredData];
}

export default useLocalStorage;