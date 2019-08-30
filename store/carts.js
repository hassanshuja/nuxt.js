export const state = () => ({
  list: []
})

export const mutations = {
  add (state, obj) {
    state.list.push(obj)
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}