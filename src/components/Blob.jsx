import React from 'react';
import PropTypes from 'prop-types';

const Blob = (props) => {
  if (Object.keys(props).length == 0) return null;

  // Adjust position for size of rectangle
  let newX = props.position.x - props.size/2;
  let newY = props.position.y - props.size/2;

  return (
    <rect
      x={newX}
      y={newY}
      width={props.size}
      height={props.size }
      fill="gray"
    >
    </rect>
  );
};

export default Blob;