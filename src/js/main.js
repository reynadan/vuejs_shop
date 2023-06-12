import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createRouter, createWebHashHistory} from 'vue-router'

import App from './App.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Products from '../components/product/ProductList.vue';
import Cart from '../components/product/ProductCart.vue';

const router = createRouter( {
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/products', name: 'Products', component: Products },
    { path: '/cart', name: 'Cart', component: Cart },
  ]
})

const pinia = createPinia()

// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

createApp(App)
.use(router)
.use(pinia)
.mount('#app')

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
