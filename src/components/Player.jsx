import React from 'react';
import PropTypes from 'prop-types';

const canvasHeight = 600;
const canvasWidth = 600;

const Player = (props) => {
  let size = props.playerSize;

  // Adjust position for size of player
  let newX = props.playerPosition.x - size/2;
  let newY = props.playerPosition.y - size/2;

  return (
    <rect
      id="player"
      x={newX}
      y={newY}
      width={size}
      height={size}
      fill="red"
    >
    </rect>
  );
};

export default Player;