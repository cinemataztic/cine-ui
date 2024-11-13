import React from 'react';
import PropTypes from 'prop-types';
import Tooltipp from './Tooltipp.js';

const Tooltip = () => {
  return (
    <div className="flex justify-center items-center h-screen">
  <Tooltipp text="Lorem ipsum solor sit at amet, consectetur dolor adipiscing elit." position="right">
  <img
               src="https://img.icons8.com/color/30/00FFFF/info.png"
               className="icon"
              />
    </Tooltipp>
  </div>

  );
};

export default Tooltip;
