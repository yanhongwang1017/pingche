<template>
    <div class="container">
        <div class="header">
            <div class="back" @touchstart="pre()"></div>
            <div class="word">拼车列表</div>
        </div>
        <main>
            <div class="function">
                <div class="zong">综合查询</div>
                <div class="box">信用</div>
                <div class="box">短途</div>
                <div class="box">长途</div>
            </div>
            <Menu1></Menu1>
        </main>
    </div>
</template>

<script>
  import Menu1 from '@/components/index/carList';
  export default {
      components:{Menu1},
      methods:{
          pre(){
              this.$router.go(-1);
          }
      }
  }
</script>

<style scoped>
    .container{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #f2f2f2;
    }
    .header {
        width: 100%;
        height: 1.89rem;
        color: #ffffff;
        background-image: url("/src/assets/img/header.png");
        background-position: center;
        overflow: hidden;
    }
    .word{
        font-size: 0.56rem;
        color: #ffffff;
        margin-left: 0.24rem;
    }
    .back{
        display: block;
        width: 0.5rem;
        height: 0.4rem;
        margin-left: 0.12rem;
        margin-top: 0.64rem;
        background: url("/src/assets/img/back.png") no-repeat center;
        background-size: contain;
    }
    .function{
        width: 100%;
        height: 1.07rem;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
    }
    .zong{
        width: 1.8rem;
        height: 0.6rem;
        border-radius: 0.6rem;
        background-image: -webkit-linear-gradient(0deg,#fe6498,#fc644d 90%);
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.24rem;
        color: #ffffff;
        margin-top: 0.24rem;
    }
    .box{
        width: 1.4rem;
        height: 0.54rem;
        border-radius: 0.54rem;
        border:0.03rem solid #f9e296;
        text-align: center;
        line-height: 0.64rem;
        font-size: 0.24rem;
        margin-top: 0.24rem;
        background: #f8f6f7;
        color: #FD645E;
    }
</style>
