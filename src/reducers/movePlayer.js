function movePlayer(state, action) {
	return {
		...state,
		playerPosition: action.playerPosition,
	}
}

export default movePlayer;