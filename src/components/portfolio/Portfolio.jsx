import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {useRef} from "react";

const items = [
    {
        id:1,
        title:"Ethics",
        img:"/ethics.png",
        desc:"Uncompromising Integrity, Honesty & Fairness",
    },
    {
        id:2,
        title:"Sustainability",
        img:"/sustainability.png",
        desc:"We plan and act for the future & continuous development of our company and community.",
    },
    {
        id:3,
        title:"Mutual Respect",
        img:"/mutual-respect.png",
        desc:"We do the right thing and treat each other with respect.Commitment to international standards of safety and quality. Commitment to Time and Cost.",
    },
    {
        id:4,
        title:"Professionalism",
        img:"/professionalism.png",
        desc:"We maintain the highest standards of Excellency, corporate behaviour and performance",
    },
];

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1],[-300, 300]);
    
    return (
    <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </motion.div>
                </div>
            </div>
        </section>
        );
}
const Portfolio = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref, 
    offset:["end end","start start"]
});
  
  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h2>Core Values</h2>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item ={ item} key= {item.id} />
        ))}
    </div>
  )
}

export default Portfolio
