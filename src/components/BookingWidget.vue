<template>
  <h1>Booking widget {{name}}</h1>
</template>


<script>
 /* eslint-disable */ 

// import _ from 'lodash'
export default {
  props: ["name"],
  mounted () {
    console.log('debounce START', this.name )
    // let t = _.times(3, String);
    console.log('RESLUTS')
  }
};
</script>

<style>
</style>


