<template>
  <div id="nav">
    <ul>
      <li
          v-for="item of menuList"
          :key="item.id"
          :class="{select: selectedMenu === item.id}"
          @click="$emit('click:selectedMenu', item.id); $emit('click:openMenu', item); link(item.path);"
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
      'click:selectedMenu',
      'click:openMenu'
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