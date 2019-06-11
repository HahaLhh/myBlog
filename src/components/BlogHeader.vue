<template>
  <div id="blog-header">
    <nav>
      <ul>
        <li>
            <router-link to="/" exact>博客首页</router-link>
            <router-link to="/AddBlog" exact>添加博客</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script >
export default {};
</script>

<style scoped>
ul {
    list-style-type: none;
    /* text-align: center; */
    margin: 0;
}
ul li{
    display: inline-block;
    margin: 0 10px;
}
a{
    text-decoration:none;
    color: white;
    padding: 12px;
    border-radius: 5px;
}
nav{
    margin: 0 auto;
    background-color: crimson;
    width: 800px;
    padding: 30px 0;
    margin-bottom: 10px; 
}
.router-link-active{
    background-color: rgba(255,255,255,0.8);
    color: #444;
} 
</style>
