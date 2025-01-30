import React from "react";
import "./RoleCard.css";

const RoleCard = ({ title, descriptionList, buttonText, image, isDark }) => {
  return (
    <div className={`role-card ${isDark ? "dark" : "light"}`}>
      <div className="role-card-content">
        <h2>{title}</h2>
        <ul>
          {descriptionList.map((item, index) => (
            <li key={index}>
              <span>{item.icon}</span> {item.text}
            </li>
          ))}
        </ul>
        <button className={`role-button ${isDark ? "dark-btn" : "light-btn"}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RoleCard;