import React from 'react';
import PropTypes from 'prop-types';

const canvasHeight = 500;
const canvasWidth = 500;

const Dead = (props) => {
  const text = {
    textAnchor: 'middle', // center
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 25,
      fill: 'black',
    }
  };

  return (
    <g>
      <text {...text} x="0" y="-30" >
        Dead
      </text>
      <text {...text} x="0" y="0">
        Score: {props.score}
      </text>

      <text {...text} onClick={props.onClick} x="0" y="30" cursor="pointer" >
        Play Again
      </text>
    </g>
  );
};

export default Dead;