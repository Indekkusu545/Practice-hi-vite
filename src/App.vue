<template>
  <Header title="装维BOC数据分析系统"/>
  <Nav
      :menu-list="menuList"
      :selected-menu="selectedMenu"
      @click:selected-menu="selectedMenu = $event"
  ></Nav>
  <TabPane
      class="mainboby"
      :menu-list="menuList"
      :selected-menu="selectedMenu"
      :tabs="tabs"
      @click:selected-menu="selectedMenu = $event"
  >
  </TabPane>
</template>

<script>
import Header from './components/Header.vue'
import Nav from "./components/Nav.vue";
import TabPane from "./components/TabPane.vue";

export default {
  components: {
    Header,
    Nav,
    TabPane
  },
  data() {
    return {
      menuList: [
          '端业匹配',
          '权重配置'
      ],
      selectedMenu: 0,
      tabs: [
          'Page1',
          'Page2'
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.mainboby {
  position: absolute;
  left: 201px;
  top: 60px;
  right: 0;
  bottom: 0;
}
</style>
