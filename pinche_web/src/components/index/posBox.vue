<template>
    <section class="posBox">
        <ul class="position">
            <li><div @touchstart="pinche()"><img src="/src/assets/img/8_03.jpg" alt=""></div></li>
            <li><div @touchstart="help()"><img src="/src/assets/img/8_07.png" alt=""></div></li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "posBox",
        methods:{
            pinche(){
                if(!sessionStorage.login){
                    this.$router.push('/login');
                }else{
                    this.$router.push('/pinche');
                }
            },
            help(){
                if(!sessionStorage.login){
                    this.$router.push('/login');
                }else{
                    this.$router.push('/help');
                }
            }
        }
    }
</script>

<style scoped>
    .posBox{
        width: 100%;
        height: 1.9rem;
        padding:0.24rem;
        box-sizing: border-box;
        overflow: hidden;
    }
    .position{
        width: 10.87rem;
        height: 100%;
    }
    .position>li{
        float: left;
        width: 3.39rem;
        height: 1.42rem;
        margin-right: 0.24rem;

    }
    .position>li>div{
        display: block;
        width: 100%;
        height: 100%;
    }
    .position>li>div>img{
        width: 100%;
    }
    .position>li:last-of-type{
        margin-right: 0;
    }
</style>
