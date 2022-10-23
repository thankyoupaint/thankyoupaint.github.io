'use strict';

{
  // メニューを開く
  const open = document.getElementById('open');
  // メニュー画面を出す
  const overlay = document.querySelector('.overlay');
  // メニューを閉じる
  const close1 = document.getElementById('ov-close1');
  const close2 = document.getElementById('ov-close2');
  const close3 = document.getElementById('ov-close3');
  const close4 = document.getElementById('ov-close4');
  const close5 = document.getElementById('ov-close5');
  const close6 = document.getElementById('ov-close6');
  // ヘッダーのshadowを消す
  const headershadow = document.querySelector('.page-header');
  // メニュー画面を開く・閉じる
  open.addEventListener('click', () => {
    overlay.classList.toggle('show');
    open.classList.toggle('hide');
    headershadow.classList.toggle('shadow-hide');
  });

  close1.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close4.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close5.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  close6.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}


// トップ画像
    // 450px以上の場合の処理（pc画面）
const homeimg2 = document.querySelectorAll('.top-image-pc .home-img');
let currentIndex2 = 0;

function play2() {
    setTimeout(()=> {
        homeimg2[currentIndex2].classList.remove('current');
        currentIndex2++;
        if(currentIndex2 > homeimg2.length -1){
            currentIndex2 = 0;
        }
        homeimg2[currentIndex2].classList.add('current');
        play2();
    },3000);
 }
play2();

// 450px未満の場合の処理（スマホ画面）
const homeimg = document.querySelectorAll('.top-image-sp .home-img');
let currentIndex = 0;

function play() {
    setTimeout(()=> {
        homeimg[currentIndex].classList.remove('current');
        currentIndex++;
        if(currentIndex > homeimg.length -1){
            currentIndex = 0;
        }
        homeimg[currentIndex].classList.add('current');
        play();
    },4000);
}
play();
  
const homeimg2height = homeimg2.getBoun