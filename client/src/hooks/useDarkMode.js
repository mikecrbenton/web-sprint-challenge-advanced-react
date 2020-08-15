import React from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {

  const [darkMode, setDarkMode_CK] = useLocalStorage("Dark Mode");  //KEY

   return [ darkMode , setDarkMode_CK ];
}

export default useDarkMode;