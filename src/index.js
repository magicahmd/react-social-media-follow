import React from "react";

const FollowAt = props => {
  const { width, height, color, text } = props;
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue"
      }}
    >
      {text} ahaa
    </div>
  );
};

export default FollowAt;