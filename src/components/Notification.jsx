import React from "react";

const Notification = ({ renderNotification }) => {
  return (
    <div
      className={`notification-container ${renderNotification ? "show" : ""}`}
    >
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
