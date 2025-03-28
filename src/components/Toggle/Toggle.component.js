import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ enabledLabel, disabledLabel, size, onChange, disabled }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggle = () => {
    if (!disabled) {
      const newState = !isEnabled;
      setIsEnabled(newState);
      onChange(newState);
    }
  };

  const sizeStyle = size === 'sm' ? 'w-10 h-5' : 'w-14 h-7';
  const circleSize = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';
  const enabledBg = 'bg-white';
  const defaultBg = 'bg-white border border-gray-300';
  const circleColor = isEnabled ? 'bg-buttonPrimary' : disabled ? 'bg-gray-400' : 'bg-gray-700';

  return (
    <div className="flex items-center gap-2">
      <button
        className={`relative flex items-center rounded-full transition ${sizeStyle} ${
          isEnabled ? enabledBg : defaultBg
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={toggle}
        disabled={disabled}
      >
        <span
          className={`absolute left-1 flex items-center justify-center transition-transform ${
            isEnabled ? 'translate-x-full' : 'translate-x-0'
          } ${circleSize} ${circleColor} rounded-full shadow-md`}
        />
      </button>

      <span className="text-white font-semibold">
        {isEnabled ? enabledLabel : disabledLabel}
      </span>
    </div>
  );
};

Toggle.propTypes = {
  enabledLabel: PropTypes.string,
  disabledLabel: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Toggle.defaultProps = {
  enabledLabel: 'On',
  disabledLabel: 'Off',
  size: 'lg',
  onChange: () => {},
  disabled: false,
};

export default Toggle;
