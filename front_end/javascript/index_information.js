var information = document.getElementById('information');
var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var speed = 40;
list2.innerHTML = list1.innerHTML;//把list1的内容让list2复制一遍
information.scrollTop = 0;//information的滚动值为0；
function scrollUP(){//滚动函数
  if(information.scrollTop >= list1.scrollHeight){
    //当滚动高度>=页面高度时
    //要达到这种情况，那么所见的页面高度要小于内容高度，而页面用overflow:hidden来隐藏超出
    information.scrollTop = 0;//让infomation的滚动高度为0，
  }else{
    information.scrollTop ++;
  }
}
var myScroll= setInterval(scrollUP,speed);//设定setInterval函数
information.onmouseout = function(){//当鼠标移出时
  myScroll = setInterval(scrollUP,speed);
};
information.onmouseover = function(){//当鼠标移入时
  clearInterval(myScroll);
};
