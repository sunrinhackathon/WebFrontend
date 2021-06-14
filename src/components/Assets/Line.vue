<template>
  <div
    :style="{
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      margin: margin
    }"
  ></div>
</template>

<script>
export default {
  name: "Line",
  props: {
    width: String,
    height: String,
    backgroundColor: String,
    margin: String
  }
};
</script>
