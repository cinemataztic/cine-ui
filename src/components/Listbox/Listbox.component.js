import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Listbox.styles.css';
import { Listbox } from '@headlessui/react';

const MyListbox = ({ results }) => {
  const [selectedAd, setSelectedAd] = useState(results[0]);

  return (
    <Listbox as='div' value={selectedAd} onChange={setSelectedAd}>
      <Listbox.Button
        className={`border-2 border-gray-600 focus:border-primary bg-gray-600 text-white w-96 h-10 rounded-lg text-left pl-3`}
      >
        <span className={`flex justify-between`}>
          <span>{selectedAd.ad}</span>
          <span>
            <img src='https://img.icons8.com/material-sharp/24/ffffff/expand-arrow--v1.png' />
          </span>
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={`border-2 border-gray-600 focus:border-primary bg-gray-600 text-white w-96 rounded-lg text-left pl-3`}
      >
        {results.map((advertisement) => (
          <Listbox.Option
            key={advertisement.id}
            value={advertisement}
            hidden={advertisement.disabled}
            className={`m-2`}
          >
            {advertisement.ad}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default MyListbox;

MyListbox.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};
