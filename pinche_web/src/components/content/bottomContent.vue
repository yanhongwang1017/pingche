<template>
    <div class="content_box">
        <main>
            <div class="route_title">
                <div class="xing">XIANG</div>
                <div class="luxian">XINGCHENGLUXIAN</div>
                <div class="hanzi">行车路线</div>
            </div>
            <driver :data="tripData"></driver>
            <div class="route_title">
                <div class="xing">XIANG</div>
                <div class="luxian">FACHESHIJIAN</div>
                <div class="hanzi">发车时间</div>
            </div>
            <div class="time">
                <div class="left">
                    <div class="bigCircle">
                        <div class="circle"></div>
                    </div>
                    <span class="times">{{tripData.time}}</span>
                </div>
                <div class="right">
                    <span class="times">{{tripData.day}}</span>
                    <p class="pm">2017</p>
                </div>
            </div>
            <div class="route_title">
                <div class="xing">XIANG</div>
                <div class="luxian">CHENGCHEDIDIAN</div>
                <div class="hanzi">乘车地点</div>
            </div>
            <maps></maps>
            <div class="route_title">
                <div class="xing">XIANG</div>
                <div class="luxian">CANJIARENSHU</div>
                <div class="hanzi">参加人数</div>
            </div>
            <div class="number">
                <ul class="user">
                    <li class="fa fa-user"></li>
                    <li class="fa fa-user"></li>
                    <li class="fa fa-user"></li>
                    <li class="fa fa-user" style="color: #e5e5e5;"></li>
                </ul>
                <div class="money">
                    <span style="color: #ffa7cf;">单价 RMB </span>
                    <span style="color: #fd358e;">{{tripData.price}}.00</span>
                </div>
            </div>
        </main>
        <div class="jiange"></div>
        <div class="shoucang">
            <span class="fa fa-star"></span>
            <span class="scword">收藏</span>
            <router-link to="/join" class="link" tag="div">立即参加</router-link>
            <div class="join">立即联系</div>
        </div>
    </div>
</template>

<script>
    import driver from '@/components/content/driver.vue';
    import maps from '@/components/content/maps.vue';
    export default {
        components: {driver,maps},
        name: "bottom-content",
        data(){
            return{
                tripData:{}
            }
        },
        created(){
            var tid = this.$route.query.tid;
            var that = this;
            fetch('/ajax/users/tripinfo/'+tid).then(function(e){
                return e.json();
            }).then(function(e){
                that.tripData = e[0];
            })
        }
    }
</script>

<style scoped>
    .link,.join{
        float: right;width: 2.65rem;height: 0.53rem;
        background: url("/src/assets/img/pcx111.png") no-repeat center center;
        border-radius: 0.22rem;margin-top: 0.24rem;margin-right: 0.24rem;
        color: #fff;text-align: center;line-height: 0.53rem;font-size: 0.24rem;
    }
    .join{
        background: url("/src/assets/img/pcx222.png") no-repeat center center;
    }
    .scword{
        font-size: 0.24rem;color: #a2a2a2;
    }
    .fa-star{
        font-size: 0.44rem;color: #ffb23e;margin-left: 0.24rem;
    }
    .shoucang{
        width: 100%;height: 1rem;background: #fff;line-height: 0.7rem;
    }
    .money{
        float: right;width: 2.92rem;height: 0.33rem;font-size: 0.32rem;margin-top: 0.3rem;
    }
    .user{
        width: 40%;height: 0.4rem;display: flex;justify-content: space-between;
        margin-left: 0.32rem;padding-top: 0.32rem;float: left;
    }
    .user li{
        font-size: 0.4rem;color: #ff704e;
    }
    .number{
        width: 100%;height: 1rem;background: #fff;
    }
    .jiange{
        width: 100%;height: 0.58rem;
    }
    .pm{
        font-size: 0.26rem;color: #e9e9e9;display:block;float:left;margin-left: 0.1rem;line-height: 0.56rem;
    }
    .times{
        font-size: 0.26rem;color: #cacaca;display:block;float: left;margin-left: 0.1rem;line-height: 0.56rem;
    }
    .left{
        width: 30%;height: 0.26rem;float: left;
        margin-left: 0.23rem;margin-top: 0.37rem;
    }
    .right{
        width: 25%;height: 0.26rem;float: right;
        margin-right: 0.13rem;margin-top: 0.37rem;
    }
    .time{
        width: 100%;height: 1rem;background: #fff;
    }
    .hanzi{
        width: 100%;height: 0.22rem;
        font-size: 0.22rem;color: #666f78;
        position: absolute;left: 0;
        top: 0.6rem;
    }
    .luxian{
        width: 100%;height: 0.16rem;
        position: absolute;left: 0;
        top: 0.38rem;font-size: 0.16rem;
        color: #bcbdc1;
    }
    .xing{
        width: 100%;height: 1.41rem;line-height: 1.41rem;
        color: #FFF;font-size: 0.64rem;
    }
    .route_title{
        width: 100%;height: 1.14rem;position: relative;
    }
    .content_box{
        width: 100%;
        background: #f2f2f2;
    }
</style>