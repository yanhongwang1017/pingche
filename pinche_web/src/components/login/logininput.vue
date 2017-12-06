<template>
    <div class="logininput">
        <div class="yel">
            <div class="whi" ref="whi"></div>
            <div class="img"></div>
            <form class="formCon">
                <div class="formname">
                    <div class="formname-top">
                        <div class="formname-top1"></div>
                        <div class="formname-top2">Username</div>
                    </div>
                    <div class="name-yuan"></div>
                    <input type="text" v-model="uname" class="name"  placeholder="您可以输入邮箱或者手机号" autocomplete="off">
                    <div class="tong" v-show="tong"></div>
                    <div class="QQlogin" v-show="check">
                        <div class="loginQQ"></div>
                        <div class="login126"></div>
                        <div class="login136"></div>
                    </div>
                </div>
                <div class="formpass">
                    <div class="formname-top">
                        <div class="formname-top1 formpass-top1"></div>
                        <div class="formname-top2">Password</div>
                    </div>
                    <div class="name-yuan"></div>
                    <input type="password" v-model="upass" class="name pass"  placeholder="请您输入密码">
                    <div class="position"></div>
                    <div class="QQlogin loginpass" v-show="isshow">
                        <div class="loginpass1"></div>
                       <div class="loginpass2" v-show="loginpass2con">密码用户名不匹配!</div>
                        <div class="loginpass3" @touchstart="del"></div>
                    </div>
                </div>
            </form>
            <div class="right"  v-show="loginbac"></div>
            <div class="rightright" @touchstart="login()" v-show="loginimg"><img class="logimg" src="/src/assets/img/22.png" alt=""></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'logininput',
        data () {
            return {
                upass: '',
                uname: '',
                isshow:false,
                check:false,
                loginpass2con:true,
                tong:false,
                loginimg:false,
                loginbac:true
            }
        },
        methods:{
            login(){
                var that = this;
                if(this.uname == ''){
                    this.check = true;
                }
                if(this.upass == ''){
                    this.isshow = true;
                }
                fetch('/ajax/users/checkLogin',{
                    method:"post",
                    headers:{"content-type":"application/x-www-form-urlencoded"},
                    body:"uname="+this.uname+"&upass="+this.upass
                }).then(function (e) {
                    return e.json();
                }).then(function (e) {
                    if(e.message == "error"){
                        that.isshow = true
                        that.$router.push("/login")
                    }else{
                        sessionStorage.login = JSON.stringify(e);
                        that.$router.push("/")
                    }
                })
            },
            del(){
                this.isshow = !this.isshow;
            },
        },
        watch: {
            uname: function (val) {
                this.check = true;
                this.tong = true
                if(this.uname){
                    this.check = false;
                }
                if(this.uname && this.pass){
                    this.loginimg = true,
                        this.loginbac = false
                }else{
                    this.loginimg = false,
                        this.loginbac = true
                }
            },
            upass: function (val) {
                this.isshow = true;
                if(this.upass){
                    this.isshow = false;
                }
                if(this.uname && this.upass){
                    this.loginimg = true,
                        this.loginbac = false
                }else{
                    this.loginimg = false,
                        this.loginbac = true
                }
            },
        },
    }
