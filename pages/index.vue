<template>
  <div>
    <h1>홈</h1>

    <h2>Sitemaps</h2>
    <ul>
      <li><a href="/sitemap.xml" target="_blank">sitemap.xml (인덱스)</a></li>
      <li><a href="/sc.xml" target="_blank">sc.xml</a></li>
      <li><a href="/bc.xml" target="_blank">bc.xml</a></li>
      <li><a href="/data.xml" target="_blank">data.xml</a></li>
    </ul>

    <h2>SC 페이지</h2>
    <ul>
      <li v-for="item in scItems" :key="item.slug">
        <nuxt-link :to="`/sc/${item.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>

    <h2>BC 페이지 (동적)</h2>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/bc/${post.slug}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>

    <h2>Data 페이지 (동적)</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <nuxt-link :to="`/data/${product.id}`">{{ product.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
const scItems = require('~/data/sc-items')
const posts = require('~/data/posts')
const products = require('~/data/products')

export default {
  data() {
    return { scItems, posts, products }
  },
}
</script>
