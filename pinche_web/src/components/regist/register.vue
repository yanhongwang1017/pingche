<template>
  <div class="register">
   <div class="logo"></div>
        <router-view/>
  </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {

        }
     }
}
</script>

<style scoped>
    .register{
        position: absolute;
        background: #f2f2f2;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .logo{
        margin-top: 0.4rem;
        width: 100%;
        height: 4.83rem;
        background: url("/src/assets/img/logo.png") no-repeat;
        background-size: 100%;
    }
</style>
