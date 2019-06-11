<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="请输入">
    <div v-for="blog in filteredBlogs" :key="blog.title" class="single-blog">
      <!--  更改遍历的blogs为计算属性中filteredBlogs 否则不会触发计算属性  -->
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>
<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.axios
      .get("/posts.json") 
      .then(response => {
        // console.log(response);
        return response.data;
      })
      .then(response => {
        var blogArry = [];
        for (let key in response) {
          // console.log(response[key])
          // unshift() 从数组开头添加数据
          // console.log(key); 
          response[key].id = key;
          blogArry.unshift(response[key]);
        }
        this.blogs = blogArry;
        // console.log(this.blogs);
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((demo) => {
        // match()方法可在字符串内检索指定的值
        return demo.title.match(this.search);
      });
    }
  },
  // 局部过滤器
  filters: {
    //大写
    "to-uppercase": function(value) {
      return value.toUpperCase();
    },
    //超出字数隐藏
    snippet: function(value) {
      return value.slice(0, 100);
    }
  },
  // 局部自定义指令
  directives: {
    //字体随机色
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    },
    //组件父盒子样式 
    theme: {
      bind(el, binding, vnode) {
        if (binding.value == "wide") {
          el.style.maxWidth = "800px";
          el.style.padding = "20px";
        }
        if (binding.arg == "column") {
          // arg为传递的参数
          el.style.background = "#e7e7e7";
        }
      }
    }
  }
};
</script>
<style lang="less" >
#show-blogs {
  margin: 0 auto;
  box-sizing: border-box;
}
.single-blog {
  padding: 10px 15px;
  margin-top: 20px;
  background-color: #ccc;
  border-radius: 5px;
}
a {
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
