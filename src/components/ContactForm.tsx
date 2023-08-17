"use client"

import React from 'react';
import { Formik, Form } from 'formik';
import Input from './Input'; // Assuming the Input component is in a separate file
import {Button} from "@/components"

const ContactForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
    subject:""
  };

  const handleSubmit = (values:any) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="w-full flex flex-col gap-3 bg-slate-300 max-w-[500px] mx-auto py-4 md:py-8">
        <Input name="fullName" label="Full Name" />
        <Input name="email" label="Email" type="email" />
        <Input name="phone" label="Phone" type="tel" />
        <Input name="subject" label="Subject" type="select"  options={[
         "Paternity / DNA Services",
         "Cancer Testing Services",
         "Life Geno",
         "Pharmacogenomics"
        ]}/>
        <Input name="message" label="Message" type="textarea" />
        
        
     
	<button className="mx-auto w-5/6 md:w-[400px] px-8 py-3 bg-blue-600 text-white my-4 rounded-lg ">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

