import "./clients.scss";
import {useRef} from "react";

const items = [
    {
        id:1,
        title:"Aqua",
        img:"/aqua.png",
    },
    {
        id:2,
        title:"Awal-Press",
        img:"/awalpress.png",
    },
    {
        id:3,
        title:"bwbb",
        img:"/bwbb.png",
    },
    {
        id:4,
        title:"Imprensa",
        img:"/imprensa.png",
    },
    {
        id:5,
        title:"Arabian-Impressions",
        img:"/arabian-impressions.png",
    },
    {
        id:6,
        title:"Maskati",
        img:"/maskati.png",
    },
    {
        id:7,
        title:"Aqua",
        img:"/aqua.png",
    },
    {
        id:8,
        title:"Awal-Press",
        img:"/awalpress.png",
    },
    {
        id:9,
        title:"bwbb",
        img:"/bwbb.png",
    },
    {
        id:10,
        title:"Imprensa",
        img:"/imprensa.png",
    },
    {
        id:11,
        title:"Arabian-Impressions",
        img:"/arabian-impressions.png",
    },
    {
        id:12,
        title:"Maskati",
        img:"/maskati.png",
    },
];

const Single = ({item}) =>{
    const ref = useRef();
    return (
       
                        <div className="imageContainer" ref={ref}>
                            <img src={item.img} title="{item.title}" />
                        </div>
                  
            );
    }
const Clients = () => {
    const ref = useRef();
    return (
        <section id="clients"> 
        <div className="clients" ref={ref}>
            <div>
                <h2>Clients</h2>
            </div>
                <div className="container">
                    <div className="wrapper">
            {items.map(item=>(
                <Single item ={ item} key= {item.id} />
            ))}
        </div>
        </div>
                </div>
                </section>
      )
}

export default Clients