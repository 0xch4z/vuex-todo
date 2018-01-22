<template>
  <el-tooltip
    class="icon-button-tooltip"
    v-bind:content="hint"
    placement="top"
  >
    <i
      @click="clicked"
      class="material-icons icon-button-root"
    >
      {{ icon }}
    </i>
  </el-tooltip>
</template>

<script>
export default {
  props: ['icon', 'hint'],
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style>
.icon-button-root {
  cursor: pointer;
}
</style>
