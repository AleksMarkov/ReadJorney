//Notification.jsx
import React from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #e90516;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Notification = ({ message, onClose }) => {
  return (
    <NotificationContainer>
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: '10px',
          background: 'transparent',
          border: 'none',
          color: 'var(--white)',
          cursor: 'pointer',
        }}
      >
        X
      </button>
    </NotificationContainer>
  );
};

export default Notification;
