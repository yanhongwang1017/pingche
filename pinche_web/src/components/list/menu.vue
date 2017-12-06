<template>
   <div class="information">
       <div class="left ">
           <div class="top">
               <img src="/src/assets/img/four.png" alt="">
           </div>
           <div class="bottom">{{count}}</div>
       </div>
       <div class="right">
           <div class="one">
               <div class="one-left"><span>{{A}}</span><span class=" direct fa fa-arrow-circle-right"></span><span>{{B}}</span></div>
               <div class="one-right">单价RMB <span>{{price}}</span></div>
           </div>
           <div class="two">
               <div class="two-left">
                   <img src="" alt="">
               </div>
               <div class="two-two">{{name}}</div>
               <div class="two-three"><span style="color:#dddddd;">15</span><span style="color:#dddddd;">/</span><span style="#b8b8b8">20</span></div>
               <div class="point"></div>
               <div class="two-four">{{time}}</div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                count:"四十座",
                A:"太原",
                B:"杭州",
                price:"205",
                AA:"",
                name:"json",
                time:"11:20:30"
            }
        }
    }
</script>

<style scoped>
   .information{
       width: 100%;
       height: 1.5rem;
       display: flex;
       justify-content: space-around;
       box-shadow: 0 0 0.04rem 0.04rem  rgba(224,224,224,0.6);
       margin-bottom: 0.1rem;
   }
    .left{
        width: 1.48rem;
        height: 1.5rem;
        border-right: 0.02rem dashed #dadada;
        text-align: center;
        overflow: hidden;
    }
    .top{
        width: 1rem;
        height: 0.8rem;
        margin:0.1rem auto;
    }
    .top img{
        width: 100%;
        height:100%;
    }
    .bottom{
        width:60%;
        height: 0.4rem;
        font-size: 0.2rem;
        line-height: 0.4rem;
        color: #ffffff;
        margin:0.1rem auto;
        text-align: center;
        border-radius: 0.4rem;
        background-image: -webkit-linear-gradient(0deg,#fe6498,#fc644d 90%);
    }
    .right{
        width: 6rem;
        height: 1.5rem;
        background: #ffffff;
    }
    .one{
        width: 100%;
        height: 0.56rem;
    }
    .one-left{
        width: 50%;
        height: 100%;
        padding:0.04rem 0.2rem;
        box-sizing: border-box;
        font-size: 0.3rem;
        float: left;
        text-align: left;
        display: flex;
        justify-content: space-around;
    }
   .one-left .direct{
       margin-top: 0.1rem;
       color: #fc644d;
   }
    .one-right{
        width: 50%;
        height: 100%;
        float: right;
        font-size: 0.3rem;
        text-align: right;
        padding-top: 0.1rem;
        padding-right: 0.24rem;
        color: #fcc2ce;
        box-sizing: border-box;
    }
    .one-right span{
        color: #f8427d;
    }
    .two{
        width: 100%;
        height: 0.94rem;
        overflow: hidden;
    }
    .two-left{
        width: 0.52rem;
        height: 0.52rem;
        border-radius: 50%;
        box-shadow: 0 0 0.04rem 0.04rem  rgba(224,224,224,0.4);
        margin-top: 0.12rem;
        margin-left: 0.34rem;
        float: left;
    }
    .two-left img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .two-two{
        width: 1.5rem;
        height: 0.24rem;
        float: left;
        margin-top: 0.4rem;
        margin-left: 0.1rem;
        line-height: 0.24rem;
        text-align: center;
        color: #b9b9b9;
    }
    .two-three{
        width: 1rem;
        height: 0.3rem;
        float: left;
        margin-top: 0.4rem;
        margin-left: 0.1rem;
        line-height: 0.24rem;
        text-align: center;
        color: #b9b9b9;
    }
   .two-three span{
       font-size: 0.3rem;
   }
   .point{
       width: 0.2rem;
       height: 0.2rem;
       float: left;
       margin-top: 0.45rem;
       margin-left: 0.15rem;
       line-height: 0.3rem;
       background: url("/src/assets/img/aa.png");
       background-position: center;
       background-size: cover;
       border-radius: 50%;
   }
    .two-four{
        width: 1.82rem;
        height: 0.3rem;
        float: left;
        margin-top: 0.4rem;
        line-height: 0.3rem;
        text-align: right;
        color: #b9b9b9;
        font-size: 0.3rem;
    }
   .two-four span{
       font-size: 0.3rem;
   }
</style>