import React from 'react';
import './contact.css';
import contactus from './contact.jpg';
 function contact(){
    return(
        <body>
            <img class="contactus" src={contactus} alt="contactus" />
        <div class="span">
            <h1><u>Contact Us</u></h1>
            <p>Feel free to reach out to us via email or phone number.</p>
            <a href="dataworks@example.com">Email: dataworks@example.com</a>
            <p>Phone: +1 (123) 456-7890</p>
        </div><hr />
        <form class="myform">
            <fieldset>
            <label>Enter your name:
                <input type="text" />
            </label><br /><br />
            <label>Enter your email:
                <input type="email" />
            </label><br /><br />
            <label>Enter your message:
                <textarea></textarea>
            </label><br /><br />
            <input type="submit" value="Submit" />
            </fieldset>
        </form>
        <div class="box">
            <h2><u>Address:</u></h2>
            <p>KPHB, HYDERABAD, TELAGANA, 500007</p>
        </div><hr />
        </body>
    )
 }

 export default contact;