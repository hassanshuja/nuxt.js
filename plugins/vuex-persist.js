// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist'
 
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
    	key: 'vuex',
      storage: window.localStorage,
      reducer: state => ({
        carts: state.carts,
      })
    }).plugin(store);
  });
}