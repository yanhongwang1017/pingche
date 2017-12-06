<template>
    <div class="con">
        <img src="/src/assets/img/jindu2.png" alt="" class="imgs">
        <form>
            <div class="mains">
                <div class="schools">
                    <div class="cle"></div>
                    <span class="title">学校</span>
                    <input type="text" class="school" placeholder="请您输入就读学校" autocomplete="off" v-model="school">
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                </div>
                <div class="yuanxi">
                    <div class="cle"></div>
                    <span class="title">院系</span>
                    <input type="text" class="school" placeholder="请您输入所在院系" autocomplete="off" v-model="yuanxi">
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                </div>
                <div class="yuanxi year">
                    <div class="cle"></div>
                    <span class="title">入学年份</span>
                    <input type="text" class="school" placeholder="请您输入入学年份" autocomplete="off" v-model="year">
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                </div>
                <div class="yuanxi number">
                    <div class="cle"></div>
                    <span class="title">学生证号</span>
                    <input type="text" class="school" name="" placeholder="请您输入学号" autocomplete="off" v-model="number">
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                </div>
                <div class="yuanxi home">
                    <div class="cle"></div>
                    <span class="title">家乡所在地</span>
                    <input type="text" class="school" name="" placeholder="请您输入家乡所在地" autocomplete="off" v-model="hometown">
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                </div>
                <div class="submit" v-show="flag">
                    <div @touchstart = submit()>
                        <img src="/src/assets/img/zhuce-icon-queren.png" alt="">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: "register2",
        data(){
            return{
                school:"",
                yuanxi:"",
                year:"",
                number:"",
                hometown:""
            }
        },
        computed:{
            flag(){
                if(this.school && this.yuanxi && this.year && this.number && this.hometown){
                    return  true;
                }else{
                    return false;
                }

            }
        },
        methods:{
            submit(){
                var that = this;
                fetch('/ajax/users/school',{
                    method:"post",
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    body:"school="+this.school+"&yuanxi="+this.yuanxi+"&year="+this.year+"&number="+this.number+"&hometown="+this.hometown+"&id="+sessionStorage.getItem("regid")
                }).then(function(e){
                    return e.text();
                }).then(function(e){
                    if(e.message == "error"){
                        that.$router.push('/register2');
                    }else{
                        sessionStorage.removeItem("regid");
                        that.$router.push('/login');
                    }
                })
            }
        }
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
        top: 0;
    }
    .mains{
        width: 100%;
        height: 6.59rem;
        position: absolute;
        top: 0.7rem;
        background: url("/src/assets/img/zhuce.png") no-repeat;
        background-size: 100%;
    }
    .schools,.yuanxi{
        width: 5.8rem;
        height: 0.85rem;
        position: absolute;
        top: 0.69rem;
        left: 50%;
        margin-left: -2.9rem;
        border-bottom: 0.03rem solid #e5e5e5;
    }
    .yuanxi{
        top: 1.57rem;
    }
    .year{
        top: 2.45rem;
    }
    .number{
        top: 3.33rem;
    }
    .home{
        top: 4.21rem;
    }
    .cle{
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background: #ff3972;
        border: 3px solid #ffd6e2;
        position: absolute;
        left: 0.08rem;
        bottom: 0.16rem;
    }
    .yuanxi .cle{
        background: #ff8c39;
        border: 3px solid #fee9d8;
    }
    .title{
        position: absolute;
        color: #ff3972;
        font-size: 0.2rem;
        left: 0.44rem;
        bottom: 0.1rem;
    }
    .cir1{
        width: 0.03rem;
        height: 0.03rem;
        background: #b1b1b1;
        border-radius: 50%;
        position: absolute;
        left: -0.02rem;
        bottom: -0.02rem;
    }
    .cir2{
        width: 0.03rem;
        height: 0.03rem;
        background: #b1b1b1;
        border-radius: 50%;
        position: absolute;
        bottom: -0.02rem;
        right: -0.02rem;
    }
    .school{
        position: absolute;
        border: none;
        background: none;
        outline: none;
        left: 1.8rem;
        bottom: 0.1rem;
    }
    input::-webkit-input-placeholder{
        color: #d0d0d0;
        font-size:0.22rem;

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