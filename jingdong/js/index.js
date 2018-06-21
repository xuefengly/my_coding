var life_icons = document.getElementById('lifeservice-icon');
var icons = life_icons.getElementsByTagName('i');
// console.log(i);
for(var i=0;i<icons.length;i++){
	icons[i].style.backgroundPosition = "0 "+(-25*i)+"px";
}