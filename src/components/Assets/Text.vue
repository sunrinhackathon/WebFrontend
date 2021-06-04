<template>
  <i
    v-if="textType == 'i'"
    :style="{fontSize: fontSize, display: displayType, margin: margin, justifyContent:justifyContent, alignItems:alignItems, fontFamily:fontFamily, textAlign:textAlign}"
  >
    <slot />
  </i>
  <span
    v-else
    :style="{fontSize: fontSize, display: displayType, margin: margin, justifyContent:justifyContent, alignItems:alignItems, fontFamily:fontFamily, textAlign: textAlign}"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: "TextComponent",
  props: {
    margin: {
      type: String,
      default: "0"
    },
    displayType: {
      type: String,
      default: "block"
    },
    fontSize: {
      type: String,
      default: "16px"
    },
    justifyContent: {
      type: String,
      default: "normal"
    },
    alignItems: {
      type: String,
      default: "normal"
    },
    textType: {
      type: String,
      default: ""
    },
    textAlign: {
      type: String,
      default: "center"
    },
    fontFamily: {
      type: String,
      default: "NanumSquareEB"
    }
  }
};
</script>

<style scoped>
</style>