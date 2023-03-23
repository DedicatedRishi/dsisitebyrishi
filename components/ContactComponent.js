import { React, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../styles/Contact.module.css"
const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  function sendMail() {
    var params = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
  
    const serviceID = "service_myb0hsv";
    const templateID = "template_bnk52na";
  
      emailjs.send(serviceID, templateID, params, "K6iJmsc5NRaRY64yR")
      .then(res=>{
        setName("");
        setEmail("");
        setPhone("")
        setMessage("");
          console.log(res);
          showAlert("Message sent successfully")
  
      })
      .catch(err=>console.log(err));
  
  }
  function showAlert(message) {
    let messageAlert = document.getElementById("message-alert");
    messageAlert.style.top = "0px";
    messageAlert.children[0].innerHTML = message;
    setTimeout(() => {
      messageAlert.style.top = "-60px";
    }, 1500);
  }
  const submitContact = (e) => {
    e.preventDefault();
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");    
    if (!name || !email || !phone || !message) {
      showAlert("Any field cannot be blank");
  }
  else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
    showAlert("Please enter a valid e-mail address");    
    }
  else if(isNaN(phone) || phone.length!== 10){
    showAlert("Please enter a valid phone number")
  }
  else{
    sendMail()
  }
  };

  return (
    <>
    <section className={styles.ContactComponent}>
        <h2>Contact Us</h2>
        <form className={styles.formContainer} onSubmit={submitContact}>
            <input type="text" placeholder='Enter Your Full Name' onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="email" placeholder='Enter Your Email Address' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="tel" placeholder='Enter Your Phone Number' onChange={(e) => setPhone(e.target.value)} value={phone}/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message' onChange={(e) => setMessage(e.target.value)} value={message}/>
            <button type='submit' className='contact-button' id='contact-btn'>Send Message</button>
        </form>
    </section>
    <div className={styles.map}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30260.95339516906!2d73.92123250856609!3d18.54610380753215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d73683ffff%3A0xfebfef05f2675fee!2sDigisat%20skill%20India%20pvt%20ltd.!5e0!3m2!1sen!2sus!4v1677067310939!5m2!1sen!2sus"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
    </>
  )
}

export default ContactComponent