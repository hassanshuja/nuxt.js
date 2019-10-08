export default ({ app }) => {
    //console.log(app.router);
    app.router.afterEach((to, from) => {

        //$(document).trigger('router-loaded');
    })
}