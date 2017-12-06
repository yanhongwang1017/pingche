<template>
    <ul class="cate">
        <li><a href=""><img src="/src/assets/img/shouye-pinche.png" alt=""></a></li>
        <li><a href=""><img src="/src/assets/img/shouye-juhui.png" alt=""></a></li>
        <li><a href=""><img src="/src/assets/img/shouye-qiuzhu.png" alt=""></a></li>
    </ul>
</template>

<script>
    export default {
        name: "catagory"
    }
</script>

<style scoped>
    .cate{
        width: 100%;
        height: 0.6rem;
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
    }
    .cate>li{
        width: 2.11rem;
        height: 100%;
        border-radius: 0.24rem;
        overflow: hidden;
    }
    .cate>li>a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .cate>li>a>img{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
