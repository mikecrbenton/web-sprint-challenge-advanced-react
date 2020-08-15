// write your custom hook here to control your checkout form
import React, { useState } from 'react';

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook
const useForm = ( key, initialValue ) => {

   // CUSTOM STATE
   const [ storedForm, setStoredForm ] = useState( () => {
      const form =localStorage.getItem(key);
      return form ? JSON.parse(form) : initialValue;
   });

   // CUSTOM SETTER
   const setForm = (value) => {
      setStoredForm(value);
      localStorage.setItem(key, JSON.stringify(value));
   }
   // RETURN ARRAY WITH CUSTOM STATE AND CUSTOM SETTER 
   return [ storedForm, setForm ];
}

export default useForm;

//==========FOR REFERENCE=====================
// const CheckoutForm = (props) => {
   
//    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//    const [values, setValues] = useState(initialValue);
 
//    const handleChanges = (e) => {
//      setValues({ ...values, [e.target.name]: e.target.value });
//    };
 
//    const handleSubmit = (e) => {
//      e.preventDefault();
//      setShowSuccessMessage(true);
//    };
//==========FOR REFERENCE=====================