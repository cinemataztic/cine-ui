import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.styles.css';

const Checkbox = React.forwardRef(
  ({ id, name, checked, onChange, label, className }, ref) => {
    return (
      <div className={`inline-block ${className}`}>
        <label
          htmlFor={id}
          className="flex items-center cursor-pointer text-white"
        >
          <div className="relative h-5">
            <input
              type="checkbox"
              id={id}
              name={name}
              label={label}
              checked={checked}
              onChange={onChange}
              ref={ref}
              className="appearance-none h-5 w-5 bg-white rounded-sm checked:bg-buttonPrimary"
            />
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuOTk5OTEgMTEuMTdMMS44Mjk5MSA2Ljk5OTk3TDAuNDA5OTEyIDguNDA5OTdMNS45OTk5MSAxNEwxNy45OTk5IDEuOTk5OTdMMTYuNTg5OSAwLjU4OTk2Nkw1Ljk5OTkxIDExLjE3WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
              className="h-3 absolute top-1 left-0.5 invisible check-1"
              alt="tick"
            />
          </div>
          <div>
            <span className="px-2 h-5">{label} </span>
          </div>
        </label>
      </div>
    );
  },
);

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
};
