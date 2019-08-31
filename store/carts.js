export const state = () => ({
  list: []
})

export const mutations = {
  add (state, obj) {
    state.list.push(obj)
  },
  remove (state, { cart }) {
    state.list.splice(state.list.indexOf(cart), 1)
  }
}