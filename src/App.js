import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

class App extends Component {
  constructor(props) {
    super(props);
    this.movePlayer = this.movePlayer.bind(this);
    this.playerPosition = {
      x: 0,
      y: 0
    };
    this.playerSize = 5;
  }

  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveBlobs(self.props.playerPosition);
    }, 400);

    window.addEventListener("keydown", self.movePlayer);

    // window.onresize = () => {
    //   const cnv = document.getElementById('aliens-go-home-canvas');
    //   cnv.style.width = `${window.innerWidth}px`;
    //   cnv.style.height = `${window.innerHeight}px`;
    // };
    // window.onresize();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (!nextProps.gameState.started && this.props.gameState.started) {
  //     if (!this.currentPlayer) return;
  //     if (this.currentPlayer.maxScore < this.props.gameState.kills) {
  //       this.socket.emit('new-max-score', {
  //         ...this.currentPlayer,
  //         maxScore: this.props.gameState.kills,
  //       });
  //     }
  //   }
  // }

  movePlayer(event) {
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;
    const speed = 5;

    let newPlayerPosition = {...this.props.playerPosition};
    switch (event.keyCode) {
      case UP: // up
        newPlayerPosition.y -= speed;
        break;
      case DOWN: // down
        newPlayerPosition.y += speed;
        break;
      case LEFT: // left
        newPlayerPosition.x -= speed;
        break;
      case RIGHT: // right
        newPlayerPosition.x += speed;
        break;
      default: // do nothing
        return;
    }

    this.props.movePlayer(newPlayerPosition);
  }

  render() {
    return (
      <Canvas
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        movePlayer={event => (this.movePlayer(event))}
        playerPosition={this.props.playerPosition}
        playerSize={this.props.playerSize}
      />
    );
  }
}

// App.propTypes = {
//   score: PropTypes.number.isRequired,
//   gameState: PropTypes.shape({
//     started: PropTypes.bool.isRequired,
//     kills: PropTypes.number.isRequired,
//     lives: PropTypes.number.isRequired,
//   }).isRequired,
//   moveObjects: PropTypes.func.isRequired,
//   startGame: PropTypes.func.isRequired,
// };

// App.defaultProps = {
//   currentPlayer: null,
//   players: null,
// };

export default App;
