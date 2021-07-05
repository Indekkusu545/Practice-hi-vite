<template>
  <div
      id="tab"
  >
    <div>
      <ul class="tab-nav">
        <template
            v-for="(item, index) of menuList"
        >
          <li
              v-if="isVisible[index]"
              class="tab-nav-item"
              :class="{active: selectedMenu === index}"
              @click="$emit('click:selectedMenu', index)"
          >
            {{item}}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <component
          :is="currentTab"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabPane",
  props: {
    menuList: Array,
    selectedMenu: Number,
    tabs: Array
  },
  data() {
    return {
      tabs: [],
      isVisible: [1, 1],
      currentTab: tabs[0]
    }
  },
  emits: [
    'click:selectedMenu'
  ]
}
</script>

<style scoped>
#tab {
}

.tab-nav {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background: white;
  list-style: none;
  margin: 4px;
}

.tab-nav-item {
  float: left;
  width: fit-content;
  height: 100%;
  text-align: center;
  line-height: 40px;
  color: #c1c1c1;
  border-top: 4px solid white;
  padding: 0 10px;
  cursor: pointer;
}

.active {
  border-top: 4px solid #007aff;
  background: #f6f7fb;
}
</style>