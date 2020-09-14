function startGame(state, initialGameState) {
	// Reset player position and change start + dead states
	return {
		...state,
		gameState: {
			...initialGameState,
			started: true,
			dead: false
		},
		playerPosition: {
			x: 0,
			y: 0
		}
	}
}

export default startGame;