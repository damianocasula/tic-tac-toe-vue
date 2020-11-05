<template>
  <div class="tic-tac-toe">
    <div class="cell" v-for="value in [].concat.apply([], board)" :key="value">
      <CrossSymbol v-show="value == 1" />
      <CircleSymbol v-show="value == 2" />
    </div>
  </div>
</template>

<script>
import CrossSymbol from '@/components/Cross'
import CircleSymbol from '@/components/Circle'

export default {
  name: 'TicTacToe',
  data () {
    return {
      board: [
        [1, 2, 0],
        [0, 1, 2],
        [2, 0, 0]
      ]
    }
  },
  components: {
    CrossSymbol,
    CircleSymbol
  },
  props: {
    msg: String
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

    &:hover {
      background-color: $light-main-color;
      /* TODO: when hovering, display a low-opacity version of the symbol of the player in the turn */
    }
  }
}
</style>
