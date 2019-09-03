export const state = () => ({
  list: [],
  sub_total: 0
})

export const mutations = {
  add (state, obj) {
  	console.log('add method')
  	state.list.push(obj)
		/* SUBTOTAL VALUE */
  	state.sub_total = 0
  	state.list.map(item => {
  		state.sub_total += item.total_price
  	})
  	state.list.sub_total = state.sub_total
  },
  replace(state, payload) {
  	console.log('replace method')
		state.list[payload.index] = payload.obj
		/* SUBTOTAL VALUE */
  	state.sub_total = 0
  	state.list.map(item => {
  		state.sub_total += item.total_price
  	})
  	state.list.sub_total = state.sub_total
  },
  remove (state, { cart }) {
    state.list.splice(state.list.indexOf(cart), 1)
    /* SUBTOTAL VALUE */
  	state.sub_total = 0
  	state.list.map(item => {
  		state.sub_total += item.total_price
  	})
  	state.list.sub_total = state.sub_total
  }
}