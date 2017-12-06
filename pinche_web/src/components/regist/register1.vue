<template>

    <div class="con">
        <img src="/src/assets/img/jindu1.png" alt="" class="imgs">
        <form>
            <div class="mains">
                <div class="name">
                    <div class="top">
                        <img src="/src/assets/img/uname.png" alt="">
                        <span>Username</span>
                    </div>
                    <div class="bot">
                        <div class="cle"></div>
                        <input type="text" class="uname" placeholder="请您输入用户名" autocomplete="off" v-model="uname">
                        <div class="cle1" v-if="nameFlag"></div>
                    </div>
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                    <div class="mess" v-show="tishi1Flag" v-if="!nameFlag">
                        <div class="angle"></div>
                        <div class="tishi">
                            <img src="/src/assets/img/mess_03.png" alt="">
                            <span>用户名格式有误</span>
                            <img src="/src/assets/img/mess_06.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="pass">
                    <div class="top">
                        <img src="/src/assets/img/upass.png" alt="">
                        <span>Password</span>
                    </div>
                    <div class="bot">
                        <div class="cle"></div>
                        <input type="password" class="upass" placeholder="请您输入6--16位密码" autocomplete="off" v-model="upass">
                    </div>
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                    <div class="mess" v-show="tishi2Flag" v-if="!passFlag">
                        <div class="angle"></div>
                        <div class="tishi">
                            <img src="/src/assets/img/mess_03.png" alt="">
                            <span>您的密码格式有误</span>
                            <img src="/src/assets/img/mess_06.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="pass1">
                    <div class="top">
                        <img src="/src/assets/img/upass.png" alt="">
                        <span>Password</span>
                    </div>
                    <div class="bot">
                        <div class="cle"></div>
                        <input type="password" class="upass1" placeholder="请您确认密码" autocomplete="off" v-model="upass1">
                    </div>
                    <div class="cir1"></div>
                    <div class="cir2"></div>
                    <div class="mess" v-show="tishi3Flag" v-if="!pass1Flag">
                        <div class="angle"></div>
                        <div class="tishi">
                            <img src="/src/assets/img/mess_03.png" alt="">
                            <span>您的密码输入有误</span>
                            <img src="/src/assets/img/mess_06.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="submit" v-show="flag">
                    <div @touchstart="submit()">
                        <img src="/src/assets/img/zhuce-icon-queren.png" alt="">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        name: "register1",
        data () {
            return {
                uname:"",
                upass:"",
                upass1:"",
                nameFlag:false,
                tishi1Flag:false,
                passFlag:false,
                tishi2Flag:false,
                pass1Flag:false,
                tishi3Flag:false,
                flag:false
            }
        },
        watch:{
            uname(val){
                var reg=/^[a-zA-Z]\w{5,11}$/;
                if(reg.test(val)){
                    this.nameFlag = true;
                }else{
                    this.nameFlag = false;
                    this.tishi1Flag = true;
                }
                if(this.nameFlag && this.passFlag && this.pass1Flag){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            },
            upass(val){
                var reg = /^[0-9a-z]\w{5,15}$/i;
                if(reg.test(val)){
                    this.passFlag = true;
                }else{
                    this.passFlag = false;
                    this.tishi2Flag = true;
                }
                if(this.nameFlag && this.passFlag && this.pass1Flag){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            },
            upass1(val){
                if(val == this.upass){
                    this.pass1Flag = true;
                }else{
                    this.pass1Flag = false;
                    this.tishi3Flag = true;
                }
                if(this.nameFlag && this.passFlag && this.pass1Flag){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            }
        },
        methods:{
            submit(){
                var that = this;
                fetch('/ajax/users/username',{
                    method:"post",
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    body:"uname="+this.uname+"&upass="+this.upass
                }).then(function(e){
                    return e.json();
                }).then(function(e){
                    if(e == "error"){
                        that.$router.push('/regist');
                    }else{
                        sessionStorage.regid = e.id;
                        that.$router.push('/register2');
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
    .name,.pass,.pass1{
        width: 5.8rem;
        height: 1.59rem;
        position: absolute;
        top: 0.26rem;
        left: 50%;
        margin-left: -2.9rem;
        border-bottom: 0.03rem solid #e5e5e5;
    }
    .pass{
        top: 1.88rem;
    }
    .pass1{
        top: 3.5rem;
    }
    .top{
        width: 1.6rem;
        height: 0.43rem;
        position: absolute;
        top: 0.45rem;
        left: 50%;
        margin-left: -0.8rem;
    }
    .top>img{
        position: absolute;
        top: 0;
        left: 0;
        width: 0.55rem;
        height: 0.43rem;
    }
    .top>span{
        position: absolute;
        top: 0;
        left: 0.55rem;
        line-height: 0.43rem;
        font-size: 12px;
        color: #fd3870;
    }
    .pass>.top>span,.pass1>.top>span{
        color: #fd8d39;
    }
    .bot{
        width: 100%;
        height: 0.7rem;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .cle{
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background: #ff3972;
        border: 3px solid #ffd6e2;
        position: absolute;
        left: 0.08rem;
        bottom: 0.25rem;
    }
    .cle1{
        width: 0.06rem;
        height: 0.06rem;
        border-radius: 50%;
        background: #00ff00;
        border: 3px solid #ceffcf;
        position: absolute;
        right: 0.08rem;
        bottom: 0.25rem;
    }
    .pass .cle,.pass1 .cle{
        background: #ff8c39;
        border: 3px solid #fee9d8;
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
    .mess{
        width: 2.74rem;
        height: 0.44rem;
        position: absolute;
        left: 1.74rem;
        bottom: -0.34rem;
    }
    .tishi{
        width: 2.74rem;
        height: 0.34rem;
        border-radius: 0.17rem;
        background: #ffffff;
        position: absolute;
        left: 0;
        bottom: 0;
        box-shadow: 0 0.03rem 0.06rem 0.02rem #f0f0f0;
    }
    .tishi>img:first-child{
        width: 0.21rem;
        height: 0.21rem;
        position: absolute;
        left: 0.11rem;
        top: 0.06rem;
    }
    .tishi>span{
        font-size: 0.16rem;
        color: #ff304a;
        line-height: 0.34rem;
        position: absolute;
        left: 0.6rem;
        top: 0;
    }
    .tishi>img:last-child{
        width: 0.11rem;
        height: 0.11rem;
        position: absolute;
        right: 0.14rem;
        top: 0.12rem;
    }
    .angle{
        width: 0;
        height: 0;
        border-bottom: 0.12rem solid #ffffff;
        border-right: 0.12rem solid transparent;
        border-top: 0.12rem solid transparent;
        border-left: 0.12rem solid transparent;
        position: absolute;
        left: 0.26rem;
        top: -0.12rem;
        box-shadow: 0 0.03rem 0.06rem 0.02rem #f0f0f0;
    }
    .uname,.upass,.upass1{
        position: absolute;
        border: none;
        background: none;
        outline: none;
        left: 1.5rem;
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