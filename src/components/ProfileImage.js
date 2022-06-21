import React from "react";

function ProfileImage({ src }) {
    return (
      <>
        <img src={src} className="profile" alt="profile" />
      </>
    );
  }
  
export default ProfileImage;