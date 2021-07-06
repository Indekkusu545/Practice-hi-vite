<template>
  <Header title="装维BOC数据分析系统"/>
  <Nav
      :menu-list="menuList"
      :selected-menu="selectedMenu"
      @click:selected-menu="selectedMenu = $event"
      @click:open-menu="openMenu($event)"
  ></Nav>
  <TabBar
      class="main-body"
      :opened-menu="openedMenu"
      :selected-menu="selectedMenu"
      @click:selected-menu="selectedMenu = $event"
  ></TabBar>
  <ContentBody></ContentBody>
</template>

<script>
import Header from './components/Header.vue'
import Nav from "./components/Nav.vue";
import TabBar from "./components/TabBar.vue";
import ContentBody from "./components/ContentBody.vue";

export default {
  components: {
    TabBar,
    Header,
    Nav,
    ContentBody
  },
  data() {
    return {
      menuList: [
        {
          id: 0,
          title: '端业匹配',
          path: '/Page1'
        },
        {
          id: 1,
          title: '权重配置',
          path: '/Page2'
        }
      ],
      selectedMenu: -1,
      openedMenu: [],
      openedMenuFlags: new Set
    }
  },
  methods: {
    openMenu(event) {
      if (this.openedMenuFlags.has(event.id))
        return;
      this.openedMenu.push(event);
      this.openedMenuFlags.add(event.id);
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

.main-body {
  position: absolute;
  left: 201px;
  top: 60px;
  right: 0;
  bottom: 0;
}
</style>
