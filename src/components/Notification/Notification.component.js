import React from 'react';
import PropTypes from 'prop-types';
import './Notification.styles.css';

const Notification = ({ title, text, iconUrl }) => {
  return (
    <div className="w-full bg-hover rounded-lg mt-8 p-5 flex justify-between text-white">
      <div className="mr-2 pt-1 shrink-0">
        <img className="w-full" src={iconUrl} alt="notification" />
      </div>

      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-base mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  type: 'Title',
  text: 'Paragraph',
};
