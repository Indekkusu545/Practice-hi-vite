<template>
  <div class="vcenter">
    <h1>
      Page2
    </h1>
    <h2>
      {{time}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      time: new Date().toString()
    }
  },
  created() {
    setInterval(() => {
      this.time = new Date().toString();
    }, 1000);
  }
}
</script>

<style scoped>
.vcenter {
  position: relative;
  top: 50%;
  transform: translate(0, -80%);
}
</style>