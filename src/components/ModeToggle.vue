<template>
  <div class="mode-toggle" @click="toggleMode()">
    <sun-icon v-if="mode === 'dark'" class="sun-icon"></sun-icon>
    <moon-icon v-if="mode === 'light'" class="moon-icon"></moon-icon>
  </div>
</template>

<script>
import { SunIcon, MoonIcon } from 'vue-feather-icons'

export default {
  name: 'Mode Toggle',
  data () {
    return {
      mode: 'dark'
    }
  },
  components: {
    SunIcon,
    MoonIcon
  },
  methods: {
    toggleMode () {
      const newMode = this.mode === 'dark' ? 'light' : 'dark'
      this.mode = newMode
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.mode-toggle {
  padding: 5px 10px 0;

  &:hover {
    background-color: #f7f7f7;
    cursor: pointer;
    border-radius: 5px;
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
