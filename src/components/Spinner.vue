<template>
    <div class="loader" :style="'width: ' + width + ';height: ' + height + ';' + [position === 'absolute' ? 'position: absolute; left: 45%' : 'position: static']">Loading...</div>
</template>

<script>
export default {
  props:{
    width: String,
    height: String,
    position : String
  }
}
</script>

<style lang="scss" scoped>

.loader {
  font-size: 10px;
  margin: 20px auto;
  text-indent: -9999em;
  /*width: 11em;
  height: 11em;*/
  border-radius: 50%;
  background: #bd8b8b;
  background: -moz-linear-gradient(left, #bd8b8b 10%, rgba(189,139,139, 0) 42%);
  background: -webkit-linear-gradient(left, #bd8b8b 10%, rgba(189,139,139, 0) 42%);
  background: -o-linear-gradient(left, #bd8b8b 10%, rgba(189,139,139, 0) 42%);
  background: -ms-linear-gradient(left, #bd8b8b 10%, rgba(189,139,139, 0) 42%);
  background: linear-gradient(to right, #bd8b8b 10%, rgba(189,139,139, 0) 42%);
  //position: absolute;
  //left: 50%;
  //transform: translatex(-50%);
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #bd8b8b;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>