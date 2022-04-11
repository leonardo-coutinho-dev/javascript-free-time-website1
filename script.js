let containerDivElement = document.body.querySelector('.container');
let h1Element = document.body.querySelector('.text-color');

let hoverFunction = () => {
  if (containerDivElement.classList[1] === 'bg') {
    containerDivElement.classList.remove('bg');
    containerDivElement.classList.add('bg-1');
    h1Element.color = '#ebebeb';
  } else if (containerDivElement.classList[1] === 'bg-1') {
    containerDivElement.classList.remove('bg-1');
    containerDivElement.classList.add('bg-2');
    h1Element.color = 'royalblue';
  } else if (containerDivElement.classList[1] === 'bg-2') {
    containerDivElement.classList.remove('bg-2');
    containerDivElement.classList.add('bg');
    h1Element.color = 'tomato';
  }
};

containerDivElement.addEventListener('click', hoverFunction);
