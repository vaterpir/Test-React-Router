import React, { useState } from "react";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      Профиль
      <div className="profileAvatar">
        <div></div>
      </div>
      <div className="profileContent"></div>
    </div>
  );
};
