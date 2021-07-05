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
              v-if="isVisible.get(index)"
              class="tab-nav-item"
              :class="{active: selectedMenu === index}"
              @click="$emit('click:selectedMenu', index)"
          >
            {{item}}
          </li>
        </template>
      </ul>
    </div>
    <div
        class="tab-content"
    >
      <component
          :is="currentTab"
      ></component>
    </div>
  </div>
</template>

<script>
import Page1 from "./Page1.vue";
import Page2 from "./Page2.vue";

export default {
  name: "TabPane",
  components: {
    Page1,
    Page2
  },
  props: {
    menuList: Array,
    selectedMenu: Number,
    tabs: Array
  },
  data() {
    return {
      isVisible
    }
  },
  created() {
    let index = 0;
    for (let item of this.menuList) {
      this.isVisible.set(index++, false);
    }
    this.isVisible.set(this.selectedMenu, true);
  },
  computed: {
    currentTab() {
      return this.tabs[this.selectedMenu];
    }
  },
  emits: [
    'click:selectedMenu'
  ],
  watch: {
    selectedMenu(newIndex, oldIndex) {
      console.log(newIndex, oldIndex);
      this.isVisible.set(newIndex, 1);
    }
  }
}

let isVisible = new Map();
</script>

<style scoped>
#tab {
  background: #f6f7fb;
}

.tab-nav {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background: white;
  list-style: none;
  padding: 4px 40px;
  margin: 0;
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
  border-top-color: #007aff;
  background: #f6f7fb;
}

.tab-content {
  position: absolute;
  left: 0;
  top: 48px;
  right: 0;
  bottom: 0;
  padding: 10px;
  text-align: center;
}
</style>