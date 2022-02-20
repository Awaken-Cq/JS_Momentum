const title = document.querySelector("body > h1");
console.log('title::', title);
console.dir(title); // 해당 객체에 바인딩 할 수 있는 이벤트를 확인가능

function handleTitleClick(target) {
  const _this = this;
  console.log('title was clicked!');
  console.log('target::', target);

  this.style.color = 'blue';
}

title.addEventListener('click', handleTitleClick);

title.addEventListener('mouseenter', function() {
  console.log('mouse is here');
  title.innerText = 'Mouse is here';
});

title.addEventListener('mouseleave', function() {
  console.log('mouse is leaved');
  title.innerText = 'Mouse is gone';
});

