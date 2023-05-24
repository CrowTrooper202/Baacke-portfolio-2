import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers/helpers'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('')

    const handleInputChange = (e) => {
        
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } 
        };

    const handleFormSubmit =(e)=>{
        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or Name is needed');
            
            return;
            
          }
          alert(`hello ${name}`)
          
          setName('');
          setEmail('');
          setMessage('');

    }
    return(
    <section>
        <h1>drop me a message!</h1>
        <p>Hello {name}</p>
        <form className='form'>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        /> 
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
         <label>
          message:
          <textarea value={message} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
    )
}
