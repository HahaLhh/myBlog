<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submmited" >
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angularr4.js</label>
        <input type="checkbox" value="Angularr4.js" v-model="blog.categories">
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="(author,index) of authors" :key="index">{{author}}</option>
      </select>
      <button v-on:click.prevent="put">编辑博客</button>
    </form>
    <div v-if="submmited">
      <h3>发布成功</h3>
    </div>
    <hr>
    <div id="preview">
      <h5>{{blog.title}}</h5>
        <h5>{{blog.content}}</h5>
      <ul>
        <li v-for="(lis,index) of blog.categories" :key="index">{{lis}}</li>
      </ul>
      <h5>{{blog.author}}</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "addBlog",
  data() {
    return {
      timer: null,
      id: this.$route.params.id,
      blog: {
        // title: "",
        // content: "",
        // categories: [],
        // author: ""
      },
      authors: ["Hemiah", "Hemhi", "xixi"],
      submmited: false
    };
  },
  methods: {
    // http://jsonplaceholder.typicode.com/
    put: function() {
        this.axios.put("/posts/" + this.id + ".json",this.blog)
        .then(response => {
          console.log(response);
          this.submmited = true;
        });
        this.timer = setInterval(() =>{
            this.$router.push('/')
        },5000);
    },
    fetchData: function(){
        // console.log(this.id);
        this.axios.get("/posts/" + this.id + ".json")
            .then(response =>{
                console.log(response.data);
                this.blog = response.data;
            })
    }
  },
  created(){
      this.fetchData();
  },
  beforeDestroy(){
      clearInterval(this.timer);
  }
};
</script>
<style lang="less" scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  margin: 20px 0;
  background: lightgray;
  color: block;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer; //光标 手
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h5 {
  margin-top: 10px;
}
li {
  list-style-type: none;
}
</style>
