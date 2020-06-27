// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded',function () {
  // 「window.scroll」を使ってスクロールさせましょう
  
  // const scrollTop = document.querySelector('js-scroll-top');
  // scrollTop.addEventListener('click', () => {
  //   window.scroll({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // });

 // ボタンの表示・非表示のアニメーションは不要とします
 // windowのスクロール位置でボタンの表示・非表示

window.addEventListener('scroll',function() {
  const scrollTop = window.pageYOffset;
  const scrollTopbtn = document.getElementsByClassName('scroll-top');
  if (scrollTop > 30) {
    scrollTopbtn[0].classList.add('show');
  } else {
    scrollTopbtn[0].classList.remove('show');
  }
});
},
false
);
