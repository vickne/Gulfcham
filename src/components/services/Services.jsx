import "./services.scss";
import {motion, useInView} from "framer-motion";
import { useRef, useState } from 'react';

const variants = {
    initial:{
        x:-500,
        y: 100,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
    };
const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref,{ margin:"-100px" });
  return (
    <section id="services">
    <motion.div className="services" 
    variants={variants} 
    initial="initial" 
    //animate="animate"
    //whileInView="animate"
    ref={ref}
    animate={ isInView && "animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>Technomelt<br />
            Aquence 
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/gulfchem-brand-henkal.jpg" alt="" />
                <h1>
                    <motion.b whileHover={{color:"#fcd125"}}>Our </motion.b>Brand
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"#ed1b24"}}>Henkel</motion.b>
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"#ed1b24", color: "black", margin:"10px",
            transition: { ease: "easeOut", duration: .1 } }}
            >
                <h2>HOT-MELT ADHESIVE (HMA)</h2>
                <p>
                <img src="/hot-melt-adhesives.jpg" alt="" style={{width:"200px"}}/>
                </p>
                <p>
                Hot-melt adhesive (HMA), also known as hot glue, is a form of thermoplastic adhesive that is commonly sold as solid cylindrical sticks of various diameters
                designed to be applied using a hot glue gun. In industrial use, hot-melt adhesives provide several advantages over solvent-based adhesives. Volatile organic compounds are reduced or eliminated, and the drying or curing step is eliminated. Hot-melt
                adhesives have a long shelf life and usually can be disposed of without special precautions.
                </p>
                <button>Enquiry</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"#ed1b24", color: "black",margin:"10px",
            transition: { ease: "easeOut", duration: .1 } }}
            >
                <h2>AQUENCE-WATER BASED ADHESIVE</h2>
                <p>
                <img src="/water-based-adhesives.jpg" alt="water-based-adhesives-henkel" style={{width:"200px"}}/>
                </p>
                <p>
                Aquence-Water Based Adhesive is a Innovative,sustainable, water-based adhesive solutions.
                Henkels AQUENCE is the brand for innovative,sustainable, water-based adhesive solutions. As a the
                global market leader in water-based adhesives AQUENCE improves our customers Total Cost of Ownership and product quality.                </p>
                <button href="#contact">Enquiry</button>
            </motion.div>
        </motion.div>
    </motion.div>
    </section>
  )
}

export default Services