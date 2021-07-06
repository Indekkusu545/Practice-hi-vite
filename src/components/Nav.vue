<template>
  <div id="nav">
    <ul>
      <li
          v-for="(item, index) of menuList"
          :key="index"
          :class="{select: selectedMenu === index}"
          @click="$emit('click:selectedMenu', index), link(item.path)"
      >
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    menuList: Array,
    selectedMenu: Number
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
#nav {
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  width: 200px;
  background: white;
  border-right: 1px solid #e8e8e8;
}
.select {
  color: #007aff;
  border-left-color: #007aff;
}
ul {
  margin: 0;
  padding: 0;
  line-height: 34px;
  list-style: none;
}
li {
  display: block;
  line-height: 34px;
  padding: 0 16px;
  cursor: pointer;
  border-left: 6px solid transparent;
}

li:hover {
  background: rgba(0, 0, 0, 0.1);
  border-left-color: #007aff;
}
</style>