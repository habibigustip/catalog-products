<template>
  <app-header />
  <div class="banner-product-container" :style="`background-image: url(${livingRoom});`">
  </div>
  <div class="product-list-container">
    <div class="product-list-wrapper">
        <div v-for="product in productList" class="product-list-card" @click="onClickDetailPage(product)">
            <div class="product-list-card-image">
                <img :src="product.image" alt="Image Product" class="product-list-card-image-item">
            </div>
            <div class="product-list-card-header">
                <div class="product-list-card-name">{{ product.title }}</div>
                <div class="product-list-card-type">{{ product.category }}</div>
            </div>
            <div class="product-list-card-footer">
                <div class="product-list-card-footer-price">${{ product.price }}</div>
                <div v-if="product.original_price" class="discount-wrapper">
                  <div class="discount-amount-wrapper">
                    <span class="discount-amount-value">{{ product.discount_amount }}%</span>
                  </div>
                  <div class="original-price-wrapper">
                    <span class="original-price-amount">{{ product.original_price }}</span>
                  </div>
                </div>
                <div class="product-list-card-footer-rating">
                  <Star /> <span class="rating-amount">{{ product.rating.rate }} ({{ product.rating.count }})</span>
                </div>
            </div>
        </div>
    </div>
  </div>
  <app-footer />
</template>

<script src="./index.component.ts"></script>
<style lang="scss" src="./index.component.scss"></style>