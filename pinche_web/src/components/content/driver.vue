<template>
    <div class="driver">
        <div class="xingcheng">
            <span class="chufa">{{data.begin}}</span>
            <div class="jiantou fa fa-arrow-right"></div>
            <span class="chufa">{{data.end}}</span>
        </div>
        <div class="zuo"><img src="/src/assets/img/zuo.png" alt=""></div>
        <ul class="siji">
            <li><img src="/src/assets/img/car.png" alt="" style="width: 0.76rem;"></li>
            <li><img src="/src/assets/img/sijii.png" alt="" style="width: 0.56rem;"></li>
            <li>{{data.driver}}</li>
            <li>
                <div class="bigCircle">
                    <div class="circle"></div>
                </div>
                黑色福特福克斯
            </li>
            <li>
                <div class="bigCircle">
                    <div class="circle"></div>
                </div>
                陕A NLB66
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "driver",
        props:["data"]
    }
</script>

<style scoped>
    .siji{
        width: 100%;height: 0.55rem;
        display: flex;justify-content: space-around;
    }
    .siji li{
        color: #b8b8b8;font-size: 0.22rem;line-height: 0.55rem;
    }
    .siji li img{display: block;}
    .zuo{
        float: right;width: 1.4rem;height: 0.45rem;
    }
    .zuo img{
        width: 100%;
    }
    .chufa{
        float: left;color: #8c8c8c;font-size: 0.36rem;
    }
    .jiantou{
        float: left;width: 0.36rem;height: 0.36rem;border-radius: 50%;
        background: url("/src/assets/img/pcxx.png") no-repeat center center;
        margin: 0.06rem 0.2rem 0;color: #ffffff;text-align: center;line-height: 0.36rem;font-size: 0.16rem;
    }
    .xingcheng{
        width: 50%;height: 0.8rem;float: left;margin-left: 0.24rem;margin-top: 0.24rem;
    }
    .driver{
        width: 100%;height: 1.8rem;
        background: #fff;
    }
</style>