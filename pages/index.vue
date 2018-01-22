<template>
  <div>
    <el-input
      id="title-input"
      placeholder="What do you need todo?"
      @keyup.native.enter="handleCreate"
      v-model="input"
    />
    <el-switch
      id="filter-switch"
      v-model="showCompleted"
      active-text="Show completed"
      inactive-color="#888"
    />
    <ul id="todos">
      <todo
        v-for="item in todos"
        v-bind:item="item"
        v-bind:key="item.id"
        @complete="handleComplete(item)"
        @delete="handleDelete(item.id)"
      />
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import { Todo } from '@/components'
import {
  CREATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from '@/store/mutations'

export default {
  components: { Todo },
  data () {
    return {
      input: '',
      showCompleted: false,
    }
  },
  methods: {
    ...mapMutations({
      createTodo: CREATE_TODO,
      deleteTodo: DELETE_TODO,
      completeTodo: COMPLETE_TODO,
    }),

    handleComplete (item) {
      this.completeTodo({ todo: item })
    },
    handleDelete (id) {
      this.deleteTodo({ id })
    },
    handleCreate () {
      this.createTodo({ title: this.input })
      this.input = ''
    }
  },
  computed: {
    todos () {
      const { allTodos, activeTodos } = this.$store.getters
      return this.showCompleted ? allTodos : activeTodos
    }
  }
}
</script>

<style>
#main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#title-input {
  margin-top: 50px;
  height: 50px;
  font-size: 1.3em;
  width: 60%;
  min-width: 400px;
  max-width: 800px;
}

#filter-switch {
  margin: 20px 0;
}

#todos {
  padding: 0;
  list-style-type: none;
  width: 40%;
  max-width: 530px;
  min-width: 375px;
}
</style>
