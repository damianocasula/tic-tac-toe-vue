<template>
  <div>
    <select name="currentPlayer" id="current-player" v-model="currentPlayer">
      <option value="1">Cross</option>
      <option value="2">Circle</option>
    </select>

    <div class="tic-tac-toe">
      <div
        class="cell"
        v-for="(value, index) in [].concat.apply([], board)"
        :key="index"
        @mouseover="value.hover = true"
        @mouseleave="value.hover = false"
        @click="clickedCell()"
      >
        <CrossSymbol v-show="value.status == 1" />
        <CircleSymbol v-show="value.status == 2" />
        <CrossSymbol
          opacity="0.5"
          v-show="value.hover && currentPlayer == 1 && value.status == 0"
        />
        <CircleSymbol
          opacity="0.5"
          v-show="value.hover && currentPlayer == 2 && value.status == 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CrossSymbol from '@/components/Cross'
import CircleSymbol from '@/components/Circle'

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
      board: [
        [{ status: 1, hover: false }, { status: 2, hover: false }, { status: 0, hover: false }],
        [{ status: 0, hover: false }, { status: 1, hover: false }, { status: 2, hover: false }],
        [{ status: 2, hover: false }, { status: 0, hover: false }, { status: 0, hover: false }]
      ],
      currentPlayer: 1
    }
  },
  methods: {
    clickedCell () {

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
