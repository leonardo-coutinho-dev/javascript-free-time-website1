let containerDivElement = document.body.querySelector('.container');
let h1Element = document.body.querySelector('.text');

let hoverFunction = () => {
  if (containerDivElement.classList[1] === 'bg') {
    containerDivElement.classList.remove('bg');
    containerDivElement.classList.add('bg-1');
    h1Element.innerHTML = 'Seja bem-vindo ;)';
  } else if (containerDivElement.classList[1] === 'bg-1') {
    containerDivElement.classList.remove('bg-1');
    containerDivElement.classList.add('bg-2');
    h1Element.innerHTML = 'Pronto para começar?';
  } else if (containerDivElement.classList[1] === 'bg-2') {
    containerDivElement.classList.remove('bg-2');
    containerDivElement.classList.add('bg');
    h1Element.innerHTML = 'Clique aqui!';
  }
};

containerDivElement.addEventListener('click', hoverFunction);
