<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>경로: /bc/{{ post.slug }}</p>
    <p>업데이트: {{ post.updatedAt }}</p>
    <nuxt-link to="/">← 홈으로</nuxt-link>
  </div>
</template>

<script>
const posts = require('~/data/posts')

export default {
  asyncData({ params, error }) {
    const post = posts.find(p => p.slug === params.slug)
    if (!post) return error({ statusCode: 404 })
    return { post }
  },
}
</script>
