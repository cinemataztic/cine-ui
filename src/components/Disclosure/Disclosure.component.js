import React from 'react';
import PropTypes from 'prop-types';
import './Disclosure.styles.css';
import { Disclosure as HeadlessDisclosure } from '@headlessui/react';

const Disclosure = ({ panelContent, buttonContent }) => {
  return (
    <>
      <HeadlessDisclosure>
        {({ open }) => (
          <div
            className={`bg-tertiary bg-opacity-90 rounded-lg py-2 px-4 w-full`}
          >
            <HeadlessDisclosure.Button className="flex justify-between w-full">
              <div className="text-white text-lg pt-1">{buttonContent}</div>
              <div className="py-3">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC41OSAwLjU4OTk5Nkw2IDUuMTdMMS40MSAwLjU4OTk5NkwwIDJMNiA4TDEyIDJMMTAuNTkgMC41ODk5OTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                  alt="Down Arrow"
                  className={`${open ? 'transform rotate-180' : ''}`}
                />
              </div>
            </HeadlessDisclosure.Button>
            <HeadlessDisclosure.Panel className="text-white my-2.5">
              {panelContent()}
            </HeadlessDisclosure.Panel>
          </div>
        )}
      </HeadlessDisclosure>
    </>
  );
};

export default Disclosure;

Disclosure.propTypes = {
  panelContent: PropTypes.func,
  buttonContent: PropTypes.string,
};
