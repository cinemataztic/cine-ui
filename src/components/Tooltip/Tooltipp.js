import React, { useState } from 'react';

const Tooltipp = ({ text, children,position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

// Classes for tooltip position and arrow direction
const positionClasses = {
  top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
  right: 'left-full ml-2 top-1/2 transform -translate-y-1/2',
  bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
  left: 'right-full mr-2 top-1/2 transform -translate-y-1/2'
};

const arrowClasses = {
  top: 'left-1/2 transform -translate-x-1/2 -bottom-1.5 border-l-8 border-r-8 border-t-8 border-t-gray-700 border-transparent',
  right: 'top-1/2 transform -translate-y-1/2 -left-1.5 border-t-8 border-b-8 border-r-8 border-r-gray-700 border-transparent',
  bottom: 'left-1/2 transform -translate-x-1/2 -top-1.5 border-l-8 border-r-8 border-b-8 border-b-gray-700 border-transparent',
  left: 'top-1/2 transform -translate-y-1/2 -right-1.5 border-t-8 border-b-8 border-l-8 border-l-gray-700 border-transparent'
};

return (
  <div
    className="relative "
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
  >
    {children}
    {isVisible && (
      <div className={`absolute ${positionClasses[position]} w-52 p-2 bg-hover text-default text-base font-normal rounded shadow-lg`}>
        {text}
        <div className={`absolute ${arrowClasses[position]}`}></div>

      </div>
    )}
  </div>
);
};
export default Tooltipp;
