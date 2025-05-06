import React, { useState} from "react";
import '../App.css';


function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit (e) {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({name, email, message})
            })

            const data = await response.json()

            if(response.ok) {
                alert('Message Sent succesfull')
            }else {
                alert('Faild to send');
                console.log(data)
            }
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className="form-container">
            <h2>Contact us</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your username" required/>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter your Email" required/>
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="Enter your message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default Contact