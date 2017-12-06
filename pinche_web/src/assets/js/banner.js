window.onload=function(){


var startPos = {};//开始位置
var endPos = {};//结束位置
var scrollDirection;//滚动方向
var timr;//定时器，后面控制速度会使用
var touch;//记录触碰节点
var index = 0;//记录滑动到第几张图片
var oImg = document.querySelector(".mui-slider-group");
var oCircle = document.querySelector("#circle>ul");
var aCircle = oCircle.getElementsByTagName("li");
var ImgWidth;//图片宽度
var speed; //滑动速度
var target;//目标
oImg.ontouchstart = function(event){
    touch = event.targetTouches[0];//取得第一个touch的坐标值
    startPos = {x:touch.pageX,y:touch.pageY}
    scrollDirection = 0;
}
oImg.ontouchmove = function(event){
    // 如果有多个地方滑动，我们就不发生这个事件
    if(event.targetTouches.length > 1){
        return
    }
    touch = event.targetTouches[0];
    endPos = {x:touch.pageX,y:touch.pageY}
    // 判断出滑动方向，向右为1，向左为-1
    scrollDirection = touch.pageX-startPos.x > 0 ? 1 : -1;
}
oImg.ontouchend = function(){
    if(scrollDirection == 1){
        if(index >= 1 && index<=3){
            index--;
            for(var i=0;i<aCircle.length;i++){
                aCircle[i].className = '';
            }
            aCircle[index].className = 'active';
            ImgWidth = parseInt(oImg.offsetWidth / aCircle.length);
            target = -ImgWidth * index;
            // oImg.style.left = oImg.offsetLeft + ImgWidth +'px';
            timer = setInterval(function(){
                speed = parseInt((target-oImg.offsetLeft) / 5);
                if(speed == 0){
                    speed = 4;
                }
                if(target == oImg.offsetLeft){
                    clearInterval(timer);
                }else{
                    oImg.style.left = oImg.offsetLeft + speed +'px';
                }
            },30);
        }else{
            return
        }
    }else if(scrollDirection == -1){
        if(index >=0 && index <=2){
            index++;
            for(var i=0;i<aCircle.length;i++){
                aCircle[i].className = '';
            }
            aCircle[index].className = 'active';
            ImgWidth = parseInt(oImg.offsetWidth/4);
            target = -ImgWidth * index;
            timer = setInterval(function(){
                speed = parseInt((oImg.offsetLeft-target) / 5);
                if(speed == 0){
                    speed = 4;
                }
                if(target == oImg.offsetLeft){
                    clearInterval(timer);
                }else{
                    oImg.style.left = oImg.offsetLeft - speed +'px';
                }
            },30);
        }else{
            return
        }
    }
}
}