function $(id){
  return document.getElementById(id);
}
var js_slider = $("js_slider");
var slider_main = $("slider_main");
var slider_ctrl = $("slider_ctrl");
var imgs = slider_main.children;

//生成span
for(var i=0;i<imgs.length;i++){
  var span = document.createElement("span");
  span.innerHTML = imgs.length - i;//索引号倒着插入
  span.className = "slider-ctrl-icon";
  slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
}

var spans = slider_ctrl.children;//所有span,包含左右箭头和底部按钮
// console.log(spans);
//底部第一个为蓝色按钮
spans[1].setAttribute("class","slider-ctrl-icon current");
//把其他图片放在右侧
var scrollW = js_slider.clientWidth;//得到js_slider盒子宽度
// console.log(scrollW);
for(var i=1;i<imgs.length;i++){
  imgs[i].style.left = scrollW + "px";
}
//遍历底部按钮和左右箭头
var iNow = 0;//用于存储当前播放图片的索引值，默认第一张为0
for(var k in spans){
  spans[k].onclick = function(){
    if(this.className == "slider-ctrl-prev"){
      //左侧箭头
      animate(imgs[iNow],{left:scrollW});//当前可视区域图片右移
      iNow--;
      if(iNow < 0){
        //当iNow小于第一张图片的索引值时
        iNow = imgs.length-1;
      }
      imgs[iNow].style.left = -scrollW + "px";//把上一张图片放置在可视区域左侧
      animate(imgs[iNow],{left: 0});//上一张图片右移，展示在可视区域
      setIcon();
    }else if(this.className == "slider-ctrl-next"){
      //右侧箭头
      autoPlay();
    }else{
      //底部按钮
      var index = this.innerHTML-1;//得到底部按钮的索引号(0~5)
      if(index > iNow){
        //如果按钮索引号大于图片索引值，即该按钮对于图片在当前可视区域图片后面
        animate(imgs[iNow],{left:-scrollW});//把当前图片左移
        imgs[index].style.left = scrollW + "px";//把按钮索引号对应图片放在可视区域右侧
      }else if(index < iNow){
        //如果按钮索引号小于图片索引值，即该按钮对于图片在当前可视区域图片前面
        animate(imgs[iNow],{left:scrollW});//把当前图片右移
        imgs[index].style.left = -scrollW + "px";
      }
      iNow = index;//把按钮索引号赋给图片索引值
      setIcon();
      animate(imgs[iNow],{left: 0});//把对应按钮索引号的图片展示在可视区域
    }

  };
}
//控制底部按钮的背景转移
function setIcon(){
  for(var i=1;i<spans.length-1;i++){
    spans[i].className = "slider-ctrl-icon";
  }
  spans[iNow+1].className = "slider-ctrl-icon current";//注意spans的第一个是左箭头，所以+1
}

//自动轮播
var timer = null;
timer = setInterval(autoPlay,3000);//定时器
function autoPlay(){
  //等同于点击右侧箭头
  animate(imgs[iNow],{left:-scrollW});//当前可视区域图片左移
  iNow++;
  if(iNow > imgs.length-1){
    //当iNow大于最后一张图片的索引值时
    iNow = 0;
  }
  imgs[iNow].style.left = scrollW + "px";//把下一张图片放置在可视区域右侧
  animate(imgs[iNow],{left: 0});//下一张图片左移，展示在可视区域
  setIcon();
}
//清除定时器
js_slider.onmouseover = function(){
  clearInterval(timer);
};
js_slider.onmouseout = function(){
  clearInterval(timer);
  timer = setInterval(autoPlay,3000);
};
