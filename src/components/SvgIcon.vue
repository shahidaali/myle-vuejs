<template>
    <span class="svg-icon" v-bind:class="wrapperClass"><img :src="`img/myle/svg/${icon}.svg`" v-bind:class="extraClass"></span>
</template>
<script>
export default {
  name: "svg-icon",
  props: {
    icon: {
      type: String,
      default: "",
      description: "Svg Icon Name"
    },
    wrapperClass: {
      type: String,
      default: "",
      description: "Svg extra class"
    },
    extraClass: {
      type: String,
      default: "",
      description: "Svg extra class"
    }
  }
};
</script>
<style>
</style>
