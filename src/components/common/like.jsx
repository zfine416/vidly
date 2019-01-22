import React from "react";

// input: liked: boolean
// output: onClick

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.addLike}
      className={classes}
    />
  );
};

export default Like;
