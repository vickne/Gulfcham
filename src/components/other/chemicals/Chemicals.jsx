import React, { useState } from 'react';
import Other from '../Other';

const Chemicals = () => {
  const [expanded, setExpanded] = useState(false);

  const accordionIds = [
    // Add your FAQ data here
   {
      title:"How do I create an Accordion with React and Framer Motion",
      description:"Read Jasons Blog by going to this url -",
   }
  ];

  return (
    <section>
    <div style={{
        width:"80%",
        margin:"120px",
    }}>
      <h2 className="heading">TRADE</h2>
      <div className="chemical-items">
        {accordionIds.map((item, i) => (
          <Other
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Chemicals
