<template>
  <div>
    <input
      type="text"
      placeholder="请输入您需要查询的内容"
      v-model="searchText"
    />
    <ul>
      <li v-for="item in searchList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      searchText: "",
        
      list: [
        "千山鸟飞绝",
        "万径人踪灭",
        "关关雎洲在,在河之洲",
        "窈窕淑女,君子好逑",
        "先帝创业未半，而中道奔殂",
        "福陵山中收天蓬",
        "岭上前行逆黄风",
        "七星不照波月洞",
        "千年白骨化阴风",
        "鱼篮网通天一尾红",
        "紫金葫芦二道童",
        "九尾老狐敢压龙",
        "白虹坠雪浪击石碎",
        "大河之剑天上来",
        "飞流直下三千尺",
        "疑是银河落九天",
        '千年等一回'
      ],
    };
  },
  components: {},
  computed: {
    searchList: function () {
      return this.list.filter((text) => {
        return text.match(this.searchText);
      });
    },
  },
};
</script>

<style scoped>
</style>
