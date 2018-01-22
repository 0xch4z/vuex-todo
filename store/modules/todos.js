import { Todo } from '@/models'
import {
  CREATE_TODO,
  DELETE_TODO,
  COMPLETE_TODO
} from '@/store/mutations'

export default {
  state: {
    todos: []
  },
  mutations: {
    [CREATE_TODO] (state, { title }) {
      const todo = new Todo(title)
      state.todos.push(todo)
    },
    [DELETE_TODO] (state, { id }) {
      state.todos = state.todos.filter(t => t.id !== id)
    },
    [COMPLETE_TODO] (state, { todo }) {
      todo.isComplete = true
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    },
    activeTodos (state) {
      return state.todos.filter(t => !t.isComplete)
    },
  }
}
