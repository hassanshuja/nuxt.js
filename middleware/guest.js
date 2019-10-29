export default function ({ store, redirect }) {
  console.log(store.state.auth)
    if (store.state.auth.loggedIn) {
      setTimeout(function(){
        return redirect('/mybag')
      },500)
      
    }
  }