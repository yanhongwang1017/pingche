<template>
    <div class="mapBox">
        <div class="mapImg"><img src="/src/assets/img/map.png" alt=""></div>
        <div class="bottom">
            <div class="bigCircle" style="float: left;margin-left:0.23rem;margin-right: 0.09rem;margin-top: 0.32rem;">
                <div class="circle"></div>
            </div>
            <span>长安高薪开发区城墙南大街西安交通大学 北门</span>
            <div class="find"><img src="/src/assets/img/find.png" alt=""></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "maps"
    }
</script>

<style scoped>
    .find{
        float: right;width: 0.97rem;height: 0.3rem;margin-right: 0.24rem;margin-top: 0.24rem;
    }
    .find img{
        width: 100%;display: block;
    }
    .bottom span{
        color: #8d8d8d;font-size: 0.18rem;
    }
    .mapBox{
        width: 100%;height: 3.15rem;background: #fff;
    }
    .mapImg{
        width: 100%;height: 2.39rem;
    }
    .mapImg img{
        width: 100%;display: block;
    }
    .bottom{
        width: 100%;height: 0.76rem;line-height: 0.2rem;
    }
</style>