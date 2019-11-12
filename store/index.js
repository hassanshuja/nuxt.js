export const strict = false
export const state = () => ({
    locales: ['en', 'id'],
    locale: 'en',
    categories: [],
    common:[],
    blogs:[],
    blog:[],
    brands:[],
    menCategory:[],
    womenCategory:[],
    isLoading: false,
    refCount: 0,
    ship_discount_methods : [],
    gender: null
});
export const mutations = {

    getshipping(state) {
        this.$axios.defaults.baseURL = process.env.baseURL
        this.$axios.$get('discount/shipping')
            .then(res => {
               state.ship_discount_methods = res
            //    console.log(res)
            }).catch(err => {
            // console.log(err, 'ererere')
        })

        console.log(state.ship_discount_methods)
    },

    loading(state, isLoading) {
        // console.log({isLoading})
        if (isLoading) {
            state.refCount++;
            state.isLoading = true;
        } else if (state.refCount > 0) {
            state.refCount--;
            state.isLoading = (state.refCount > 0);
            state.isLoading = false
        }
    },

    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    },

    SET_CATEGORIES (state, categories) {
        state.categories = categories
    },

    SET_COMMON (state, common) {
        state.common = common
    },
    SET_FEATURED_PRODUCTS (state, featuredProducts){
        state.featuredProducts = featuredProducts
    },
    
    SET_BLOGS (state, common) {
        console.log(common)
        state.blogs = common
    },
    SET_BLOG (state, common) {
        state.blog = common
    },
    SET_BRANDS(state,brands){
        state.brands = brands
    },
    SET_BRAND(state,brand){
        state.brand = brand
    },
    SET_MEN_CATEGORY(state,category){
        state.menCategory = category
    },
    SET_WOMEN_CATEGORY(state,category){
        state.womenCategory = category
    },
    SET_GENDER(state, gender){
        state.gender = gender
    }
}


export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
       let common = await this.$axios.$get('page/common');
       commit('SET_COMMON', common.data);
        let menCategory = await this.$axios.$get('men/category');
        commit('SET_MEN_CATEGORY', menCategory.data);
        let womenCategory = await this.$axios.$get('women/category');
        commit('SET_WOMEN_CATEGORY', womenCategory.data);
        /*if (this.$auth.loggedIn) {
            await dispatch('cart/getCart')
        }*/
    },
    setfeaturedProducts({commit, dispatch}, setfeaturedProducts){
        commit('SET_FEATURED_PRODUCTS', setfeaturedProducts)
    },
    setBlogs({commit,dispatch},blog){
        commit('SET_BLOGS', blog);
    },
    setBlog({commit,dispatch},blog){
        commit('SET_BLOG', blog);
    },
    setBlogDetail({commit,dispatch,state},slug){
        let blog = state.blogs.findIndex(function checkAdult(val) {
            return val.slug == slug;
        });
        commit('SET_BLOG', state.blogs[blog]);
    },
    setBrands({commit,dispatch},brands){
        commit('SET_BRANDS', brands);
    },
    setBrand({commit,dispatch},brand){
        console.log(brand, 'cmoadifnalsdflaskdjf;')
        commit('SET_BRAND', brand);
    },
    setMenCategory({commit,dispatch},category){
        commit('SET_MEN_CATEGORY', category);
    },
    setWomenCategory({commit,dispatch},category){
        commit('SET_WOMEN_CATEGORY', category);
    },
    setGender({commit, dispatch}, gender){
        commit('SET_GENDER', gender)
    }

}

export const getters = {
    categories (state) {
        return state.categories
    },
    menCategories (state) {
        return state.menCategory
    },
    womenCategories (state) {
        return state.womenCategory
    },
    featuredProducts (state) {
        return state.featuredProducts
    },
    blogs (state) {
        return state.blogs
    },
    blog (state) {
        return state.blog
    },
    brands(state){
        return state.brands
    },
    brand(state){
        return state.brand
    },
    common(state){
        return state.common
    },
    gender(state){
        return state.gender
    }
}
