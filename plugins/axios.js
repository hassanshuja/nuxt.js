export default function ({$axios,store,app,redirect}) {
    /*$axios.onRequest(config => {
        console.log(config);
        //const locale = store.locale['lang/locale']
        const locale = store.state.locale
        if (locale) {
            config.headers.common['lang'] = locale
        }
    })*/
    $axios.interceptors.request.use(request => {
       // request.baseURL = 'https://api.com/api/'

        /*// Get token from auth.js store
        const token = store.state.token

        // Update token axios header
        if (token) {
            request.headers.common['Authorization'] = token
        }*/
        const locale = store.state.locale
        if (locale) {
            request.headers.common['lang'] = locale
        }
        return request
    })
}