import React from 'react';
import PropTypes from 'prop-types';
import './Disclosure.styles.css';
import { Disclosure } from '@headlessui/react';

const DisclosureComponent = ({
  panelContent,
  buttonContent,
  width,
}) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <div className={`bg-secondary bg-opacity-90 rounded-lg ${width} p-3`}>
            <Disclosure.Button className='flex justify-between w-full'>
              <span className='text-white'>{buttonContent}</span>
              <span className='p-2'>
                <img
                  src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC41OSAwLjU4OTk5Nkw2IDUuMTdMMS40MSAwLjU4OTk5NkwwIDJMNiA4TDEyIDJMMTAuNTkgMC41ODk5OTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'
                  alt='Down Arrow'
                  className={`${open ? 'transform rotate-180' : ''}`}
                />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className='text-white my-2.5'>
              {panelContent()}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </>
  );
};

export default DisclosureComponent;

DisclosureComponent.propTypes = {
  panelContent: PropTypes.func,
  buttonContent: PropTypes.string,
  width: PropTypes.string,
};
