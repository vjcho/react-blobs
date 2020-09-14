import moveBlobs from './moveBlobs';
import startGame from './startGame';
import movePlayer from './movePlayer';

const MOVE_BLOBS = "MOVE_BLOBS";
const START_GAME = "START_GAME";
const MOVE_PLAYER = "MOVE_PLAYER";

// const initialGameState = {
//   started: false,
//   kills: 0,
//   lives: 3,
//   flyingObjects: [],
//   lastObjectCreatedAt: new Date(),
//   currentPlayer: null,
//   players: null,
//   cannonBalls: [],
// };

// const initialState = {
//   angle: 45,
//   gameState: initialGameState,
// };

const initialGameState = {
	started: false,
	dead: false,
	score: 0,
	blobs: [],
	lastObjectCreatedAt: new Date(),
}

const initialState = {
	gameState: initialGameState,
	playerPosition: {x: 0, y: 0},
	playerSize: 5
}

function reducer(state=initialState, action) {
	switch (action.type) {
		case MOVE_BLOBS:
			return moveBlobs(state, action);
		case START_GAME:
			return startGame(state, initialGameState);
		case MOVE_PLAYER:
			console.log("move player case")
			return movePlayer(state, action);
		default:
			console.log("default")
			return state;
	}
}

export default reducer;