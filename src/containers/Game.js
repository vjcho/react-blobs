import { connect } from 'react-redux';
import App from '../App';


const moveBlobs = playerPosition => ({
  type: 'MOVE_BLOBS',
  playerPosition,
});

const startGame = () => ({
  type: 'START_GAME',
});

const movePlayer = playerPosition => ({
  type: 'MOVE_PLAYER',
  playerPosition
})

const mapStateToProps = state => ({
  playerSize: state.playerSize,
  playerPosition: state.playerPosition,
  gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
  moveBlobs: (playerPosition) => {
    dispatch(moveBlobs(playerPosition));
  },
  startGame: () => {
    dispatch(startGame());
  },
  movePlayer: (playerPosition) => {
    dispatch(movePlayer(playerPosition));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
