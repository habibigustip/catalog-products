<template>
  <footer class="footer-container">
    <div class="footer-wrapper">
      <div v-for="item in [1, 2, 3]" class="footer-list">
        <div class="footer-list-name">habibi Online Shop</div>
        <div class="footer-list-desc">a professional worker as a frontend engineer</div>
        <div class="footer-list-item">
            <ul>
                <li>Jl. Ceger Raya No.104</li>
                <li>081318302011</li>
                <li>habibigustip@gmail.com</li>
            </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.footer {
  &-container {
    margin-top: 20px;
  }
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
    background-color: $primary;
  }
  &-list {
    padding: 10px;
  
    &-name {
      font-weight: bold;
      text-transform: uppercase;
    }
    &-item {
      ul {
        list-style-type: none;
        padding: 0;
      }
    }
  }
}
</style>