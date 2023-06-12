<script>
export default {
  props: {
    price: Number,
    title: String,
    description: String,
    thumbnail: String,
    discountPercentage: Number
  },
  methods: {
    getOriginalPrice(price, discountPercentage) {
      return Math.round((price / (1 - discountPercentage / 100)));
    }
  },
}
</script>

<script setup>
  import { useCounterCart } from '@/stores/ProductStore.js';
  const cart = useCounterCart()
</script>

<template>
  <div class="col mb-5">
    <div class="card h-100">
      <!-- Sale badge-->
      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
        Sale
      </div>
      <!-- Product image-->
      <img class="card-img-top img-thumbnail" :src="thumbnail" :alt="description"  style="height: 200px"/>
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{ title }}</h5>
          <!-- Product reviews-->
          <div class="d-flex justify-content-center small text-warning mb-2">
            <div class="bi bi-star-fill"></div>
            <div class="bi-star-fill"></div>
            <div class="bi-star-fill"></div>
            <div class="bi-star-fill"></div>
            <div class="bi-star-fill"></div>
          </div>
          <!-- Product price-->
          <span class="text-muted text-decoration-line-through">{{ getOriginalPrice(price, discountPercentage) }}</span>
          {{ price }}
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <button class="btn btn-outline-dark mt-auto" @click="cart.increment()">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
