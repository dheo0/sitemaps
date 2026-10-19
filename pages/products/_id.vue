<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>업데이트: {{ product.updatedAt }}</p>
    <nuxt-link to="/">← 홈으로</nuxt-link>
  </div>
</template>

<script>
const products = require('~/data/products')

export default {
  async asyncData({ params, error }) {
    const product = products.find(p => p.id === Number(params.id))
    if (!product) {
      return error({ statusCode: 404, message: '상품을 찾을 수 없습니다.' })
    }
    return { product }
  },
}
</script>
