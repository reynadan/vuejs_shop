<script setup>
import ProductItem from './ProductItem.vue';
import { defineStore } from 'pinia'
</script>

<script>
export default {
    data() {
        return {
            productsData: [],
        };
    },
    methods: {
        fetchData() {
            fetch('https://dummyjson.com/products', {
                method: "GET"
            })
                .then((response) => {
                    response.json().then((data) => {
                        console.log(data);
                        this.productsData = data.products;
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<template>
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="
              row
              gx-4 gx-lg-5
              row-cols-2 row-cols-md-3 row-cols-xl-4
              justify-content-center
            ">
                <ProductItem v-for="product in productsData" 
                    :description="product.description" 
                    :title="product.title"
                    :price="product.price" 
                    :thumbnail="product.thumbnail"
                    :discountPercentage="product.discountPercentage"
                />
            </div>
        </div>
    </section>
</template>
