export const state = () => ({
  list: [],
  sub_total: 0,
  final_detail: []
})

export const mutations = {
  add (state, obj) {
  	state.list.push(obj)
		/* SUBTOTAL VALUE */
  	state.sub_total = 0
  	state.list.map(item => {
  		state.sub_total += item.total_price
  	})
  	state.list.sub_total = state.sub_total
  },
  replace(state, payload) {
	
	
	state.list.splice(payload.index)
	state.list[payload.index] = payload.obj
	state.list[payload.index].total_price = parseInt(state.list[payload.index].selected_quantity) * parseInt(payload.obj.price)
		/* SUBTOTAL VALUE */
  	state.sub_total = 0
  	state.list.map(item => {
  		state.sub_total += item.total_price
  	})
	  state.list.sub_total = state.sub_total
	  state.carts.discount.subtotal_after_discount = 1110000
  },
  payment(state, payload) {
	//   console.log('payment')
	state.final_detail = payload
	// console.log(payload, state)
  },
  cart_discount(state, payload){
	console.log('discount')
	state.discount = payload
  },
  remove (state,  cart) {
	// var oldbag = state.list
	var newbag = state.list.splice(state.list.indexOf(cart), 1)
	// console.log(state.list, cart, state.list.indexOf(cart))

	state.list.cart = newbag
    /* SUBTOTAL VALUE */
  	state.sub_total = 0
  	state.list.map(item => {
  		state.sub_total += item.total_price
  	})
  	state.list.sub_total = state.sub_total
  }
}

export const getters = {
    carts (state) {
		// console.log(state.list)
        return state.list
    }
}
