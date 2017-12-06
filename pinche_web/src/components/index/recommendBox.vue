<template>
    <section class="recommendBox">
        <div class="title">
            <div class="word1">XIANG</div>
            <div class="word2">
                <p class="word21">XIANGYUE<span>.</span>APP</p>
                <p class="word22">推荐专栏</p>
            </div>
        </div>
        <catagory></catagory>
        <car-list></car-list>
    </section>
</template>

<script>
    import Catagory from "./catagory.vue";
    import CarList from "./carList.vue";

    export default {
        components: {
            CarList,
            Catagory},
        name: "recommendBox"
    }
</script>
<style scoped>
    .recommendBox{
        width: 100%;
        height: auto;
        background: #f2f2f2;
        padding:0 0.24rem;
        padding-bottom: 0.28rem;
        box-sizing: border-box;
    }
    .recommendBox .title{
        width: 100%;
        height: 1.37rem;
        text-align: center;
        position: relative;
    }
    .recommendBox .word1{
        position: absolute;
        top:0;
        left:0;
        right:0;
        margin-right: auto;
        margin-left: auto;
        color: #f9f9f9;
        font-size: 1rem;
        line-height: 1.37rem;
    }
    .recommendBox .word2{
        width: 100%;
        height: 1.37rem;
        padding-top:0.43rem;
        box-sizing: border-box;
        position: absolute;
        top:0;
        left:0;
        color: #959a9e;
    }
    .word21{
        height: 0.27rem;
        font-size: 0.14rem;
        line-height: 0.27rem;
        font-weight: bold;
        color: #92959a;
    }
    .word22{
        height: 0.33rem;
        font-size: 0.23rem;
        line-height: 0.33rem;
        font-weight: bold;
        color: #6c737b;
        letter-spacing: 0.12rem;
    }
</style>
