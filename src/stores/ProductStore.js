import { defineStore } from 'pinia'

import products from '@/data/products.js'

export const useProductStore = defineStore('ProductStore', {
    state: () => {
        return {
            products
        }
    }
})

export const useCounterCart = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        }
    }
})