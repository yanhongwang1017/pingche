<template>
  <div class="PCG">
    <div class="ImgHeader" @click="pre()">
      <!--<div class="jsj"></div>-->
      <router-link to="" class="fa fa-chevron-left" aria-hidden="true"><span>••</span></router-link>
      <router-link to="" class="genduo">•••</router-link>
    </div>
    <div class="xinxi">
        <img src="/src/assets/img/geren-touxiang.png" alt="">
        <div class="username">Jmeas.KT</div>
        <div class="gerenSM">Can I help you me is me no don′t yan huo</div>
        <div class="dingwei">
            <img src="/src/assets/img/geren-dingwei.png" alt="" class="dwicon">
            <span>山西太原</span>
        </div>
    </div>
    <div class="caidan">
        <router-link to="/gerenxinxi">
            <div class="CDImg"><img src="/src/assets/img/geren-gerenxinxi.png" alt=""></div>
            <div class="CDName">个人信息</div>
            <div class="CDXianQing">•••</div>
        </router-link>

        <router-link to="/qiandaofuwu">
            <div class="CDImg"><img src="/src/assets/img/geren-bianji.png" alt=""></div>
            <div class="CDName">签到服务</div>
            <div class="CDXianQing">•••</div>
        </router-link>

        <router-link to="/shoucangguanzhu">
            <div class="CDImg"><img src="/src/assets/img/geren-shoucang.png" alt=""></div>
            <div class="CDName">收藏关注</div>
            <div class="CDXianQing">•••</div>
        </router-link>

        <router-link to="/gerenxiangce">
            <div class="CDImg2"><img src="/src/assets/img/geren-xiangce.png" alt=""></div>
            <div class="CDName">个人相册</div>
            <div class="CDXianQing">•••</div>
        </router-link>

        <router-link to="/kaquanqianbao">
            <div class="CDImg2"><img src="/src/assets/img/geren-qianbao.png" alt=""></div>
            <div class="CDName">卡券钱包</div>
            <div class="CDXianQing">•••</div>
        </router-link>

        <router-link to="/setting" class="CDlast">
            <div class="CDImg2"><img src="/src/assets/img/geren-shezhi.png" alt=""></div>
            <div class="CDName">设置中心</div>
            <div class="CDXianQing">•••</div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PCG',
        methods:{
            pre(){
                this.$router.push('/');
            }
    }
}
</script>

<style scoped>
    .PCG{
        width: 100%;height: 13.32rem;
        background: #f2f2f2;
    }
    .ImgHeader{
        width: 7.5rem;
        height:2.2rem;
        font-size: 0.21rem;
        margin-bottom: 2.87rem;
        color: white;
        background: url("/src/assets/img/toubu-sekuai-jianbian.png") center;
    }
    .ImgHeader>.fa{
        margin-top: 0.5rem;
        margin-left: 0.24rem;
        text-decoration:none;
        color: white;
    }
    .ImgHeader>.fa>span{
        opacity: 0.5;
        line-height: 0.21rem;
    }
    .genduo{
        font-size: 0.05rem;
        margin-top: 0.35rem;
        margin-right: 0.24rem;
        float: right;
        text-decoration:none;
        color: white;
    }
    .xinxi{
        width: 5.7rem;
        height: 3.52rem;
        /*background: pink;*/
        position: absolute;
        left: 1rem;
        top: 1.1rem;
    }
    .xinxi>img{
        width: 2.25rem;
        height: 2.21rem;
        margin-left: 1.75rem;
    }
    .username{
        width: 2.25rem;
        height: 0.28rem;
        font-size: 0.28rem;
        font-family: 微软雅黑;
        color: #6d6d6d;
        font-weight: bold;
        margin-left: 1.75rem;
        margin-bottom: 0.17rem;
        text-align: center;
        margin-top: -0.3rem;
    }
    .gerenSM{
        color: #aeaeae;
        font-size: 0.19rem;
        margin-bottom: 0.15rem;
    }
    .dingwei{
        width: 2.25rem;
        height: 0.4rem;
        margin-left: 2rem;
    }
    .dwicon{
        width: 0.40rem;
        height: 0.40rem;
        float: left;
    }
    .dingwei>span{
        font-size: 0.3em;
        float: left;
        color: #858585;
    }
    .caidan{
        width: 7.01rem;
        height: 6.62rem;
        /*background: pink;*/
        margin: 0.3rem auto;

    }
    .caidan>a{
        width: 6.69rem;
        height: 0.68rem;
        display: block;
        overflow: hidden;
        color: #8d8d8d;
        font-family: 微软雅黑;
        line-height: 0.68rem;
        font-weight: bold;
        background: #ffffff;
        margin-bottom: 0.14rem;
        border-radius: 0.03rem;
        text-decoration: none;
        padding: 0.16rem 0.16rem;
        box-shadow: 0rem 0.02rem 0.1rem -0.01rem #cdcdcd;
    }
    .CDlast{
        margin-bottom: 0rem;
    }
    .CDImg{
        width: 0.7rem;
        height: 0.7rem;
        float: left;
        margin-right: 0.1rem;
    }
    .CDImg>img{
        width: 0.7rem;
        height: 0.7rem;
        display: block;
    }
    .CDImg2{
        width: 0.7rem;
        height: 0.75rem;
        float: left;
        margin-right: 0.1rem;
    }
    .CDImg2>img{
        width: 0.7rem;
        height: 0.75rem;
        display: block;
    }
    .CDName{
        font-size: 0.25rem;
        float: left;
    }
    .CDXianQing{
        font-size: 0.3rem;
        float: right;
        color: #cccccc
    }
    .loginout{
        width: 7.01rem;
        height: 1rem;
        margin: 0 auto;
        color: #ffffff;
        background: #FF6B6D;
        font-size:0.35rem;
        text-align: center;
        line-height: 1rem;
        display: block;
        font-family: 微软雅黑;
        border-radius: 0.05rem;
        text-decoration: none;
    }
</style>
