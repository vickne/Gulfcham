import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {useRef} from "react";


const Other = () => {
 const chemlist = [
    { name: 'HOT-MELT ADHESIVE (HMA)', lists: ['Aquence LAM 7060', 'Aquence 7093',
'Aquence BG 6291',
'Aquence 48345',
'Aquence GA 060',
'Aquence LA 10',
'Aquence 709 H',
'Aquence Seal 0106'] },
    { name: 'AQUENCE-WATER BASED ADHESIVE', lists: ['Aquence LAM 7060', 'Aquence 7093',
'Aquence BG 6291',
'Aquence 48345',
'Aquence GA 060',
'Aquence LA 10',
'Aquence 709 H',
'Aquence Seal 0106'] },
    { name: 'Other Chemicals', lists: ['NATURAL HYDRAULIC LIME', 'FABRIC SOFTENER BASE', 'SOFTENER SALT', 'CAUSTIC SODA','THINNER'] },
  ];

  return (
    <div>
      <h1>Other</h1>
      {chemlists.map((chemlist, index) => (
        <div key={index}>
          <h2>{chemlist.name}</h2>
          <ul>
            {chemlist.lists.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Other
