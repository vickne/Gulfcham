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

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants="textVariants" initial="initial"
            animate="animate"
            >
                <motion.h1 variants="textVariants">GULFCHEM</motion.h1>
                <motion.h2 variants="textVariants">ADHESIVES & INDUSTRAIAL CHEMICALS</motion.h2>
                <motion.div variants="textVariants"className="buttons">
                    <motion.button variants="textVariants">See the Latest Works</motion.button>
                    <motion.button variants="textVariants">Contact Me</motion.button>
                </motion.div>
                <motion.img  variants="textVariants" animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            KINGDOM OF BAHRAIN
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero