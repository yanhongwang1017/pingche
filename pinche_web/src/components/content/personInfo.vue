<template>
    <div class="infoBox">
        <img class="info_img" src="src/assets/img/touxiang.png" alt="">
        <img class="star" src="src/assets/img/star.png" alt="">
        <div class="names">
            <div class="name_area">{{userInfo.uname}}</div>
            <div class="bottom">
                <div class="bigCircle">
                    <div class="circle"></div>
                </div>
                <div class="school">{{userInfo.school}}{{userInfo.yuanxi}}</div>
            </div>
            <router-link to="" class="shiming" tag="div">实名</router-link>
        </div>
        <ul class="diandian"><li></li><li></li><li></li></ul>
        <div class="haoping">
            <div class="bigCircle" style="float: left;margin-right: 0.09rem;margin-top: 0.08rem;">
                <div class="circle"></div>
            </div>
            <div class="good_word">好评系数</div>
            <img src="/src/assets/img/good.png" alt="" class="good">
        </div>
    </div>
</template>

<script>
    export default {
        name: "person-info",
        data(){
            return{
                userInfo:{}
            }
        },
        created(){
            var uid = JSON.parse(sessionStorage.login).id;
            var that = this;
            fetch('/ajax/users/userinfo?uid='+uid).then(function(e){
                return e.json();
            }).then(function(e){
                that.userInfo = e;
            })
        }
    }
</script>

<style scoped>
    .good{
        position: absolute;
        top: -0.04rem;right: 0;
        width: 1.08rem;
    }
    .infoBox{
        width: 100%;height: 1.41rem;background: #fff;position: relative;
    }
    .info_img{
        width: 0.93rem;height: 0.93rem;border-radius: 50%;
        position: absolute;left: 0.24rem;top: 0.24rem;
        box-shadow: 0 0 0px 1px #e5e5e5;
    }
    .star{
        width: 0.26rem;height: 0.26rem;border-radius: 50%;
        position: absolute;left:1.19rem;top: 0.33rem;
    }
    .names{
        width: 2.62rem;height: 0.54rem;
        position: absolute;left:1.4rem;top:0.48rem;
    }
    .name_area{
        font-size: 0.24rem;color: #fd3786;
    }
    .bottom{
        width: 100%;height: 0.18rem;margin-top: 0.11rem;
    }
    .bigCircle{
        width: 0.13rem;height: 0.13rem;border-radius: 50%;
        background: #fff0e3;float: left;margin-right: 0.11rem;margin-top:0.1rem;
    }
    .circle{
        width: 0.05rem;height: 0.05rem;margin-left: 0.04rem;margin-top: 0.04rem;
        border-radius: 50%;background: #ff8b34;
    }
    .school{
        float: left;font-size: 0.18rem;color: #cbcbcb;
    }
    .shiming{
        width: 0.8rem;height: 0.35rem;
        font-size: 0.2rem;color: #Fff;
        position: absolute;right: -0.1rem;
        top: 0.04rem;
        background: url("/src/assets/img/btnsss.png");
        border-radius: 0.2rem;text-align: center;line-height: 0.35rem;
    }
    .diandian{
        width: 0.3rem;height: 0.07rem;
        position: absolute;
        top: 0.24rem;right: 0.24rem;
        display: flex;
        justify-content: space-around;
    }
    .diandian li{
        width: 0.07rem;height: 0.07rem;
        border-radius: 50%;background: #b3b3b3;
    }
    .haoping{
        width: 2.31rem;height: 0.2rem;
        position: absolute; top:0.82rem;right:0.24rem;
    }
    .good_word{
        font-size: 0.18rem;
        color: #cacaca;
    }
</style>