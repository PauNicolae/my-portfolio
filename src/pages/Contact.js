import React, { useRef} from "react";
import emailjs from "emailjs-com";
import '../Contact.css';
import '../Home.css';
import Swal from 'sweetalert2';
import MovingText from 'react-moving-text';



function Contact() {

  const form = useRef();
  
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_lk685tp",
    "template_myportfolio",
    form.current,
    "IvDhY05IjehfODZVZ"
  ).then(
    function (response) {
      Swal.fire(
        'Success!',
        'Your message has been sent! xoxo💋',
        'success'
      )
    })
};




  return (
    <div>   
      <img className="scroll" src="../contact.png" alt="" />
      
    <section className="contact-section">
    <MovingText
  type="fadeIn"
  duration="2000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
    <div className="contact-form">
 
    <h1 class="mb-4">Get in touch</h1>
      <h4>Looking forward to hear from you soon!❤️</h4>
     
    
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name" name="user_name" required/>
    
        
        <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail" name="user_email" required/>
    
     
        <div class="form-group">
            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message" name="message" required></textarea>
        </div>
    
        <button class="btn btn-success btn-block mt-3" type="submit" value="send">Send</button>
    
    </form>
    
    </div>
    </MovingText>
    </section>
    </div>
  );


}

export default Contact
