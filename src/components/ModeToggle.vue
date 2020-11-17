<template>
  <div :class="[mode === 'dark' ? 'dark' : 'light']" class="mode-toggle" @click="toggleMode()">
    <sun-icon v-if="mode === 'dark'" class="sun-icon"></sun-icon>
    <moon-icon v-if="mode === 'light'" class="moon-icon"></moon-icon>
  </div>
</template>

<script>
import { SunIcon, MoonIcon } from 'vue-feather-icons'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ModeToggle',
  components: {
    SunIcon,
    MoonIcon
  },
  methods: {
    ...mapActions(['toggleMode'])
  },
  computed: {
    ...mapGetters(['mode'])
  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.mode-toggle {
  padding: 5px 10px 0;

  &.dark {
    &:hover {
      background-color: $hover-color;
    }
  }

  &:hover {
    background-color: #f7f7f7;
    cursor: pointer;
    border-radius: $border-radius;
  }

  &:active {
    color: $secondary-color;
  }

  svg {
    width: 16px;
    stroke-width: 2.4px;
  }
}
</style>
