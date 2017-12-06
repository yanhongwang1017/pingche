<template>
    <div class="con">
        <img src="/src/assets/img/jindu3.png" alt="" class="imgs">
        <div class="mains">
            <div class="photo">
                <img src="" alt="">
            </div>
            <span>头像预览展示区</span>
            <div class="choose">
                <div></div>
                <div></div>
            </div>
            <div class="submit">
                <router-link to="/register4">
                    <img src="/src/assets/img/zhuce-icon-queren.png" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "register4"
    }
</script>
<style scoped>
    .con{
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top: 5.23rem;
    }
    .imgs{
        width: 100%;
        height: 0.7rem;
        position: absolute;
        left: 0;
        top: -0.06rem;
    }
    .mains{
        width: 100%;
        height: 6.59rem;
        position: absolute;
        top: 0.7rem;
        background: url("/src/assets/img/zhuce.png") no-repeat;
        background-size: 100%;
    }
    .photo{
        width: 2.88rem;
        height: 2.1rem;
        background: url("/src/assets/img/photo.png") no-repeat;
        background-size: 100%;
        position: absolute;
        top: 1.2rem;
        left: 50%;
        margin-left: -1.44rem;
        overflow: hidden;
    }
    .mains>span{
        width: 100%;
        height: 0.6rem;
        font-size: 0.2rem;
        color: #b7b7b7;
        text-align: center;
        line-height: 0.6rem;
        position: absolute;
        top: 3.3rem;
        left: 0;
    }
    .choose{
        width: 100%;
        height: 0.64rem;
        position: absolute;
        left: 0;
        top: 4.02rem;
    }
    .choose>div:first-child{
        width: 1.05rem;
        height: 0.64rem;
        background: url("/src/assets/img/cat3.png") no-repeat;
        background-size: 100%;
        position: absolute;
        left: 2.14rem;
        top: 0;
    }
    .choose>div:last-child{
        width: 1.05rem;
        height: 0.64rem;
        background: url("/src/assets/img/cat4.png") no-repeat;
        background-size: 100%;
        position: absolute;
        right: 2.14rem;
        top: 0;
    }
    .submit{
        width: 100%;
        height: 1.04rem;
        position: absolute;
        top: 5.52rem;
        left: 0;
    }
    .submit img{
        width: 3.08rem;
        height: 1.04rem;
        position: absolute;
        margin-left: 50%;
        left: -1.54rem;
    }
</style>