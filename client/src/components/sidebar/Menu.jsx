import React, { useState } from 'react';

function Lists(props) {
  return (
    <li className="w-full h-14 text-center pt-4 hover:bg-white hover:text-violet">
      <a href="#" className="h-full p-5 px-11 text-white hover:text-violet" onMouseEnter={props.onHover}>
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
  const items = ['Overview', 'Contacts', 'Sms', 'Report', 'Support'];
  const [showSubitems, setShowSubitems] = useState(false);

  const handleHover = (index) => {
    setShowSubitems(index === 2); // Show subitems if hovering over the third item
  };

  return (
    <div className="flex-col w-full h-80 mt-20">
      <ul>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Lists item={item} onHover={() => handleHover(index)} />
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





export default Menus