<template>
  <div>
    <div class="reset-board-container">
      <button class="reset-board" @click="resetBoard()">Reset board</button>
    </div>

    <div class="tic-tac-toe">
      <div
        class="cell"
        v-for="(cellData, index) in [].concat.apply([], board)"
        :key="index"
        @mouseover="cellData.hover = true"
        @mouseleave="cellData.hover = false"
        @click="clickedCell(cellData, index)"
      >
        <Mark :type="cellData.status" v-show="cellData.status" />
        <Mark
          :type="currentPlayer"
          opacity="0.5"
          v-show="cellData.hover && cellData.status === 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Mark from '@/components/Mark'

// Initial game board matrix
const getCleanBoard = () => [
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }],
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }],
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }]
]

// Check if all row cell statuses are equal
const allEqual = arr => arr.every(val => val.status === arr[0].status)

export default {
  name: 'TicTacToe',
  components: {
    Mark
  },
  props: {
    msg: String
  },
  data () {
    return {
      board: getCleanBoard(),
      currentPlayer: 1
    }
  },
  methods: {
    clickedCell (cellData, index) {
      if (!cellData.status) {
        // Calculate horizontal and vertical indexes of the game board matrix
        const hIdx = Math.floor(index / 3)
        const vIdx = index % 3

        // Update game board matrix cell
        this.board[hIdx][vIdx].status = this.currentPlayer

        // Check if the move is a winning one
        if (this.simpleWinAlgo(hIdx, vIdx)) {
          // Retrieve the current player's mark name
          const markName = this.currentPlayer - 1 ? 'Circles' : 'Crosses'

          // Announce the winner
          alert(`${markName} won!`)

          // Reset the game board
          this.resetBoard() // TODO: don't reset board instantly, but make it unplayable afterwars, and prompt for a new game
        } else {
          // Switch current player
          this.currentPlayer = !(this.currentPlayer - 1) + 1
        }
      }
    },
    resetBoard () {
      this.board = getCleanBoard()
    },
    simpleWinAlgo (hIdx, vIdx) {
      // Check rows
      if (allEqual(this.board[hIdx])) { return true }

      // Check columns
      const column = []
      for (const row of this.board) {
        column.push(row[vIdx])
      }
      if (allEqual(column)) { return true }

      // Check diagonal
      if (hIdx === vIdx) {
        const diagonal = []
        for (const [i, row] of this.board.entries()) {
          diagonal.push(row[i])
        }
        if (allEqual(diagonal)) { return true }
      }

      // Check opposite diagonal
      // const oppositeDiagonalModel = [[0, 2], [1, 1], [2, 0]]
      // const oppositeDiagonal = []

      return false
    }

  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.tic-tac-toe {
  display: grid;
  grid-template-columns: repeat(3, $cell-size);
  grid-template-rows: repeat(3, $cell-size);
  grid-gap: $small-spacing;
  background-color: $main-color;

  .cell {
    background-color: white; /* TODO: make it a variable */
    display: flex;
    justify-content: center;
    align-items: center;

    .symbol {
      color: $main-color;
      width: 100%;
      height: 100%;

      &.cross {
        color: $accent-color;
      }
    }
  }
}
</style>
