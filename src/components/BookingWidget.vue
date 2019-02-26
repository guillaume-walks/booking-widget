<template>
  <h1>Booking widget {{name}}</h1>
</template>


<script>
/* eslint-disable */

import times from "lodash/times";
export default {
  props: ["name"],
  mounted() {
    console.log("debounce START", this.name);
    let t = times(3, String);
    console.log("RESLUTS", t);
  }
};
</script>

<style>
</style>


