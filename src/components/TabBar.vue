<template>
  <div
      id="tab"
  >
    <ul class="tab-nav">
      <template
          v-for="item of openedMenu"
          :key="item.id"
      >
        <li
            class="tab-nav-item"
            :class="{active: selectedMenu === item.id}"
            @click="$emit('click:selectedMenu', item.id); link(item.path);"
        >
          {{item.title}}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    openedMenu: Array,
    selectedMenu: Number,
  },
  data() {
    return {}
  },
  emits: [
    'click:selectedMenu'
  ],
  methods: {
    link(path) {
      this.$router.push(path);
    }
  }
}
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
</style>