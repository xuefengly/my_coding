var box = document.getElementById("box");
var slide = document.getElementById("slide");
var lis = slide.children[0].children;
var arrow = document.getElementById("arrow");

box.onmouseenter = function(){
  animate(arrow,{"opacity":100});

};
box.onmouseleave = function(){
  animate(arrow,{"opacity":0});
};
//json数组存储每张图片信息
var json = [
        {   //  1
            width:250,
            top:20,
            left:200,
            opacity:20,
            z:2
        },
        {  // 2
            width:400,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:600,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:400,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:250,
            top:20,
            left:550,
            opacity:20,
            z:2
        }
];
//左右箭头点击事件
var arrows = arrow.children;
for(var k in arrows){
  arrows[k].onclick = function(){
    if(this.className == "prev"){
      //左侧箭头
      change(false);
    }else{
      change(true);
    }
  };
}
function change(flag){
  if(flag){
    //右侧箭头，把json数组最后一个删除，并防止第一个位置
    json.unshift(json.pop());
  }else{
    //左侧箭头，把json数组第一个删除，并放在最后一个位置
    json.push(json.shift());
  }
  for(var j=0;j<json.length;j++){
    animate(lis[j],{
      width:json[j].width,
      top:json[j].top,
      left:json[j].left,
      opacity:json[j].opacity,
      zIndex:json[j].z
    });
  }
}
change();//默认执行change()函数
