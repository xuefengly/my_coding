//动画函数
function animate(obj,json,fn){
	//第一个参数为动画对象，第二个为json格式的目标属性值，第三个为回调函数(可选)
	clearInterval(obj.timer);
	// console.log("obj.timer:",obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;//判断定时器是否清除的开关
		//遍历json
		for(var attr in json){
			var current = 0;//用于存放当前属性
			if(attr == "opacity"){
				//透明度
				current = Math.round(parseInt(getStyle(obj,attr)*100))|| 0;//ie678没有opacity,会产生undefined,undefined || 0为0;防止在ie产生undefined+1-->NaN的结果
			}else{
				current = parseInt(getStyle(obj,attr));//得到当前属性并去除px
			}
			// console.log(json[attr]);
			//计算步长 （目标位置-当前位置)/10
			var step = (json[attr] - current)/10;
			step = step > 0 ? Math.ceil(step):Math.floor(step);
			//判断属性
            if(attr == "opacity"){
                if("opacity" in obj.style){
                    //w3c标准浏览器(支持opavity)
                    obj.style.opacity = (current + step)/100;
                }else{
                    //ie678
                    obj.style.filter = "alpha(opacity = "+(current+step)+")";
                }
            }else if(attr == "zIndex"){
                	obj.style.zIndex = json[attr];
            }else{
                obj.style[attr] = current + step + "px";
            }
			// if(current == json[attr]){//该法存在bug:可能有部分属性未达到目标值定时器就停止了
			// 	clearInterval(obj.timer);
			// }
			// console.log(current);
			if(current != json[attr]){
				//如果有任一属性没有达到目标值
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},10);
}
//得到样式
function getStyle(obj,attr){
	//参数：对象，属性
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}
