<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in tab"
        :key="index"
        :icon="active == index ? item.icon1 : item.icon"
        :class="{ bg: active == index }"
        @click="goTo(item.url)"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "",
  data() {
    return {
      active: 0,
      tab: [
        {
          title: "首页",
          url: "index",
          icon: require("@/assets/s-1.png"),
          icon1: require("@/assets/s-2.png"),
        },

        {
          title: "案例",
          url: "anl",
          icon: require("@/assets/a-1.png"),
          icon1: require("@/assets/a-2.png"),
        },
        {
          title: "关于",
          url: "about",
          icon: require("@/assets/gy-1.png"),
          icon1: require("@/assets/gy-2.png"),
        },
        {
          title: "我的",
          url: "home",
          icon: require("@/assets/w-1.png"),
          icon1: require("@/assets/w-2.png"),
        },
      ],
    };
  },
  methods: {
    goTo(name) {
      this.$router.push({ name }); 
    },
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.bg {
  background-color: #ccc;
  color: #1296db;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
