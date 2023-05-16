var question = document.querySelector('.faq__list');
var bgTop = document.querySelector('.background__top');

question.addEventListener('click', (event) => {
  var target = event.target;
  var open = document.querySelector('.list__section.opened');
  var node = target.parentNode.parentNode;
  if (target.classList.contains('question__text') || target.classList.contains('question__arrow')) {
    if (open !== null && open !== node) {
      open.classList.remove('opened');
    }
    node.classList.toggle('opened');
  }
});