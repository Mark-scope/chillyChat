import React, { useState } from 'react';
import chart from "../../assets/chart-2.png";
import call from "../../assets/call.png";
import graph from "../../assets/graph.png";
import message from "../../assets/messages.png";
import headphone from "../../assets/headphones.png";

function Lists(props) {
  return (
    <li className="w-full flex h-14 hover:bg-white hover:text-violet" id="list">
      <div className='mt-2 pl-16 '><img className="w-10" src={props.image} alt={props.item} /></div>
      <a href="#" className="w-full pl-4 h-full p-5 px-5 pl-0  text-white hover:text-violet" onMouseEnter={props.onHover}>
        {props.item}
      </a>
    </li>
  );
}

function Sublists(props) {
  return (
    <li className="w-full h-14 py-3 text-center hover:bg-white hover:text-violet">
      <a href="#" className="h-full p-5 border-b-2 inlne-block px-5 text-white hover:text-violet">
        {props.subitem}
      </a>
    </li>
  );
}

function Menus() {
  const subitems = ['Quick sms', 'Bulk sms', 'Sms History'];
  const images = [chart, call, message, graph, headphone];
  const items = ['Overview', 'Contacts', 'Sms', 'Report', 'Support'];
  const [showSubitems, setShowSubitems] = useState(false);

  const handleHover = (index) => {
    setShowSubitems(index === 2); // Show subitems if hovering over the third item
  };

  return (
    <div className="flex-col w-full h-80">
      <ul>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Lists item={item} image={images[index]} onHover={() => handleHover(index)} />
            {index === 2 && showSubitems && ( // Render subitems directly below the third item
              <div className="w-full h-auto">
                {subitems.map((subitem, subIndex) => (
                  <Sublists key={subIndex} subitem={subitem} />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Menus;
