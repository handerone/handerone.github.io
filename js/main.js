
var win = document.body.clientWidth;//屏幕宽度

//定位navbar
function navBar_position(){
  let navBar = document.getElementById('navBar')
  let x = (win - 1000)/2;
  if(x <= 0){
    navBar.style.left = 0 + 'px'
    return
  }
  navBar.style.left = x + 'px'
}
navBar_position()
//实时监听浏览器的变化
window.onresize = function(){
  win = document.body.clientWidth;
  navBar_position()
}
