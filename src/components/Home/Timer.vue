<template>
  <div class="timer">
    <div v-for="data in timeArray" :key="data.timeName">
      <div>{{data.data}}</div>
      <TextComponent
        textType="i"
        display="flex"
        margin="0 auto"
        justifyContent="center"
        fontSize="30px"
        :mobileFontSize="true"
      >{{data.timeName}}</TextComponent>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  components: {},
  props: {
    timeArray: Array
  },
  created() {}
};
</script>

<style scoped>
.timer {
  font-size: 94px;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  display: flex;
  height: fit-content;
}
.timer > * {
  margin: 0px 26px;
}
@media screen and (max-width: 768px) {
  .timer {
    font-size: 44px !important;
  }
  .timer > * {
    margin: 0px 10px;
  }
}
</style>