import "clients.scss";
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
];

const Single = ({item}) =>{
    const ref = useRef();
    return (
        <section>
                <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer" ref={ref}>
                            <img src={item.img} title="{item.title}" />
                        </div>
                    </div>
                </div>
            </section>
            );
    }
const Clients = () => {
    return (
        <div className="clients" ref={ref}>
            <div className="progress">
                <h2>Clients</h2>
            </div>
            {items.map(item=>(
                <Single item ={ item} key= {item.id} />
            ))}
        </div>
      )
}

export default Clients