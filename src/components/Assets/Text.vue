<template>
  <i
    v-if="textType == 'i'"
    :style="{color:color,fontSize: fontSize, display: displayType, margin: margin, justifyContent:justifyContent, alignItems:alignItems, fontFamily:fontFamily, textAlign:textAlign}"
    :class="{ mobileFontSize20: mobileFontSize20, mobileFontSize30: mobileFontSize30 }"
    style="word-break: keep-all"
  >
    <slot />
  </i>
  <span
    v-else
    :style="{color:color,fontSize: fontSize, display: displayType, margin: margin, justifyContent:justifyContent, alignItems:alignItems, fontFamily:fontFamily, textAlign: textAlign}"
    :class="{ mobileFontSize20: mobileFontSize20, mobileFontSize30: mobileFontSize30 }"
    style="word-break: keep-all"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: "TextComponent",
  props: {
    color: {
      type: String,
      default: "#102765"
    },
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
    },
    mobileFontSize20: {
      type: Boolean
    },
    mobileFontSize30: {
      type: Boolean
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .mobileFontSize20 {
    font-size: 20px !important;
  }
  .mobileFontSize30 {
    font-size: 30px !important;
  }
}
</style>