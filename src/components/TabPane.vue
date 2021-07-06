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
              @click="$emit('click:selectedMenu', index), link(item.path)"
          >
            {{item.title}}
          </li>
        </template>
      </ul>
    </div>
    <div
        class="tab-content"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabPane",
  props: {
    menuList: Array,
    selectedMenu: Number,
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
    this.$router.push(this.menuList[this.selectedMenu].path);
  },
  emits: [
    'click:selectedMenu'
  ],
  watch: {
    selectedMenu(newIndex, oldIndex) {
      console.log(newIndex, oldIndex);
      this.isVisible.set(newIndex, 1);
    }
  },
  methods: {
    link(path) {
      this.$router.push(path);
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
  right: 0;
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