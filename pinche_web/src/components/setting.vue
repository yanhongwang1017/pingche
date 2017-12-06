<template>
    <div class="szzxCon">
        <div class="ImgHeader">
            <router-link to="/personal" class="fa fa-chevron-left" aria-hidden="true"><span>••</span></router-link>
            <div class="title">设置中心</div>
        </div>
        <div class="caidan">
            <router-link to="">
                <div class="CDName">帮助与反馈</div>
                <div class="CDXianQing">•••</div>
            </router-link>

            <router-link to="">
                <div class="CDName">安全设置</div>
                <div class="CDXianQing">•••</div>
            </router-link>

            <router-link to="">
                <div class="CDName">辅助功能</div>
                <div class="CDXianQing">•••</div>
            </router-link>

            <router-link to="">
                <div class="CDName">通用</div>
                <div class="CDXianQing">•••</div>
            </router-link>

            <router-link to="">
                <div class="CDName">隐私</div>
                <div class="CDXianQing">•••</div>
            </router-link>

            <router-link to="" class="CDlast">
                <div class="CDName">关于我们</div>
                <div class="CDXianQing">•••</div>
            </router-link>
        </div>
        <div class="loginout" @touchstart="logout()">退出登录</div>
    </div>
</template>

<script>
    export default {
        name: "szzx-con",
        methods:{
            logout(){
                sessionStorage.removeItem("login");
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    .szzxCon{
        width: 100%;height: 13.32rem;
        background: #f2f2f2;
        position: absolute;
        left: 0;
        top: 0;
    }
    .ImgHeader{
        width: 7.5rem;
        height:2.2rem;
        font-size: 0.21rem;
        margin-bottom: 0.24rem;
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
    .title{
        font-size: 0.55rem;
        margin-left: 0.24rem;
        margin-top: 0.24rem;
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
    .CDName{
        font-size: 0.25rem;
        float: left;
        margin-left: 0.10rem;
    }
    .CDXianQing{
        font-size: 0.07rem;
        float: right;
        color: #cccccc
    }
    .loginout{
        width:7.5rem;
        height: 1.1rem;
        display: block;
        font-size: 0.38rem;
        text-decoration: none;
        margin-top: 3.1rem;
        text-align: center;
        line-height: 1.1rem;
        color:#ffffff;
        background: url("/src/assets/img/toubu-sekuai-jianbian.png") center;
    }
</style>