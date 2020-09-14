import React from 'react';
import PropTypes from 'prop-types';
import StartGame from './StartGame';
import Dead from './Dead';
import Play from './Play';

const canvasHeight = 500;
const canvasWidth = 500;

const Canvas = (props) => {
  const viewBox = [canvasWidth / -2, canvasHeight / -2, canvasWidth, canvasHeight];

  var body;
  console.log("Dead: " + props.gameState.dead)

  if (props.gameState.started) {
    body = (
      <Play
        blobs={props.gameState.blobs}
        playerPosition={props.playerPosition}
        playerSize={props.playerSize}
      />
    )
  } else if (!props.gameState.started && !props.gameState.dead) {
    body = (
      <StartGame onClick={() => props.startGame()} />
    )
  } else if (props.gameState.dead) {
    body = (
      <Dead score={props.gameState.score} onClick={() => props.startGame()} />
    )
  }

  return (
    <svg
      width={canvasWidth + "px"}
      height={canvasHeight + "px"}
      id="game-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <rect
        x="-250"
        y="-250"
        width={canvasWidth}
        height={canvasHeight}
        style={{stroke: '#000000', fill: 'none'}}
      />

      {body}
    </svg>
  );
};


Canvas.defaultProps = {
  playerPosition: {x: 0, y:0}
};

export default Canvas;