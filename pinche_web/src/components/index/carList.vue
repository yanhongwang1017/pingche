<template>
    <ul class="list">
        <li v-for="item in listData" @touchstart="con(item.tid)">
            <div class="carimg"><img src="/src/assets/img/carImg_03.png" alt=""></div>
            <div class="carDetail">
                <div class="top">
                    <div class="toFrom">
                        <div class="from">{{item.begin}}</div>
                        <div class="link-icon"><img src="/src/assets/img/zuo_03.png" alt=""></div>
                        <div class="to">{{item.end}}</div>
                    </div>
                    <div class="price">
                        单价RMB
                        <span>&nbsp;{{item.price}}元</span>
                    </div>
                </div>
                <div class="bottom">
                    <div class="driverImg"></div>
                    <div class="carname">LeBron</div>
                    <div class="zuowei">
                        <div class="wei"><img src="/src/assets/img/zuo_07.png" alt=""></div>
                        <div class="wei"><img src="/src/assets/img/zuo_07.png" alt=""></div>
                        <div class="wei"><img src="/src/assets/img/zuo_07.png" alt=""></div>
                        <div class="wei"><img src="/src/assets/img/zuo_09.png" alt=""></div>

                    </div>
                    <div class="time">
                        <span>{{item.day}} {{item.time}} </span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "carList",
        data(){
            return {
                listData:[]
            }
        },
        methods:{
            con(id){
                if(!sessionStorage.login){
                    this.$router.push('/login');
                }else{
                    this.$router.push('/content?tid='+id);
                }
            }
        },
        created(){
            var that = this;
            fetch('/ajax/users/trip').then(function(e){
                return e.json();
            }).then(function(e){
                that.listData = e;
            })
        }
    }
</script>

<style scoped>
    /*列表*/
    .list{
        width: 100%;
        height: auto;
        margin-bottom: 0.1rem;
    }
    .list>li{
        width: 100%;
        height: 1.5rem;
        margin-bottom: 0.12rem;
        box-shadow: 0 0.02rem 0.08rem 0.03rem rgba(183,183,183,0.4);
    }
    .list>li:last-of-type{
        margin-bottom: 0;
    }
    .carimg{
        width:21.367521%;
        height: 100%;
        float: left;
    }
    .carimg>img{
        width: 100%;
    }
    .carDetail{
        float: left;
        width: 78.632479%;
        height: 100%;
        background: #ffffff;
    }
    .carDetail .top{
        width: 100%;
        height: 0.71rem;
        line-height: 0.71rem;
    }
    .toFrom{
        font-size: 0.28rem;
        font-weight: bolder;
        color: #8d8d8d;
    }
    .from{
        margin-left:0.17rem;
    }
    .link-icon{
        width: 0.14rem;
        height: 0.14rem;
        border-radius: 50%;
        overflow: hidden;
        float: left;
        margin-top:0.32rem;
        margin-left:0.11rem;
        margin-right:0.11rem;
    }
    .link-icon>img{
        display: block;
        width: 100%;
        height: 100%;
    }

    .toFrom>div{
        float: left;
    }
    .price{
        float: right;
        margin-right: 0.14rem;
        font-size: 0.28rem;
        color: #fcc2d1;
        font-weight: bold;
    }
    .price>span{
        color: #f9407e;
    }
    .carDetail .bottom{
        width: 100%;
        height: 0.79rem;
    }
    .driverImg{
        width: 0.52rem;
        height: 0.52rem;
        border-radius: 50%;
        margin-left: 0.17rem;
        margin-top:0.03rem;
        background: green;
        float: left;
    }
    .carname{
        width: auto;
        margin-left: 0.11rem;
        margin-top: 0.3rem;
        color: #b8b8b8;
        font-size: 0.15rem;
        font-weight: bold;
        float: left;
    }
    .zuowei{
        float: left;
        width: 0.88rem;
        height: 0.24rem;
        margin-top:0.3rem;
        margin-left:0.38rem;
        display: flex;
        justify-content: space-between;
    }
    .zuowei>.wei{
        width: 0.18rem;
        height: 0.24rem;
    }
    .zuowei>.wei>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .bili{
        font-size: 0.15rem;
        margin-left:0.05rem;
        line-height: 0.2rem;
        color: #b8b8b8;
    }
    .time{
        float: right;
        width: auto;
        font-size: 0.15rem;
        margin-right: 0.14rem;
        margin-top: 0.3rem;
        font-size: 0.15rem;
        font-weight: bold;
        color: #b8b8b8;
    }
</style>
