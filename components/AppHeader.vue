<template>
  <nav class="navbar-container">
    <ul class="navbar-wrapper">
      <li class="navbar-list"><NuxtLink to="/" :class="isHome ? 'active' : ''">Home</NuxtLink></li>
      <li class="navbar-list"><NuxtLink to="product" :class="isProduct ? 'active' : ''">Product</NuxtLink></li>
    </ul>
  </nav>
</template>
<script setup>
  const router = useRouter();
  const route = useRoute();

  const isHome = computed(() => {
    if (route.path === '/') {
      return true;
    }
    return false;
  })

  const isProduct = computed(() => {
    if (route.path === '/product') {
      return true;
    }
    return false;
  })
</script>
<style lang="scss" scoped>
.navbar {
  &-container {
    width: 100%;
    height: 46px;
  }

  &-wrapper {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    width: inherit;
    height: inherit;
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    z-index: 99;
  }

  &-list {
    width: 15%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }

    a {
      display: block;
      height: inherit;
      color: black;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    a:hover:not(.active) {
      background-color: #fff;
    }

    .active {
      color: black;
      font-weight: bold;
      background-color: $primary;
    }
  }
}
</style>