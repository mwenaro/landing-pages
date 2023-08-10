import React from 'react';
import { Field, ErrorMessage } from 'formik';
//import { string, object } from 'yup';

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  className?:string;
}


const Input: React.FC<InputFieldProps> = ({ name, label, type = 'text' , className =""}) => {

const classes =` px-6 py-3 mt-1 p-2 border rounded
-lg  focus:ring focus:ring-indigo-300 focus:outline-none ${className}`

  return (
    <div className="mb-4 flex flex-col px-3 md:px-8">

      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type ==="textarea"?
      <Field
        as = "textarea"
	rows = {5}
	id={name}                                             name={name}
        className={classes}                                 />

     :
     <Field
        type={type}
        id={name}
        name={name}
        className={classes}
      />

      }

      <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default Input;

