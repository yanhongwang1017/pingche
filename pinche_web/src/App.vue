<template>
  <div id="app">
      <transition>
          <router-view/>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
