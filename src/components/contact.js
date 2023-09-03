import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail'

const titleStyle = {
  backgroundColor: 'gray',
  padding: '20px'
}

const linkStyle = {
  color: 'white',
}

const padding = {
  padding: '10px'
}

const errorStyle = {
  backgroundColor: 'black',
  color: 'gray'
}

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')

    const { name, email, message } = formState;

    function handleChange(e) {
      if (e.target.name === 'email') {
        const validate = validateEmail(e.target.value);

        if (!validate) {
          setErrorMessage('Please enter a valid email.');
        } else {
          setErrorMessage('')
        }
      } else if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else setErrorMessage();

      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
      }
    }

    function handleSubmit(e) {
      e.preventDefault();
    }


    return(
        <div class="contact" style={padding}>
        <h1 style={titleStyle}>Contact Me</h1>
        <form>
          <div class="form-group" style={padding}>
            <label htmlFor="name">Your name:</label>
            <input type="text" class="form-control" id="name" placeholder="Leave your name here..." defaultValue={name} onBlur={handleChange}/>
          </div>
          <div class="form-group" style={padding}>
            <label htmlFor="email">Your email:</label>
            <textarea name="email" id="email" placeholder="Enter your email here..." class="form-control" defaultValue={email} onBlur={handleChange}></textarea>
          </div>
          <div class="form-group" style={padding}>
            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message" placeholder="Enter your message here..." class="form-control" defaultValue={message} onBlur={handleChange}></textarea>
          </div>

          {errorMessage && (
            <div style={errorStyle}>
              <h3>Form Errors:</h3>
              <p class="error">{errorMessage}</p>
            </div>
          )}

          <button class="btn btn-dark" style={linkStyle} onSubmit={handleSubmit}>Submit Message</button>
        </form>
        <p style={padding}>Alternatively, please feel free to contact me directly thru either of the avenues below. </p>
          
          <h5>
            Call me at <a href="tel:610.608.0403" style={linkStyle}>763-221-6590</a>
          </h5>
          <h5>
            Email me at <a href="mailto:aungvary5@gmail.com" style={linkStyle}>philadelphia536@yahoo.com</a>
          </h5>
      </div>
    )
}

export default Contact;

