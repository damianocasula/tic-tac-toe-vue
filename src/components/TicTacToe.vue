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
        <CrossSymbol v-show="cellData.status === 1" />
        <CircleSymbol v-show="cellData.status === 2" />
        <CrossSymbol
          opacity="0.5"
          v-show="
            cellData.hover && currentPlayer === 1 && cellData.status === 0
          "
        />
        <CircleSymbol
          opacity="0.5"
          v-show="
            cellData.hover && currentPlayer === 2 && cellData.status === 0
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import CrossSymbol from '@/components/Cross'
import CircleSymbol from '@/components/Circle'

const getCleanBoard = () => [
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }],
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }],
  [{ status: 0, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }]
]

export default {
  name: 'TicTacToe',
  components: {
    CrossSymbol,
    CircleSymbol
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
        const verticalIndex = Math.floor(index / 3)
        const horizontalIndex = index % 3
        this.board[verticalIndex][horizontalIndex].status = this.currentPlayer
        this.currentPlayer = this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1
      }
    },
    resetBoard () {
      this.board = getCleanBoard()
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
