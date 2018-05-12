//弹窗遮屏（特效3）
function winMask(){
  var mask = document.createElement('div');
  //遮罩
  mask.id = 'mask';
  var sWidth = document.documentElement.scrollWidth;//获取页面宽度
  var sHeight = document.documentElement.scrollHeight;
  // console.log(sHeight);
  mask.style.width = sWidth+'px';
  mask.style.height = sHeight+'px';
  document.body.appendChild(mask);//把mask加入到body
  //弹窗
  var login = document.getElementById('login');
  var close = document.getElementById('close');
  var cWidth = document.documentElement.clientWidth;//获取可视区域宽度
  var cHeight = document.documentElement.clientHeight;
  login.style.display = 'block';
  var oWidth = login.offsetWidth;//获取登录框宽度
  var oHeight = login.offsetHeight;
  console.log(login.offsetWidth);
  login.style.top = (cHeight-oHeight)/2 + 'px';
  login.style.left = (sWidth-oWidth)/2 + 'px';

  close.addEventListener('click',cLogin);
  mask.addEventListener('click',cLogin);
  function cLogin(){
      // document.body.removeChild(login);//删除login节点
      login.style.display = 'none';
      document.body.removeChild(mask);
  }
}
var btnLogin = document.getElementById('btnLogin');
// console.log(btnLogin);
btnLogin.addEventListener('click',winMask);
