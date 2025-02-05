"use client";

import { motion, stagger } from "framer-motion";

import "./hero.scss";

const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration:2,
            repeat:Infinity
        },
    },
};

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-30%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration: 1,
        },
    },
};

const imageVariants = {
    initial:{
        y: 0,
    },
    animate:{
        y: "-30%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration: 1,
        },
    },
};
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants="textVariants" initial="initial"
            animate="animate"
            >
                <motion.h1 variants="textVariants">GULFKEM</motion.h1>
                <motion.h2 variants="textVariants">ADHESIVES & INDUSTRAIAL CHEMICALS</motion.h2>
                <motion.p>GulfKem Industrial Trading WLL W.L.L established in 2019, is a leading
Wholesaler, retailer and distributor of Industrial Chemicals and Adhesives
suppliers at Kingdom of Bahrain. We strive to offers our customers, a
diverse and comprehensive portfolio of superior quality industrial chemicals
and adhesive products from world-wide suppliers. Our store located at
Al-Ramli, Salmabad Industrial Area, Kingdom of Bahrain involved in
wholesale, retail and distribution activities.
</motion.p>
                <motion.div variants="textVariants"className="buttons">
                    <motion.button variants="textVariants"><a href="#trade">We Trade</a></motion.button>
                    <a href="#contact"><motion.button variants="textVariants">Contact Us</motion.button></a>
                </motion.div>
                <motion.img  style={{ overflow: 'scroll' }} variants="textVariants" animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            KINGDOM OF BAHRAIN
        </motion.div>
        <motion.div div className="imageContainer" variants={imageVariants} initial="initial" animate="animate">
            <img src="/gulfchem-hero-net.png" alt="" />
        </motion.div>
    </div>
  )
}

export default Hero
