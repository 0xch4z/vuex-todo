<template>
  <li class="todo-root">
    <p 
      class="todo-title"
      :style="{ textDecoration: item.isComplete ? 'line-through' : 'none' }"
    >
      {{ item.title }}
    </p>
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
  </li>
</template>
<script>
import { Todo } from '@/models'
import IconButton from './IconButton'

export default {
  title: 'todo',
  props: { item: Todo },
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
