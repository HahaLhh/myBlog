<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类</p>
    <ul>
      <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <router-link v-bind:to="'/edit/' + id">编辑</router-link>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data() {
    return {
      //获取路由参数
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.axios.get("/posts/" + this.id + ".json").then(respon => {
    //   console.log(respon.data);
      this.blog = respon.data;
    });
  },
  methods: {
      deleteSingleBlog(){
          this.axios.delete("/posts/" + this.id + ".json").then(response =>{
              this.$router.push({path:"/"}); 
          })
      }
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #eee;
  border: 1px dotted gray;
}
</style>
