import React from 'react';
import PropTypes from 'prop-types';
import './Disclosure.styles.css';
import { Disclosure } from '@headlessui/react';

const DisclosureComponent = ({
  panelContent,
  buttonContent,
  width,
  bgColor,
}) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <div className={`${bgColor} bg-opacity-90 rounded-lg ${width} p-3`}>
            <Disclosure.Button className={`flex justify-between w-full`}>
              <span className={`text-white`}>{buttonContent}</span>
              <span className={`p-2`}>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgBhYzREQAQDEPLRDbqKIxi06hTHFeVrzb3XogkABJ9shg5MkbYgVmZHOUP2ldL0q7qG2ZZsMPGck+5lw7JhR+SDz8kH74kE27czYwZeCNT6wAAAABJRU5ErkJggg=='
                  alt='Down Arrow'
                  className={`${open ? 'transform rotate-180' : ''}`}
                />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className={`text-white my-2.5 `}>
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
  bgColor: PropTypes.string,
};
