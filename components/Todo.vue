<template>
  <ul class="todo-root">
    <p class="todo-title">Text</p>
    <icon-btn
      @clicked="handleComplete"
      hint="complete"
      icon="done"
    />
    <icon-btn
      @clicked="handleDelete"
      hint="delete"
      icon="close"
    />
  </ul>
</template>
<script>
import { IconButton } from './'

export default {
  components: { 'icon-btn': IconButton },
  methods: {
    handleComplete () {
      console.log('delete')
    },
    handleDelete () {
      console.log('trashed')
    },
  }
}
</script>

<style>
.todo-root {
  width: 100%;
  height: 50px;
  background-color: blue;
  border-radius: 10px;
  color: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-title {
  flex-grow: 1;
  text-align: left;
}
</style>
