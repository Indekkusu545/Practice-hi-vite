<template>
  <div id="header">
    <div
        style="
          position: absolute;
          height: 100%;
          width: 200px;
          text-align: center;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        "
    >
      <img
          src="../assets/China_Unicom.svg"
          alt=""
          height="52"
          style="
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
        "
      >
    </div>
    <div
      style="
        position: absolute;
        left: 200px;
        margin-left: 16px;
      "
    >
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
#header {
  position: absolute;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: bolder;
  color: white;
  background: #007aff;
}
</style>
