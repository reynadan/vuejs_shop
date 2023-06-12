<script setup>
  import { useCounterCart } from '@/stores/ProductStore.js';
  const cart = useCounterCart()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <router-link to="/" class="navbar-brand">Shop</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/products">All products</router-link></li>
        </ul>
        <form class="d-flex">
          <router-link class="btn btn-outline-dark" to="/cart">
            <i class="bi-cart-fill me-1"></i>Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">{{ cart.count }}</span>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>
