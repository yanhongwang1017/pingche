<template>
    <footer>
       <a href="" class="home"><img src="/src/assets/img/home_03.png" alt=""></a>
        <a href="" class="fabu"><img src="/src/assets/img/shouye-fabu-icon.png" alt=""></a>
        <a href="" class="xiaoxi"><img src="/src/assets/img/xiaoxi_03.png" alt=""></a>
    </footer>
</template>

<script>
    export default {
        name: "footer1"
    }
</script>

<style scoped>
    footer{
        width: 100%;
        height: 1rem;
        background:white;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 999;
        display: flex;
        justify-content: space-around;
    }
    .home{
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        overflow: hidden;
        margin-top:0.15rem;
    }
    .home>img{
        display: block;
       width: 100%;
        height: 100%;
    }
    .fabu{
        width: 1.32rem;
        height: 0.69rem;
        margin-top:0.14rem;
        border-radius: 0.31rem;
        overflow: hidden;
    }
    .fabu>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .xiaoxi{
        width: 0.76rem;
        height: 0.68rem;
        margin-top:0.14rem;
        overflow: hidden;
    }
    .xiaoxi>img{
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
