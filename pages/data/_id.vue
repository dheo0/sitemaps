<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>경로: /data/{{ product.id }}</p>
    <p>업데이트: {{ product.updatedAt }}</p>
    <nuxt-link to="/">← 홈으로</nuxt-link>
  </div>
</template>

<script>
const products = require('~/data/products')

export default {
  asyncData({ params, error }) {
    const product = products.find(p => p.id === Number(params.id))
    if (!product) return error({ statusCode: 404 })
    return { product }
  },
}
</script>
