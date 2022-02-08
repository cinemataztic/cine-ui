import React from 'react';
import PropTypes from 'prop-types';
import './Notification.styles.css';

function getIcon(type) {
  switch (type) {
    case 'error':
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTNIMTFWMTVIOVYxM1pNOSA1SDExVjExSDlWNVpNOS45OSAwQzQuNDcgMCAwIDQuNDggMCAxMEMwIDE1LjUyIDQuNDcgMjAgOS45OSAyMEMxNS41MiAyMCAyMCAxNS41MiAyMCAxMEMyMCA0LjQ4IDE1LjUyIDAgOS45OSAwWk0xMCAxOEM1LjU4IDE4IDIgMTQuNDIgMiAxMEMyIDUuNTggNS41OCAyIDEwIDJDMTQuNDIgMiAxOCA1LjU4IDE4IDEwQzE4IDE0LjQyIDE0LjQyIDE4IDEwIDE4WiIgZmlsbD0iIzI3MjcyNyIvPgo8L3N2Zz4K';
    case 'warning':
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMiAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDMuOTlMMTguNTMgMTdIMy40N0wxMSAzLjk5Wk0xMSAwTDAgMTlIMjJMMTEgMFpNMTIgMTRIMTBWMTZIMTJWMTRaTTEyIDhIMTBWMTJIMTJWOFoiIGZpbGw9IiMyNzI3MjciLz4KPC9zdmc+Cg==';
    case 'info':
    default:
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgNUgxMVY3SDlWNVpNOSA5SDExVjE1SDlWOVpNMTAgMEM0LjQ4IDAgMCA0LjQ4IDAgMTBDMCAxNS41MiA0LjQ4IDIwIDEwIDIwQzE1LjUyIDIwIDIwIDE1LjUyIDIwIDEwQzIwIDQuNDggMTUuNTIgMCAxMCAwWk0xMCAxOEM1LjU5IDE4IDIgMTQuNDEgMiAxMEMyIDUuNTkgNS41OSAyIDEwIDJDMTQuNDEgMiAxOCA1LjU5IDE4IDEwQzE4IDE0LjQxIDE0LjQxIDE4IDEwIDE4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==';
  }
}

const getBgAndTextColor = (type) => {
  switch (type) {
    case 'error':
      return 'bg-danger text-secondary';
    case 'warning':
      return 'bg-warning text-secondary';
    case 'info':
    default:
      return 'bg-hover text-white';
  }
};

const Notification = ({ title, text, type, icon, className }) => {
  const color = getBgAndTextColor(type);

  return (
    <div className={`w-full rounded-lg mt-8 p-5 flex ${color} ${className}`}>
      {icon ? (
        icon()
      ) : (
        <div className={`mr-2 pt-1 shrink-0`}>
          <img className="w-full" src={getIcon(type)} alt="notification" />
        </div>
      )}
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
  icon: PropTypes.func,
  type: PropTypes.oneOf(['info', 'warning', 'error']),
  className: PropTypes.string,
};

Notification.defaultProps = {
  title: 'Title',
  text: 'Paragraph',
  type: 'info',
};
