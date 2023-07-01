<template>
  <div>
    <van-nav-bar title="久Young音乐"></van-nav-bar>
    <router-view></router-view>
    <van-tabbar v-model="active" route placeholder>
      <van-tabbar-item icon="home-o" to="/music">曲库</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/sort">排行榜</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/love">歌单</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/info">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
