<template>
  <div
      class="tab-content"
  >
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "ContentBody"
}
</script>

<style scoped>
.tab-content {
  position: absolute;
  left: 200px;
  top: 108px;
  right: 0;
  bottom: 0;
  padding: 10px;
  text-align: center;
}
</style>