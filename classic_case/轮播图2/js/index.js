var box = document.getElementById("box");
var slide = document.getElementById("slide");
var slideCtrl = document.getElementById("slide_ctrl");
var imgs = slide.children[0].children;//包含img的div
var spans = slideCtrl.children;//所有span
var prev = spans[0];//左箭头
var next = spans[spans.length-1];//右箭头

var scrollW = slide.clientWidth;//轮播图片框的宽度
//把除第一张的图片放在右侧
for(var i=1;i<imgs.length;i++){
  imgs[i].style.left = scrollW + "px";
}
//遍历底部按钮和左右箭头
var iNow = 0;//用于存放当前显示图片的索引值，默认开始为0
for(var k in spans){
  spans[k].onclick = function(){
    if(this.className == "slide-ctrl-next"){
      //右箭头
      autoPlay();
    }else if(this.className == "slide-ctrl-prev"){
      animate(imgs[iNow],{left: scrollW});//当前显示图片右移
      iNow--;
      if(iNow < 0){//当索引值小于第一张图片索引值
        iNow = imgs.length-1;
      }
      imgs[iNow].style.left = -scrollW + "px";
      setIcon();
      animate(imgs[iNow],{left: 0});//左侧图片右移显示
    }else{
      //底部按钮
      var index = this.innerHTML-1;//底部按钮索引值
      if(index > iNow){
        //如果点击的底部按钮索引值大于显示图片索引值
        animate(imgs[iNow],{left:-scrollW});//当前显示图片左移
        imgs[index].style.left = scrollW + "px";//底部按钮对于图片放置在右侧
      }else if(index < iNow){//如果点击的底部按钮索引值小于显示图片索引值
        animate(imgs[iNow],{left:scrollW});//当前显示图片右移
        imgs[index].style.left = -scrollW + "px";//底部按钮对于图片放置在左侧
      }
      iNow = index;
      setIcon();
      animate(imgs[iNow],{left: 0});//底部按钮对于图片移动到显示区域
    }
  };
}
//底部按钮背景切换
function setIcon(){
  for(var i=1;i<spans.length-1;i++){
    spans[i].className = "slide-ctrl-icon";//所有底部按钮class为slide-ctrl-icon
  }
  spans[iNow+1].className = "slide-ctrl-icon current";//因为spans包含左右箭头，所有显示图片对应的底部按钮索引值为iNow+1
}
//左右箭头显示和隐藏
box.onmouseenter = function(){
  prev.style.display = "block";
  next.style.display = "block";
  stop();//停止轮播
};
box.onmouseleave = function(){
  prev.style.display = "none";
  next.style.display = "none";
  timer = setInterval(function(){
    autoPlay();
  },3000);//继续轮播
};

//自动轮播
var timer = null;//用于保存定时器名称
timer = setInterval(function(){
  autoPlay();
},3000);
function autoPlay(){
  animate(imgs[iNow],{left:-scrollW});//当前显示图片左移
  iNow++;
  if(iNow > 4){//当索引值大于最后一张图片索引值
    iNow = 0;
  }
  imgs[iNow].style.left = scrollW + "px";//下一张图片放置在显示区域右侧
  setIcon();
  animate(imgs[iNow],{left: 0});//下一张显示图片移动到显示区域
}
function stop(){
  clearInterval(timer);
}
