<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "BangersRegular";
  src: url("./assets/fonts/Bangers-Regular.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "KoolBeans";
  src: url("./assets/fonts/KoolBeans.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSquareR";
  src: url("./assets/fonts/NanumSquareR.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSquareB";
  src: url("./assets/fonts/NanumSquareB.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSquareEB";
  src: url("./assets/fonts/NanumSquareEB.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSquareRoundB";
  src: url("./assets/fonts/NanumSquareRoundB.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "ProductSans-Black";
  src: url("./assets/fonts/ProductSans-Black.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "ProductSans-Medium";
  src: url("./assets/fonts/ProductSans-Medium.ttf") format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "NanumSquareEB";
  src: url("./assets/fonts/NanumSquareEB.ttf") format("truetype");
  font-display: swap;
}
* {
  box-sizing: border-box;
  font-family: "NanumSquareEB";
}
body {
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
}
#app {
  margin: 0 auto;
}

::-webkit-scrollbar {
  background: white;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  background: #102765;
}
</style>
