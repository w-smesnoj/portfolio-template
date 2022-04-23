<template>
  <i :class="`fa fa-${fa}`" aria-hidden="true" v-if="fa"></i>
  <i :class="`fas fa-${fas}`" aria-hidden="true" v-else-if="fas"></i>
  <i :class="`far fa-${far}`" aria-hidden="true" v-else-if="far"></i>
  <i :class="`fab fa-${fab}`" aria-hidden="true" v-else></i>
</template>

<script>
export default {
  props: {
    fa: String,
    fas: String,
    far: String,
    fab: String,
  },
  mounted() {},
};
</script>

<style scoped>
/* .fa, */
/* .fas { */
/* font-size: 1.5em; */
/* -webkit-text-stroke: 0.01em; */
/* } */
</style>
