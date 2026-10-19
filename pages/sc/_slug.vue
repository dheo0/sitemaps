<template>
  <div>
    <h1>{{ item.title }}</h1>
    <p>경로: /sc/{{ item.slug }}</p>
    <nuxt-link to="/">← 홈으로</nuxt-link>
  </div>
</template>

<script>
const scItems = require('~/data/sc-items')

export default {
  asyncData({ params, error }) {
    const item = scItems.find(i => i.slug === params.slug)
    if (!item) return error({ statusCode: 404 })
    return { item }
  },
}
</script>
