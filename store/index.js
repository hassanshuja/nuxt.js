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
    womenCategory:[]
});
export const mutations = {
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
    SET_BLOGS (state, common) {
        state.blogs = common
    },
    SET_BLOG (state, common) {
        state.blog = common
    },
    SET_BRANDS(state,brands){
        state.brands = brands
    },
    SET_MEN_CATEGORY(state,category){
        state.menCategory = category
    },
    SET_WOMEN_CATEGORY(state,category){
        state.womenCategory = category
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
    setMenCategory({commit,dispatch},category){
        commit('SET_MEN_CATEGORY', category);
    },
    setWomenCategory({commit,dispatch},category){
        commit('SET_WOMEN_CATEGORY', category);
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
    blogs (state) {
        return state.blogs
    },
    blog (state) {
        return state.blog
    },
    brands(state){
        return state.brands
    },
    common(state){
        return state.common
    }
}
