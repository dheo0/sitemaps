<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>업데이트: {{ post.updatedAt }}</p>
    <nuxt-link to="/">← 홈으로</nuxt-link>
  </div>
</template>

<script>
const posts = require('~/data/posts')

export default {
  async asyncData({ params, error }) {
    const post = posts.find(p => p.slug === params.slug)
    if (!post) {
      return error({ statusCode: 404, message: '포스트를 찾을 수 없습니다.' })
    }
    return { post }
  },
}
</script>
