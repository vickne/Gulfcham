import "./contact.scss"
import { animate, motion, useInView } from "framer-motion";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
const variants = {
    initial:{
        y: 100,
        opacity:0,
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{
            duration:0.5,
            staggerChildren: 0.1,
        },
    },
    };
const Contact = () => {
	const ref = useRef();
	const formRef = useRef();
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs
		  .sendForm('service_ziefloi', 'template_wldq5zq', formRef.current, {
			publicKey: 'u-qHP1sWHIQYOurD9',
		  })
		  .then(
			() => {
			  setSuccess(true)
			},
			(error) => {
			  setError(true)
			},
		  );
	  };

	const isInView = useInView(ref,{ margin:"-100px" });

  return (
    <section id="contact">
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1>Let's work together</motion.h1>
            <motion.div className="item">
                <h2>Mail</h2>
                <span>info@gulfchem.bh</span>
            </motion.div>
            <motion.div className="item">
                <h2>Address</h2>
                <span>Unit No. 6, Building No. 2107, Road 1529,<br/>
                 BIW  Salman Industrial City, Al Hidd 115,<br/>
                 Kingdom of Bahrain</span>
            </motion.div>
            <motion.div className="item">
                <h2>Phone</h2>
                <span><a href="tel:+97338330069">+973 3833 0069</a>,<a href="tel:+97317474600">+973 1747 4600</a>,<a href="tel:+97338786000">+973 3878 6000</a></span>
            </motion.div>
        </motion.div>
        <motion.div className="formContainer">
            <motion.form 
			 ref={formRef} onSubmit={sendEmail}
            >
                <input type="text" required placeholder="Name"  name="from_name" />
                <input type="email" required placeholder="Email" name="user_email"/>
                <textarea rows={8} placeholder="Message" name="message"/>
                <button>Submit</button>
				{error && "Error"}
				{success && "Success"}
            </motion.form>
        </motion.div>
    </motion.div>
    </section>
  )
}

export default Contact