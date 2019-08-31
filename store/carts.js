export const state = () => ({
  list: []
})

export const mutations = {
  add (state, obj) {
  	console.log('add method')
  	state.list.push(obj)
  },
  replace(state, payload) {
  	console.log('replace method')
		state.list[payload.index] = payload.obj
  },
  remove (state, { cart }) {
    state.list.splice(state.list.indexOf(cart), 1)
  }
}