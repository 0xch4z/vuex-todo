import uuid from 'uuid/v4'

export default class Todo {
  constructor (title) {
    this.id = uuid()
    this.title = title
    this.isComplete = false
  }
}
