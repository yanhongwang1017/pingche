<template>
    <div class="contentBox">
        <div class="head">
            <div class="headTop" @touchstart="pre()">
                <span class="fa fa-angle-left"></span>
                <div class="circle"></div>
                <div class="circle circle1"></div>
            </div>
            <div class="headBottom">
                <div class="title">拼车信息</div>
                <div class="share fa fa-share-alt" @touchstart="show()"></div>
            </div>
        </div>
        <personInfo></personInfo>
        <bottomContent></bottomContent>
        <div id="mask" v-if="aa">
            <div class="maskk"></div>
            <div class="mskbox">
                <div class="share fa fa-share-alt" @touchstart="show()" style="margin-top: 0.68rem;"></div>
                <ul class="shareIcon">
                    <li class="fa fa-qq" style="color: #33b5ff;"><a href="mqqwpa://im/chat?chat_type=wpa&uin=779291574&version=1&src_type=web&web_src=oicqzone.com" ></a></li>
                    <li class="fa fa-weixin" style="color: #1fd32a;"></li>
                    <li class="fa fa-weibo" style="color: #fe922f;"></li>
                    <li class="circles"><span></span><span></span><span></span></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    import personInfo from '@/components/content/personInfo.vue';
    import bottomContent from '@/components/content/bottomContent.vue';
    export default {
        components: {personInfo,bottomContent},
        name: 'app',
        data(){
            return{
                aa:false
            }
        },
        methods:{
            show(){
                this.aa = !(this.aa);
            },
            pre(){
                this.$router.go(-1);
            }
        }
    };
</script>


<style scoped>
    .contentBox{width: 100%;position: absolute;left: 0;top:0;}
    .shareIcon{width: 1.09rem;height: 6.14rem;position: absolute;top:2.45rem;right:0.28rem;display: flex;
        flex-wrap:wrap;align-content: space-between;}
    .shareIcon li{width: 1.08rem;height: 1.08rem;border-radius: 50%;background: #ffffff;box-shadow: 0 0 2px 2px #dcdcdc;
                font-size: 0.57rem;text-align: center;line-height: 1.08rem;position: relative;}
    .shareIcon li a{display: block;width: 100%;height: 100%;position: absolute;left: 0;top: 0;}
    .circles{display: flex;justify-content: center;align-items: center;}
    .circles span{width: 0.13rem;height: 0.13rem;border-radius: 50%;background: #b6b6b6;}
    #mask{width: 100%;height: 100vh;position: absolute;left: 0;top: 0;}
    .maskk{width: 100%;height: 100vh;opacity:.7;background: #ffffff;position: absolute;left: 0;top: 0;}
    .mskbox{width: 100%;height: 100vh;position: absolute;left: 0;top: 0;}
    .head{width: 100%;height: 1.49rem;background: url('/src/assets/img/head.png') no-repeat center center;}
    .headTop{width: 30%;height: 0.68rem;}
    .headTop span{font-size: 18px;color: #ffffff;display: block;float: left;margin-left: 0.25rem;line-height: 0.68rem;}
    .circle{width: 0.04rem;height: 0.04rem;border-radius: 50%;background: #FFF;float:left;margin-left: 0.04rem;margin-top: 0.32rem;}
    .circle1{opacity: 0.7;}
    .headBottom{width: 100%;height: 0.57rem;}
    .title{font-size: 0.55rem;color: #ffffff;float: left;margin-left: 0.25rem;}
    .share{width: 0.53rem;height: 0.53rem;background: #ff547e;border-radius: 50%;border-radius: 50%;float: right;margin-right: 0.26rem;
        border:0.02rem solid #fff;}
    .fa-share-alt{font-size: 0.3rem;text-align: center;line-height: 0.53rem;color: #ffffff;font-weight: 500;}
</style>
