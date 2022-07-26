import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import c_menu from './components/menu.js'
Vue.component('c-menu', c_menu)

import c_footer from './components/footer.js'
Vue.component('c-footer', c_footer)


import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_sobre from './view/sobre/home.js'
Vue.component('p-sobre', page_sobre)
 
import page_servico from './view/servico/home.js'
Vue.component('p-servico', page_servico)

import page_contacto from './view/contacto/home.js'
Vue.component('p-contacto', page_contacto)

import page_blogs from './view/blogs/home.js'
Vue.component('p-blogs', page_blogs)

Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/sobre', component: { template: '<p-sobre></p-sobre>' } },
     { path: '/servico', component: { template: '<p-servico></p-servico>' } },
    { path: '/contacto', component: { template: '<p-contacto></p-contacto>' } },
    { path: '/blogs', component: { template: '<p-blogs></p-blogs>' } }
    
]

const router = new Router({ routes })

new Vue({
    router,
    data: {
        jms: "joaquim"
    },

  
}).$mount('#app')

;(async () => { })()