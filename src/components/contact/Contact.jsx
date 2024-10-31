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
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1>Let's work together</motion.h1>
            <motion.div className="item">
                <h2>Mail</h2>
                <span>info@gulfchem.bh</span>
            </motion.div>
            <motion.div className="item">
                <h2>Address</h2>.
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
            <motion.div 
            className="phoneSvg" 
            initial={{opacity:1}} 
            whileInView={{opacity:0}}
            transition={{ delay:3, duration: 3 }}
            >
            <svg fill="none" height="400px" width="400px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 478.504 478.504" xml:space="preserve">
<g>
	<g>
		<motion.path 
        initial={{pathLength:0}}
        animate={ isInView && { pathLength:1 }}
        transition={{ duration: 3 }}
         d="M234.093,422.76l-23.992-41.56c-6.616-11.464-21.328-15.4-32.784-8.784l-6.928,4c-5.552,3.208-12.008,4.056-18.208,2.4
			c-6.192-1.664-11.368-5.632-14.568-11.184l-40-69.28c-3.2-5.552-4.056-12.016-2.4-18.208c1.664-6.192,5.632-11.368,11.184-14.568
			l6.928-4c5.552-3.208,9.52-8.384,11.176-14.576c1.664-6.192,0.808-12.664-2.392-18.208l-24-41.568
			c-6.616-11.464-21.336-15.392-32.784-8.784l-19.152,11.056c-12,6.928-22.32,16.728-29.856,28.368l-1.16,1.76
			c-18.064,27.88-18.968,63.072-2.36,91.848l71.032,123.032c15.84,27.44,44.704,44,76.128,44c1.528,0,3.056-0.04,4.592-0.12
			l2.12-0.112c13.84-0.712,27.496-4.744,39.488-11.672l19.152-11.056C236.773,448.928,240.709,434.216,234.093,422.76z
			 M221.045,436.84c-0.552,2.064-1.872,3.792-3.728,4.856l-19.152,11.056c-9.816,5.664-20.984,8.968-32.312,9.552l-2.12,0.112
			c-27.176,1.4-52.456-12.368-66.04-35.904L26.661,303.48c-13.592-23.544-12.848-52.336,1.936-75.16l1.152-1.776
			c6.168-9.512,14.616-17.536,24.424-23.2l19.152-11.056c1.256-0.728,2.632-1.072,3.992-1.072c2.768,0,5.464,1.432,6.936,4
			l24,41.568c2.208,3.824,0.896,8.72-2.928,10.928l-6.928,4c-9.256,5.344-15.872,13.968-18.64,24.288s-1.344,21.104,4,30.352
			l40,69.28c5.344,9.256,13.968,15.872,24.288,18.64c10.312,2.752,21.096,1.344,30.352-4l6.928-4c1.856-1.072,4.008-1.344,6.072-0.8
			c2.064,0.552,3.792,1.872,4.856,3.728l24,41.568C221.309,432.624,221.597,434.784,221.045,436.84z"/>
	</g>
</g>
<g>
	<g>
		<circle cx="187.451" cy="421.953" r="8"/>
	</g>
</g>
<g>
	<g>
		<circle cx="155.773" cy="431.049" r="8"/>
	</g>
</g>
<g>
	<g>
		<circle cx="75.455" cy="227.996" r="8"/>
	</g>
</g>
<g>
	<g>
		<circle cx="51.737" cy="250.924" r="8"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M437.557,0h-248c-22.056,0-40,17.944-40,40v118.792c0,22.336,18.32,41.208,40,41.208h8v26.256
			c0,12.904,7.136,24.248,18.624,29.592c4.192,1.952,8.632,2.912,13.032,2.912c7.152,0,14.224-2.52,20.032-7.416L310.125,200
			h127.432c22.056,0,40-17.944,40-40V40C477.557,17.944,459.613,0,437.557,0z M461.557,160c0,13.232-10.768,24-24,24H307.205
			c-0.992,0-1.96,0.208-2.872,0.56c-0.872-0.328-1.792-0.56-2.776-0.56h-32c-4.416,0-8,3.584-8,8s3.584,8,8,8h15.752l-46.368,39.104
			c-6.696,5.632-13.432,3.44-16.016,2.24c-4.528-2.112-9.368-7.184-9.368-15.088V192c0-4.416-3.584-8-8-8h-16
			c-13.008,0-24-11.544-24-25.208V40c0-13.232,10.768-24,24-24h248c13.232,0,24,10.768,24,24V160z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M227.741,62.304c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S245.389,62.304,227.741,62.304z
			 M227.741,110.304c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16
			C243.741,103.128,236.565,110.304,227.741,110.304z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M311.741,62.792c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S329.389,62.792,311.741,62.792z
			 M311.741,110.792c-8.824,0-16-7.176-16-16s7.176-16,16-16c8.824,0,16,7.176,16,16S320.565,110.792,311.741,110.792z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M395.741,62.304c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S413.389,62.304,395.741,62.304z
			 M395.741,110.304c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16
			C411.741,103.128,404.565,110.304,395.741,110.304z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M449.253,230.48c-0.344-6.072-5.104-10.472-10.944-9.792c-5.52,0.64-10.048,5.528-9.744,10.88
			c0.272,5.36,5.144,9.744,10.864,9.8C445.149,241.424,449.557,236.544,449.253,230.48z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M438.501,259.728c-5.552-0.464-10.816,3.448-11.656,8.744c-0.808,5.296,3.088,10.56,8.688,11.752
			s10.896-2.712,11.808-8.728C448.285,265.488,444.357,260.224,438.501,259.728z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M430.405,299.96c-5.472-1.672-11.416,1.048-13.256,6.08c-1.728,5.08,0.808,10.976,5.912,13.272
			c5.328,2.392,11.496-0.232,13.48-5.984C438.637,307.616,435.877,301.624,430.405,299.96z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M413.861,337.504c-5-2.784-11.312-1.336-14.088,3.248c-2.592,4.712-1.872,10.664,2.856,14.136
			c4.488,3.312,11.584,2.392,14.568-2.928C420.357,346.768,418.861,340.288,413.861,337.504z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M389.853,370.752c-4.312-3.768-10.728-3.616-14.32,0.36c-3.904,3.672-4.096,10.016-0.28,14.312
			c3.776,4.264,10.568,4.472,14.976,0.296C394.325,381.232,394.149,374.52,389.853,370.752z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M359.461,398.296c-3.496-4.704-9.504-5.448-14.128-2.728c-4.584,2.776-6.008,9.08-3.192,14.056
			c2.816,4.976,9.32,6.464,14.512,3.296C361.877,409.8,362.805,402.768,359.461,398.296z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M325.813,418.04c-2.48-5.288-8.192-7.184-13.312-5.552c-5.032,1.832-7.68,7.752-5.92,13.192
			c1.76,5.44,7.824,8.176,13.528,6.072C325.901,429.848,328.197,423.112,325.813,418.04z"/>
	</g>
</g>
<g>
	<g>
		<motion.path d="M286.941,431.136c-1.256-5.456-6.536-9.04-11.864-8.376c-5.296,0.808-9.128,6.088-8.56,11.784
			c0.568,5.688,5.912,9.576,11.92,8.656C284.477,442.416,288.245,436.824,286.941,431.136z"/>
	</g>
</g>
</svg>
            </motion.div>
            <motion.form  
            initial={{ opacity: 1 }}
             whileInView={{opacity: 1 }}
             transition={{ delay: 4, duration: 1}}
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
  )
}

export default Contact