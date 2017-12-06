<template>
    <div class="hb">
        <header>
            <div class="left">
                <div class="imgBox" @touchstart="personal()"><img src="/src/assets/img/photo.jpg" alt=""></div>
            </div>
            <div class="right">
                <div class="searchBox">
                    <div class="search-icon " >
                        <img src="/src/assets/img/header_09.png" alt="">
                    </div>
                    <input id="search" type="text" placeholder="Search for...">
                    <div class="yuyin">
                        <img src="/src/assets/img/header_06.jpg" alt="">
                    </div>
                </div>
                <div class="tipNews">
                    <img src="/src/assets/img/header_03.jpg" alt="">
                </div>
            </div>
        </header>
        <!--banner-->
        <div id="slider" class="mui-slider" >
            <div class="mui-slider-group">
                <!-- 第一张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="/src/assets/img/shouye-banner+zi.png">
                    </a>
                </div>
                <!-- 第二张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="/src/assets/img/shouye-banner+zi.png">
                    </a>
                </div>
                <!-- 第三张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="/src/assets/img/shouye-banner+zi.png">
                    </a>
                </div>
                <!-- 第四张 -->
                <div class="mui-slider-item">
                    <a href="#">
                        <img src="/src/assets/img/shouye-banner+zi.png">
                    </a>
                </div>
            </div>
            <div id="circle">
                <ul>
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>

    import "@/assets/js/banner.js"
    export default {
        name: "headerAndBan",
        methods:{
            personal(){
                if(!sessionStorage.login){
                    this.$router.push('/login');
                }else{
                    this.$router.push('/personal');
                }
            }
        }
    }
</script>

<style scoped>

    header{
        width: 100%;
        height: 1.1rem;
        background:#ffffff ;
        position: fixed;
        left:0;
        top:0;
        overflow: hidden;
        z-index: 999;
    }
    header>.left{
        width: 17.86667%;
        height:100%;
        float: left;
    }
    header .imgBox{
        display: block;
        width: 0.64rem;
        height: 0.64rem;
        margin-top:0.23rem;
        margin-left:0.24rem;
        box-shadow: 0 0 3px #f2f4f3;
        border-radius: 50%;
        overflow: hidden;
    }
    header .imgBox>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    header>.right{
        width: 82.13333%;
        height:100%;
        float: left;
        background:#ff3e6b;
    }
    .searchBox{
        float: left;
        width: 4.48rem;
        height:0.66rem;
        border-bottom:1px solid #fe9fb5;
        margin-left:0.14rem;
        position: relative;
        padding-bottom:0.01rem;
    }
    .search-icon{
        float: left;
        width: 0.22rem;
        height: 0.22rem;
        float:left;
        background: green;
        margin-top:0.37rem ;
        margin-left:0.17rem;
        color: white;
        font-size: 0.22rem;
    }
    .search-icon>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    #search{
        padding-left:0.23rem;
        box-sizing: border-box;
        background:rgba(0,0,0,0);
        float: left;
        width: 4.0rem;
        height: 0.29rem;
        border:none;
        outline: none;
        font-size: 0.2rem;
        margin-bottom: 0;
        margin-top:0.24rem ;
    }
    input::-webkit-input-placeholder{
        color: #fe8a9f;
    }
    .yuyin{
        position: absolute;
        width:0.4rem ;
        height: 0.26rem;
        background: #34393f;
        top:0.36rem;
        right:-0.16rem;
    }
    .yuyin>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .tipNews{
        width: 0.24rem;
        height: 0.27rem;
        background: yellow;
        float:right;
        margin-top:0.35rem;
        margin-right: 0.24rem;
        position: relative;
    }
    .tipNews>img{
        display: block;
        width: 100%;
        height: 100%;
    }


    .mui-slider{
        width: 100%;
        height: 3.9rem;
        margin-top:1.1rem;
        overflow: hidden;
        position: relative;
    }
    .mui-slider-group{
        width: 400%;
        height:100%;
        position: relative;
    }

    .mui-slider-item{
        float: left;
        width: 25%;
        height: 100%;
        overflow: hidden;
    }
    .mui-slider-item>a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .mui-slider-item>a>img{
        width: 100%;
    }
    #circle{
        width: 1.6rem;
        height: 0.16rem;
        position: absolute;
        left:0;right:0;margin-left: auto;margin-right: auto;
        bottom: 0.5rem;
    }
    #circle ul{
        display: flex;
        justify-content: space-around;
    }
    #circle ul>li{
        width: 0.16rem;
        height: 0.16rem;
        background: #fa88a2;
       border-radius: 50%;
    }
    #circle ul>li.active{
        background: #F23B65;
    }

</style>
