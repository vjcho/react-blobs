
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const createInterval = 1000;
const MAX_BLOB_SIZE = 100;
const MAX_SPEED = 50;
const MAX_BLOB_COUNT = 15;

function getRandomDirection() {
  return Math.random() < 0.5 ? 'LEFT' : 'RIGHT';
}

function getRandomSide() {
  // Either left or right side of canvas
  var x = CANVAS_WIDTH/2;
  x *= Math.random() < 0.5 ? 1 : -1;
  return x;
}

function getRandomY(size) {
  var negative = Math.random() < 0.5 ? 1 : -1;
  var y = Math.floor(Math.random() * (CANVAS_HEIGHT/2));
  y *= negative;
  return y;
}

function getRandomSize(playerSize) {
  // Make 40% of the blobs <= player size
  if (Math.random() <= 0.4) {
    return Math.floor(Math.random() * (playerSize - 1)) + 1;
  }
  return Math.floor(Math.random() * MAX_BLOB_SIZE);
}

function getRandomSpeed() {
  return Math.floor(Math.random() * MAX_SPEED);
}

function createNewBlobs(state) {
  /**
  Generate new blob
  Schema:
    position: {
      x: 5,
      y: -30
    },
    size: 3,
    speed: 5,
    direction: 'RIGHT'
  */
  const now = (new Date()).getTime();
  const { lastObjectCreatedAt } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    state.gameState.blobs.length < MAX_BLOB_COUNT
  );
  if (!createNewObject) return state;

  const id = (new Date()).getTime();
  const size = getRandomSize(state.playerSize);
  const blobX = getRandomSide();
  const blobY = getRandomY(size);
  const direction = getRandomDirection();
  const newBlob = {
    position: {
      x: blobX,
      y: blobY
    },
    direction: direction, // Direction the blob will move in. Either left or right
    size: size,
    speed: getRandomSpeed()
  };

  console.log("Creating new blob x: " + blobX + " y: " + blobY + " size: " + size);

  return {
    ...state,
    gameState: {
      ...state.gameState,
      blobs: [
        ...state.gameState.blobs,
        newBlob,
      ],
      lastObjectCreatedAt: new Date(),
    }
  }
}

function moveBlobs(state, action) {
  if (!state.gameState.started) return state;

  let newState = createNewBlobs(state);

  // Remove blobs that are out of screen
  let blobs = newState.gameState.blobs.filter(object => (
    object.position.x >= (CANVAS_WIDTH/-2 - MAX_BLOB_SIZE) &&
    object.position.x <= (CANVAS_WIDTH/2 + MAX_BLOB_SIZE)
  ));

  for (var i = blobs.length - 1; i >= 0; i--) {
    let blob = blobs[i];

    // Check collision with player
    let playerSize = newState.playerSize;
    if (
      action.playerPosition.x + playerSize/2 >= blob.position.x - blob.size/2 &&
      action.playerPosition.x - playerSize/2 <= blob.position.x + blob.size/2 &&
      action.playerPosition.y + playerSize/2 >= blob.position.y - blob.size/2 &&
      action.playerPosition.y - playerSize/2 <= blob.position.y + blob.size/2
    ) {
      if (playerSize > blob.size) {
        blobs.splice(i, 1);
        newState.playerSize++;
        newState.gameState.score++;
      } else {
        newState.gameState.dead = true;
        newState.gameState.started = false;
      }

    }

    // Move blobs
    if (blob.direction == 'LEFT')
      blob.position.x -= blob.speed;
    else
      blob.position.x += blob.speed;
  }

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      blobs
    },
  };
}

export default moveBlobs;
