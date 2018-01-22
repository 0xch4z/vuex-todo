<template>
  <ul class="todo-root">
    <p class="todo-title">{{ item.title }}</p>
    <icon-button
      class="todo-complete-button"
      @clicked="handleComplete"
      hint="complete"
      icon="done"
    />
    <icon-button
      class="todo-delete-button"
      @clicked="handleDelete"
      hint="delete"
      icon="close"
    />
  </ul>
</template>
<script>
import IconButton from './IconButton'

export default {
  title: 'todo',
  props: {
    item: {
      type: Object,
      default: () => ({
        id: '64B85E5A-EA39-4979-B7CC-3BE17562D058',
        title: 'Title',
        isComplete: false,
      })
    }
  },
  components: { IconButton },
  methods: {
    handleComplete () {
      this.$emit('complete')
    },
    handleDelete () {
      this.$emit('delete')
    },
  }
}
</script>

<style>
.todo-root {
  color: #999;
  width: 100%;
  height: 50px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-title {
  color: #555;
  flex-grow: 1;
  text-align: left;
}

.todo-complete-button:hover {
  color: seagreen;
}

.todo-delete-button:hover {
  color: #f44;
}
</style>