</script>
<style scoped>
.logininput{
    width: 100%;
    height: 5.64rem;
    position: fixed;
}
.yel{
    width: 6.5rem;
    height: 0.8rem;
    background: #f7e634;
    margin:0.79rem auto;
    border-radius: 0.16rem;
    box-shadow: 0 0 0.02rem 0.02rem rgb(228,228,228);
    position: relative;
}
.img{
    position: absolute;
    width: 0.88rem;
    height: 0.88rem;
    border-radius: 50%;
    margin: -0.73rem 42%;
    background-image: url("/src/assets/img/denglu-touxiang@2x.png");
    background-size: 0.9rem;z-index: 1;
    background-repeat: no-repeat;
    background-position: center center;
}
    .whi{
        position: absolute;
        width: 6.5rem;
        height: 4.03rem;
        background: #fff;
        border-radius: 0.16rem;
        margin-top: 0.09rem;
        box-shadow: 0 0 0.03rem 0.03rem rgb(228,228,228);
        z-index: 2;
    }
    .right{
        width: 2.87rem;
        height: 0.79rem;
        border-radius: 0.36rem;
        position: absolute;
        z-index: 3;
        margin: 3.8rem 28%;
        background: url("/src/assets/img/denglu-icon-wx-an@2x.png");
        background-size: 3.05rem;
        background-position: center;
    }
    .formCon{
        width: 5.82rem;
        height: 2.88rem;
        z-index: 4;
        position: absolute;
        margin:0.08rem 5.23%;
    }
    .formname,.formpass{
        width: 100%;
        height: 50%;
        border-bottom: 0.01rem solid #e5e5e5;
        position: relative;
    }
    .formname-top{
        width: 1.72rem;
        height: 0.9rem;
        margin: 0 35.22%;
    }
    .formname-top1{
        width: 0.43rem;
        height: 0.43rem;
        border-radius: 50%;
        border: 0.02rem solid #e5e5e5;
        float: left;
        margin-top: 0.37rem;
        background-image: url("/src/assets/img/denglu-icon-yonghuming@2x.png");
        background-size: 0.47rem;
        background-position: center;
    }
    .formpass-top1{
        background-image: url("/src/assets/img/denglu-icon-mima@2x.png");
    }
    .formname-top2{
        width: 1.1rem;
        height: 0.22rem;
        color: #ff3972;
        margin-top: 0.42rem;
        float: right;
        font-size: 0.22rem;
    }
    .name-yuan{
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 50%;
        position: absolute;
        background-image: url("/src/assets/img/103.jpg");
        background-size: 0.16rem;
        top:1rem;
        left: 0.1rem;
    }
    .name{
        width: 4.26rem;
        height: 0.48rem;
        position: absolute;
        bottom: 0.1rem;
        left: 11%;
        text-align: center;
        color: #636363;
        outline: none;
        border: none;
    }
    .position{
        position: absolute;
        width: 0.34rem;
        height: 0.34rem;
        border-radius: 50%;
        background: url("/src/assets/img/denglu-icon-wenhao@2x.png");
        background-size: 0.34rem;
        right: 0.1rem;
    }
    .QQlogin{
        width: 3.71rem;
        height: 0.7rem;
        position: absolute;
        background-image: url("/src/assets/img/denglu-tanchu-com@2x.png");
        background-size: 3.93rem;
        background-position: center center;
        border-radius: 0.15rem;
        top:1.2rem;
        left: 2.8rem;
        display: flex;
        justify-content: space-around;
    }
    .loginQQ,.login126,.login136{
        width: 1.21rem;
        height: 0.41rem;
        border-radius: 0.12rem;
        background-image: url("/src/assets/img/denglu-tanchu-QQ.com@2x.png");
        background-size: 1.21rem;
        margin-top:0.13rem;
    }
    .login126{
        background-image: url("/src/assets/img/denglu-tanchu-126.com@2x.png");
    }
    .login136{
        background-image: url("/src/assets/img/denglu-tanchu-136.com@2x.png");
    }
    .loginpass{
        background-image: url("/src/assets/img/denglu-tanchu-mmcw@2x.png");
        font-size: 0.18rem;
        color:#ff395d;
    }
    .loginpass1,.loginpass2,.loginpass3{
        margin-top:0.18rem;
    }
    .loginpass21{
        color:#06ff06;
    }
    .loginpass1{
        margin-top:0.22rem;
        width: 0.34rem;
        height: 0.34rem;
        border-radius: 50%;
        background-size: 0.34rem;
        background-image: url("/src/assets/img/denglu-icon-gantanhao@2x.png");
    }
    .loginpass3{
        margin-top:0.24rem;
        width: 0.34rem;
        height: 0.34rem;
        background-image: url("/src/assets/img/cha.png");
    }
    .tong{
        width: 0.1rem;
        height: 0.1rem;
        background: #06ff06;
        border:0.02rem solid #caffcb;
        border-radius: 50%;
        position: absolute;
        left: 5.6rem;
        top:0.9rem;
    }
.rightright{
    width: 3.13rem;
    height: 1.06rem;
    border-radius: 0.36rem;
    position: absolute;
    z-index: 3;
    margin: 3.65rem 26%;
    background: url("/src/assets/img/denglu-icon-andb@2x.png");
    background-size: 3.05rem;
    background-position: center;
    background-repeat: no-repeat;
}
.logimg{
    width: 0.80rem;
    height: 0.63rem;
    top:0.22rem;
    left: 37%;
    position: absolute;
}
</style>
