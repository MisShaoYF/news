import FastClick from './fastclick';
//初始化
window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false);

// 多指
document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, false);

document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';