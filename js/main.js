'use strict';

{
  // メニューを開く
  const open = document.getElementById('open');
  // メニュー画面を出す
  const overlay = document.querySelector('.overlay');
  // メニューを閉じる
  const close = document.getElementById('close');
  const close1 = document.getElementById('ov-close1');
  const close2 = document.getElementById('ov-close2');
  const close3 = document.getElementById('ov-close3');
  const close4 = document.getElementById('ov-close4');
  const close5 = document.getElementById('ov-close5');
  const close6 = document.getElementById('ov-close6');

  // メニュー画面を開く
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  // メニュー画面を閉じる
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
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