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
        title:"Al Farhan Plastic",
        img:"/al-farhan-plastic.png",
    },
    {
        id:8,
        title:"Dar Akhbar Al Khaleej",
        img:"/dar-akhbar-al-khaleej.png",
    },
    {
        id:9,
        title:"Ramez",
        img:"/ramez.png",
    },
    {
        id:10,
        title:"Jalal Lonics Co Wll",
        img:"/jalal-lonics-co-wll.png",
    },
    {
        id:11,
        title:"Wadi Al Salam Tissue",
        img:"/wadi-al-salam-tissue.png",
    },
    {
        id:12,
        title:"Global Water Bottling Company",
        img:"/global-water-bottling-co.png",
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