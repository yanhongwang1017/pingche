<template>
    <div class="container">
        <div class="header">
            <router-link to="/content" class="back"></router-link>
            <div class="word">筛选付款方式</div>
        </div>
        <div class="price">
            <span class="rmb">RMB</span>
            <span class="price1">{{price}}</span>
            <div class="point"></div>
            <span class="comfirm">请确认你的支付金额</span>
        </div>
        <div class="tall">
            <div class="xiang">XIANG
                <div class="sans">DISANFANGZHIFU</div>
                <div class="san">第三方支付</div>
            </div>
        </div>
        <div class="tools">
            <router-link :to="aaa"  class="Channel">
                    <img src="/src/assets/img/12_03.png" alt="">
            </router-link>
            <router-link :to="wei"  class="Channel">
                <img src="/src/assets/img/12_05.png" alt="">
            </router-link>
        </div>
        <div class="tall">
            <div class="xiang">XIANG
                <div class="sans">QITAZUHIFXUANZE</div>
                <div class="san">其他支付选择</div>
            </div>
        </div>
        <router-link to="" class="bankcard">
           <div class="icon">
               <img src="/src/assets/img/bank.png" alt="">
           </div>
           <div class="info">
             <div class="top">BANKCARD CHOICE AND PAY</div>
             <div class="bottom">银行卡选择支付</div>
           </div>
            <div class="num">  2 </div>
          </router-link>
        <router-link to="" class="address">
            <div class="icon">
                <img src="/src/assets/img/address.png" alt="">
            </div>
            <div class="info">
                <div class="top">HUODAO FUKUAN JISHILAIQU</div>
                <div class="bottom">货到付款</div>
            </div>
            <div class="detail">
                <div class="dian"></div>
                <div class="d-address">
                    {{address}}
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                price:"36",
                aaa:"",
                wei:"",
                card:"",
                address:"平阳路大马高层"
            }
        }
    }
</script>

<style>
    .container{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .header {
        width: 100%;
        height: 1.89rem;
        background-image: url("/src/assets/img/header.png");
        background-position: center;
        overflow: hidden;
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
    .word{
        font-size: 0.56rem;
        color: #ffffff;
        margin-left: 0.24rem;
    }
    .price{
        background: #ffffff;
        width: 100%;
        height: 0.8rem;
        padding:0 0.24rem;
    }
    .rmb{
        display: block;
        color:#fec0cd;
        font-size: 0.2rem;
        float: left;
        width: 0.5rem;
        height: 0.2rem;
        margin-top: 0.37rem;
        line-height: 0.2rem;
        font-family: "San Francisco Display";
    }
    .price1{
        display: block;
        margin-left: 0.06rem;
        font-size: 0.32rem;
        color: #ff3473;
        float: left;
        margin-top: 0.24rem;
        line-height: 0.32rem;
        font-weight: bold;
    }
    .point{
        width: 0.14rem;
        height: 0.14rem;
        border-radius: 50%;
        float: left;
        margin-left: 3.6rem;
        margin-top: 0.39rem;
        background: url("/src/assets/img/aa.png");
        background-position: center;
        background-size: cover;
    }
    .comfirm{
        display: block;
        float: left;
        font-size: 0.22rem;
        color: #b8b8b8;
        width: 2.1rem;
        height: 0.22rem;
        line-height: 0.22rem;
        float:left;
        margin-top: 0.35rem;
        margin-left: 0.13rem;
    }
    .tall{
        width: 100%;
        height: 1.14rem;
    }
    .xiang{
        width: 2.61rem;
        height: 100%;
        padding-left:0.24rem;
        box-sizing: border-box;
        font-size: 0.64rem;
        position: relative;
        color: #f9f9f9;
        line-height: 1.14rem;
    }
    .sans{
        width: 2.40rem;
        height: 0.16rem;
        position: absolute;
        left:0.24rem;
        top:0.35rem;
        line-height: 0.16rem;
        font-size: 0.16rem;
        color: #d3d3d5;
    }
    .san{
        width:1.9rem;
        height: 0.22rem;
        position: absolute;
        bottom:0.34rem;
        line-height: 0.22rem;
        color: #666f76;
        font-size: 0.22rem;
    }
    .tools{
        width: 100%;
        height: 1.05rem;
        display: flex;
        justify-content: space-around;
    }
    .Channel{
        display: block;
        width: 3.36rem;
        height: 1.05rem;
        box-shadow: 0 0 0.03rem 0.03rem #e9e9e9;
    }
    .Channel img{
        width: 3.36rem;
        height: 1.05rem;
    }
    .bankcard{
        display: block;
        width:7.2rem;
        height: 1.04rem;
        margin:0.2rem auto;
        position: relative;
        background: #ffffff;
        box-shadow: 0 0 0.03rem 0.03rem #e9e9e9;
    }
    .bankcard .icon{
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
        background: #ff3370;
        position: absolute;
        top:0;
        bottom:0;
        margin-top: auto;
        margin-bottom: auto;
        left:0.16rem;
    }
    .bankcard .icon img{
        width: 50%;
        height: 50%;
        margin: 25%;
        display: block;
    }
    .num{
        width: 0.62rem;
        height: 0.4rem;
        position: absolute;
        right:0.24rem;
        top:0;
        bottom:0;
        margin-top: auto;
        margin-bottom: auto;
        text-align: center;
        line-height: 0.4rem;
        background: #50576a;
        border-radius:0.4rem;
        font-size: 0.2rem;
        color: #fffeff;
    }
    .address{
        display: block;
        width:7.2rem;
        height: 1.04rem;
        margin:0.2rem auto;
        position: relative;
        background: #ffffff;
        box-shadow: 0 0 0.03rem 0.03rem #e9e9e9;
    }
    .address .icon{
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
        background: #ff8434;
        position: absolute;
        top:0;
        bottom:0;
        margin-top: auto;
        margin-bottom: auto;
        left:0.16rem;
    }
    .address .icon img{
        width: 60%;
        height: 60%;
        margin:20%;
        display: block;
    }
    .info{
        width: 3.4rem;
        height: 0.42rem;
        position: absolute;
        top:0;
        bottom:0;
        margin-top: auto;
        margin-bottom: auto;
        left:1.03rem;
        font-size:0.14rem;
    }
    .info .top{
        width: 3.4rem;
        height: 0.14rem;
        font-size: 0.2rem;
        line-height: 0.14rem;
        color: #efefef;
        margin-bottom: 0.06rem;
    }
    .info .bottom{
        width: 100%;
        height: 0.24rem;
        color: #a3a3a3;
        font-size: 0.2rem;
        font-weight: normal;
        line-height: 0.22rem;
    }
    .detail{
        width: 2.6rem;
        height: 0.24rem;
        position: absolute;
        right:0;
        top:0;
        bottom:0;
        margin-top: auto;
        margin-bottom: auto;
    }
    .detail .dian{
        width: 0.14rem;
        height: 0.14rem;
        border-radius: 50%;
        float: left;
        margin-top: 0.06rem;
        background: url("/src/assets/img/aa.png");
        background-position: center;
        background-size: cover;
    }
    .address .d-address{
        width: 2.4rem;
        height: 0.24rem;
        float: right;
        color: #b6b6b6;
        line-height: 0.24rem;
        font-size: 0.2rem;
    }
</style>