import React from 'react';
import PropTypes from 'prop-types';
import { Listbox as HeadlessListBox } from '@headlessui/react';
import { Spinner } from '../..';

import './Listbox.styles.css';

function LabelForValue({
  value,
  options = [],
  placeholder,
  loading,
  loadingPlaceholder,
}) {
  // Check if we're loading the options
  if (loading) {
    if (loadingPlaceholder) return loadingPlaceholder;
    return placeholder;
  }

  // Check if we have a value
  if (!value && typeof value !== 'boolean') return placeholder;

  // Find the option that matches the value
  const selectedOption = options.filter((option) => option.value === value);

  // Check that there is no duplicate values
  if (selectedOption.length > 1) {
    console.warn('More than one label/option pair with same value.');
    return selectedOption[0].label;
  }

  // Check that there is an option with the given value
  if (selectedOption.length === 0) {
    console.warn(`No label/option pair with value ${value}`);
    return placeholder;
  }

  return selectedOption[0].label;
}

const ListBox = ({
  options,
  value,
  onChange,
  placeholder,
  emptyHeader,
  emptyExplanation,
  emptyCTA,
  loading,
  loadingPlaceholder,
  className,
  onBlur,
}) => {
  return (
    <HeadlessListBox
      disabled={loading}
      as="div"
      value={value}
      onChange={onChange}
      className={`relative ${className}`}
      onBlur={onBlur}
    >
      <HeadlessListBox.Button className="border-2 border-secondary focus:border-primary bg-tertiary text-white w-full h-12 rounded-lg text-left pl-4 ">
        <span className="flex justify-between">
          <LabelForValue
            value={value}
            options={options}
            placeholder={placeholder}
            loading={loading}
            loadingPlaceholder={loadingPlaceholder}
          />

          {loading ? (
            <span className="mr-4">
              <Spinner size="small" />
            </span>
          ) : (
            <span className="mt-2 mr-4">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC41OSAwLjU5MDAyN0w2IDUuMTcwMDNMMS40MSAwLjU5MDAyN0wwIDIuMDAwMDNMNiA4LjAwMDAzTDEyIDIuMDAwMDNMMTAuNTkgMC41OTAwMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                alt="Down Arrow"
              />
            </span>
          )}
        </span>
      </HeadlessListBox.Button>
      <HeadlessListBox.Options className="border-2 border-secondary focus:border-primary bg-tertiary w-full rounded-lg max-h-80 overflow-y-auto text-white absolute">
        {options.length > 0 ? (
          options.map((option) => (
            <HeadlessListBox.Option key={option.value} value={option.value}>
              {({ active, selected }) => (
                <div
                  className={`cursor-pointer hover:bg-hover text-left px-4 py-2 rounded-lg  ${
                    active || selected ? 'bg-hover' : null
                  }`}
                >
                  {option.label}
                </div>
              )}
            </HeadlessListBox.Option>
          ))
        ) : emptyHeader ? (
          <div className="m-10 text-center">
            <p className="text-2xl font-bold">{emptyHeader}</p>
            {emptyExplanation && (
              <p className="text-xl mt-6">{emptyExplanation}</p>
            )}
            {emptyCTA && (
              <p className="text-xl mt-4">
                {emptyCTA.text}
                <span className="ml-2 text-primary ">
                  <button onClick={emptyCTA.onClick}>here</button>
                </span>
              </p>
            )}
          </div>
        ) : (
          <p className="text-2xl font-bold m-10 text-center">
            We couldn't find any options.
          </p>
        )}
      </HeadlessListBox.Options>
    </HeadlessListBox>
  );
};

export default ListBox;

ListBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  emptyHeader: PropTypes.string,
  emptyExplanation: PropTypes.string,
  emptyCTA: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  loading: PropTypes.bool,
  onBlur: PropTypes.func,
  loadingPlaceholder: PropTypes.string,
  className: PropTypes.string,
};
