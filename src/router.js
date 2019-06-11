import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import AddBlog from "./components/AddBlog"
import ShowBlogs from "./components/ShowBlogs"
import SingleBlog from "./components/SingleBlog"
import EditBlog from "./components/EditBlog"

Vue.use(Router);

//配置路由
export default new Router({
  mode: "history",  //去除''#'' 
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "ShowBlogs",
      component: ShowBlogs
    },
    {
      path: "/AddBlog",
      name: "AddBlog",
      component: AddBlog
    },
    {
      path: "/blog/:id",
      name: "single-blog",
      component: SingleBlog
    },
    {
      path: "/edit/:id",
      name: "edit-AddBlog",
      component: EditBlog
    }
  ]
});