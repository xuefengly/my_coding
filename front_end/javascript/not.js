var not = document.getElementsByClassName('not');
var not1 = document.getElementById('not1');
var not2 = document.getElementById('not2');
var not3 = document.getElementsByClassName('not3');

// console.log(not.length);ss
for(var i=0;i<not.length;i++){
  not[i].addEventListener('click',function(){
    alert('sorry,由于作者还未学习该技能，该板块暂时未开放！');
  });
}
for(var i=0;i<not3.length;i++){
  not3[i].addEventListener('click',No);
}
function No(){
  alert('sorry,由于时间关系，该板块尚未完善，敬请期待！');
}
not2.addEventListener('click',function(){
    alert('sorry,该功能尚未开放，敬请期待！');
});
not1.addEventListener('click',function(){
    alert('sorry,目前仅支持登录功能！');
});
