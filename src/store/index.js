/* global alert */

import Vue from 'vue'
import Vuex from 'vuex'
import simpleCheckAlgorithm from '@/common/simpleCheckAlgorithm'

Vue.use(Vuex)

// Initial game board matrix
const getCleanBoard = () => [
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }],
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }],
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }]
]

export default new Vuex.Store({
  state: {
    board: getCleanBoard(),
    currentPlayer: 1,
    mode: 'dark'
  },
  mutations: {
    resetBoard: state => { state.board = [...getCleanBoard()] },
    switchCurrentPlayer: state => { state.currentPlayer = !(state.currentPlayer - 1) + 1 },
    setCurrentPlayer: (state, player) => { state.currentPlayer = player },
    setMode: (state, mode) => { state.mode = mode },
    updateCell: (state, indexes) => { state.board[indexes.hIdx][indexes.vIdx].status = state.currentPlayer }
  },
  actions: {
    resetGame ({ commit }) {
      commit('resetBoard')
    },
    makeMove ({ commit, state }, { cellData, index }) {
      // Calculate horizontal and vertical indexes of the game board matrix
      const indexes = {
        hIdx: Math.floor(index / 3),
        vIdx: index % 3
      }

      // Update game board matrix cell
      commit('updateCell', indexes)

      // Check if the move is a winning one
      if (simpleCheckAlgorithm(state.board, indexes)) {
        // Retrieve the current player's mark name
        const markName = state.currentPlayer - 1 ? 'Circles' : 'Crosses'

        // Announce the winner
        alert(`${markName} won!`)
      } else if ([].concat.apply([], state.board).every(cell => cell.status !== 0)) {
        // Tied
        alert('It\'s a tie!')
      } else {
        // Switch current player
        commit('switchCurrentPlayer')
        return true
      }

      // Reset the game board
      commit('resetBoard') // TODO: don't reset board instantly, but make it unplayable afterwars, and prompt for a new game

      // Switch current player to 1 (Crosses)
      commit('setCurrentPlayer', 1)
    },
    toggleMode ({ commit, state }) {
      const newMode = state.mode === 'dark' ? 'light' : 'dark'
      commit('setMode', newMode)
    }
  },
  getters: {
    board: state => state.board,
    currentPlayer: state => state.currentPlayer,
    mode: state => state.mode
  }
})
