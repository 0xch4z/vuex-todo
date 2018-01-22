<template>
  <div>
    <el-input
      id="title-input"
      placeholder="What do you need todo?"
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
        @complete="handleComplete(item.id)"
        @delete="handleDelete(item.id)"
      />
    </ul>
  </div>
</template>

<script>
import { Todo } from '@/components'

export default {
  components: { Todo },
  data () {
    return {
      input: '',
      showCompleted: false,
      /* temp */
      todos: [
        {
          id: '1',
          title: 'Wash the dog',
          isComplete: false,
        },
        {
          id: '2',
          title: 'Buy some food',
          isComplete: false,
        }
      ]
    }
  },
  methods: {
    handleComplete (id) {
      console.log('will handle complete for id =>', id)
    },
    handleDelete (id) {
      console.log('will handle delete for id =>', id)
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
