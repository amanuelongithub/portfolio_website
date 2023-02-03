import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1xk7msg",
        "template_nn4qgyb",
        form.current,
        "Dzaq7A507nTIf4ddo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
    id='Contact'  className='contact' 
      style={{
        background: darkMode ? "var(--black)" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* left */}
      <div className='c-left awesome'>
        <span>Get in touch</span>
        <span>Contact me</span>
      </div>
      {/* right */}
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            className='user'
            placeholder='Name'
            style={{
              background: darkMode ? "var(--black)" : "",
              color: darkMode ? "white" : "",
            }}
          />
          <input
            type='email'
            name='user_email'
            className='user'
            placeholder='Email'
            style={{
              background: darkMode ? "var(--black)" : "",
              color: darkMode ? "white" : "",
            }}
          />
          <textarea
            name='message'
            className='user'
            placeholder='Message'
            style={{
              background: darkMode ? "var(--black)" : "",
              color: darkMode ? "white" : "",
            }}
          />
          <input
            type='submit'
            value='Send'
            className='button c-button'
            style={{

              border: "3px solid var(--seccolor)",
              background: darkMode ? "var(--black)" : "",
              color: darkMode ? "white" : "black",
            }}
          />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className='blur c-blur1'
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
