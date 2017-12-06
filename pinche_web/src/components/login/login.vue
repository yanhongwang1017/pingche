<template>
  <div class="login">
      <section class="mid">
          <logininput></logininput>
      </section>
      <section class="wri">
          <div class="wri1"></div>
          <span>还不是我们的会员</span>
          <span><router-link to="/regist" class="wri2" style="color: #0079d1;">请注册</router-link></span>
          <div class="wri3"></div>
      </section>
      <footer class="bot">
          <div class="three1"></div>
          <div class="three2"></div>
          <div class="three3"></div>
      </footer>
  </div>
</template>

<script>
import logininput from '@/components/login/logininput.vue';
export default {
    name: 'login',
    components: {logininput},
    data () {
       return {

        }
     }
}
</script>
<style scoped>
    .login{
        width: 100%;
        height: 100%;
        background: #f2f2f2;
        position: fixed;
        background-image: url("/src/assets/img/1.png");
        background-size: 3.6rem;
        background-repeat: no-repeat;
        background-position: center 0.86rem;
    }
    .mid{
        height: 5.64rem;
        margin-top: 4.96rem;
        width: 100%;
    }
    .wri{
        height: 0.9rem;
        width: 50%;
        margin-left: 25%;
        color:#aeaeae;
        font-size: 0.22rem;
        text-align: center;
    }
    .wri1{
        width: 0.16rem;
        height: 0.16rem;
        float: left;
        margin-top: 2.5%;
        background-image: url("/src/assets/img/103.jpg");
        background-size: 0.16rem;
    }
    .wri3{
        background-image: url("/src/assets/img/103.jpg");
        margin-top: 2.5%;
        float: right;
        width: 0.16rem;
        height: 0.16rem;
        background-size: 0.16rem;
    }
    .wri2{
        color:#aeaeae;
    }
    .bot{
        height: 1.76rem;
        width: 50%;
        display: flex;
        margin-left: 25%;
        justify-content: space-around;
   }
   .three1,.three2,.three3{
       width: 33.333333%;
       height: 100%;
   }
  .three1{
      background-image: url("/src/assets/img/denglu-icon-QQ@2x.png");
      background-size: 0.93rem;
      background-repeat: no-repeat;
      background-position: center center;
  }
  .three2{
      background-image: url("/src/assets/img/denglu-icon-WX@2x.png");
      background-size: 0.93rem;
      background-repeat: no-repeat;
      background-position: center center;
  }
  .three3{
      background-image: url("/src/assets/img/denglu-icon-WB@2x.png");
      background-size: 0.93rem;
      background-repeat: no-repeat;
      background-position: center center;
  }
</style>
