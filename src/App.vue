<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    Footer
  },
  watch: {
    $route: {
      handler(val, oldval) {
        console.log(val); //新路由信息
        // console.log(oldval);//老路由信息
      },
      // 深度观察监听
      deep: true,
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
</style>
