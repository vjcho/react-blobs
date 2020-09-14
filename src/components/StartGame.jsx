import React from 'react';
import PropTypes from 'prop-types';

const canvasHeight = 500;
const canvasWidth = 500;

const StartGame = (props) => {
  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: 0, // 440 up
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 45,
      fill: 'black',
      cursor: 'pointer',
    },
    onClick: props.onClick
  };

  return (
    <g>
      <text {...text}>
        Start Game
      </text>
    </g>
  );
};

StartGame.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartGame;