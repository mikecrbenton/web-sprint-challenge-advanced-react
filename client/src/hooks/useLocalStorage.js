import React,{ useState } from 'react';

// Same function as useState() with extra functionality
// INITIALIZING STATE
const useLocalStorage = ( key, initialValue ) => {

   // storedValue will be an initializer function
   const [storedValue, setStoredValue] = useState( ()=> {
      // READ FUNCTIONAILITY - FETCH
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
   });

   // wrapper function for setStoredValue()
   const setValue = (value) => {
      // WRITE FUNCTIONALITY 
      // TO STATE
      setStoredValue(value);
      // TO LOCAL STORAGE
      localStorage.setItem(key, JSON.stringify(value));
   }

   // return this function and setStoredValue wrapper function
   // this is how setValue is accessed - by being passed out 
   return [storedValue, setValue]
}

export default useLocalStorage;