
//图片轮播（特效1）
var carousel = document.getElementById('carousel');
var list = document.getElementById('list');
var dots = document.getElementById('dots');
var spans = dots.getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 1;
var timer;
var animated=false;
//切换函数
function animation(offset){
  animated=true;
  list.style.left = list.offsetLeft + 'px';
  // console.log(list.style.left);
  var newLeft = parseInt(list.style.left)+offset;//点击切换后的offsetLeft
  // console.log(newLeft);
  var time = 550;//总时间
  var interval = 10;//每次位移时间
  var speed = offset/(time/interval);
  function go(){//使切换分多次位移形成动画函数
    if((speed<0 && newLeft<parseInt(list.style.left)) ||(speed>0 && newLeft>parseInt(list.style.left)) ){
      list.style.left = parseInt(list.style.left) + speed + 'px';
      // console.log(list.style.left);
      setTimeout(go,interval);
    }else{
      animated = false;
      list.style.left = newLeft + 'px';
      if(newLeft > -550){
        list.style.left = -2750 + 'px';
      }
      if(newLeft < -2750){
        list.style.left = -550 + 'px';
      }
  //因为在递归中offsetLeft没有变，所以一直执行但只位移一次
  // function go(){
  //   if((speed<0 && newLeft<offsetLeft) ||(speed>0 && newLeft>offsetLeft) ){
  //     list.style.left = offsetLeft + speed + 'px';
  //     console.log(list.style.left);
  //     // console.log(offsetLeft);
  //     setTimeout(go,interval);
  //   }else{
  //     // animated = false;
  //     list.style.left = newLeft + 'px';
  //     if(newLeft > -550){
  //       list.style.left = -2750 + 'px';
  //     }
  //     if(newLeft < -2750){
  //       list.style.left = -550 + 'px';
  //     }
    }
  }
  go();
}
//底部圆点随左右点击切换
function dotsPlay(){
  for(var i=0;i<spans.length;i++){
    if(spans[i].className == 'on'){
      spans[i].className ='';
    }
  }
  spans[index-1].className = 'on';
}

//底部圆点点击切换图片函数
for(var i = 0;i<spans.length;i++){
  spans[i].addEventListener('click',function(){
    if(this.className == 'on'){
      return;
    }
    var myIndex = this.getAttribute('index');//获得span的自定义属性index值
    // console.log(myIndex);
    var offset = -550*(myIndex-index);
    animation(offset);
    index = myIndex;
    dotsPlay();
    // debugger;
  });
}
// 自动轮播
function autoPlay(){
  timer = setInterval(function(){
    next.click();
  },3000);
}
//清除定时器
function stopPlay(){
  clearInterval(timer);
}
carousel.addEventListener('mouseover',stopPlay);
carousel.addEventListener('mouseout',autoPlay);
autoPlay();


//左右按钮点击事件
next.addEventListener('click',function(){
  if(index == 5){//当索引值为5时(切换到第六张图前)，跳到0
    index = 1;
  }else{
    index++;
  }
  if(!animated){
    animation(-550);
  }
  dotsPlay();
  // console.log(index);
});
prev.addEventListener('click',function(){
  if(index == 1){//切换到第一张图（index=5)前
    index = 5;
  }else{
    index--;
  }
  if(!animated){
    animation(550);
  }
  dotsPlay();
});

// welcome伸缩（特效2）
var welcome = document.getElementById('welcome');
var h=0;
window.onload = function(){
  addH();
  setTimeout(decH,3000);
};
function addH(){//展开函数
  if(h<400){
    h+=5;
    welcome.style.height = h+'px';
  }else{
    return;
  }
  setTimeout(addH,20);
}
function decH(){//收起函数
  if(h>0){
    h-=5;
    welcome.style.height = h+'px';
  }else{
    welcome.style.display = 'none';
    return;
  }
  setTimeout(decH,20);
}
