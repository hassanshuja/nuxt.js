import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,{
    preLoad: 1.3,
    loading: 'images/loading.gif',
    attempt: 1,
    observer: true,
   /* observerOptions: {
        rootMargin :  " 0px " ,
        threshold: 0.1
    }*/
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    //listenEvents: [ 'scroll' ]
});