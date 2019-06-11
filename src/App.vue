<template>
  <div id="app">
      <blog-header></blog-header>
      <!-- <addBlog></addBlog>   -->
      <!-- <show-blogs></show-blogs> -->
      <router-view></router-view>
  </div>
</template>
<script>
  import AddBlog from './components/AddBlog'
  import ShowBlogs from './components/ShowBlogs'
  import BlogHeader from "./components/BlogHeader.vue"
export default {
  components : {
      AddBlog,ShowBlogs,BlogHeader

  }
}
</script>
<style lang="less">

</style>
