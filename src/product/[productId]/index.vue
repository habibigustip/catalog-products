<template>
  <div class="product-detail-header-container">
    <div class="product-detail-header-wrapper">
      <div class="product-detail-header-content">
        <div class="product-detail-header-content-heading">Product Detail</div>
        <div class="product-detail-header-content-desc">
          Shop with our latest selection of superior products, try and feel the superiority.
        </div>
      </div>
    </div>
  </div>
  <div class="product-detail-body-container">
    <ul class="product-detail-body-breadcrumb">
      <li class="product-detail-body-breadcrumb-item">
        <NuxtLink to="/product">Product</NuxtLink>
      </li>
      <li class="product-detail-body-breadcrumb-item">
        Product Detail
      </li>
      <li class="product-detail-body-breadcrumb-item">
        {{ productDetail.category }}
      </li>
    </ul>

    <div class="gallery-product-container">
      <div class="gallery-product-wrapper">
        <div v-for="(preview, index) in productDetail.thumbnails" :key="`preview${1}`" class="img-preview-slides fade">
          <div class="numbertext">{{ index+1 }} / {{ productDetail.thumbnails.length }}</div>
          <img :src="preview" class="img-preview" style="width:100%">
        </div>

        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>

        <div class="row">
          <div v-for="(thumbnail, index) in productDetail.thumbnails" :key="`thumbnail${1}`" class="column">
            <img class="img-thumbnail demo cursor" :src="thumbnail" style="width:100%" @click="currentSlide(index+1)">
          </div>
        </div>
      </div>
      <div class="info-product-wrapper">
        <h1>{{ productDetail.title }}</h1>
        <div class="price-wrapper">
          <div class="price">{{ productDetail.price }}</div>
          <div v-if="productDetail.original_price" class="discount-wrapper">
            <div class="discount-amount-wrapper">
              <span class="discount-amount-value">{{ productDetail.discount_amount }}%</span>
            </div>
            <div class="original-price-wrapper">
              <span class="original-price-amount">{{ productDetail.original_price }}</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="description-product-wrapper">
          {{ productDetail.description }}
        </div>
        <div class="add-to-cart-wrapper">
          <button class="btn-add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script src="./index.component.ts"></script>
<style lang="scss" src="./index.component.scss" scoped></style>