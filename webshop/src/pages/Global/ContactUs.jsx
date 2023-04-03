import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ukizjh', 'template_w64lrj3', form.current, 'yu4xJUZWCsTOEodm-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className="contact" ref={form} onSubmit={sendEmail}>            
      <TextField name="from_name" label="Name" variant="outlined" /> <br /> <br />
      <TextField name="from_email" label="Email" variant="outlined" /> <br /> <br />
      <TextField name="message" label="Message" variant="outlined" /> <br /> <br />
      <Button type="submit" variant="contained">Send</Button>
    </form>
  );
};