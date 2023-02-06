/* 
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
  h1,
  p,
  parrafito,
  pid,
  input
})


h1.innerHTML = 'Olivel <br> Cantoran';
h1.innerText = 'Olivel <br> Cantoran';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo')
h1.classList.remove('verde')

input.value = '456'


const img = document.createElement('img');

img.setAttribute('src', 'https://images.pexels.com/photos/4108288/pexels-photo-4108288.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load');

pid.innerHTML = ''
pid.append(img)
 */

// console.log(img);


const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

/* form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
  // console.log({ event })
  event.preventDefault()
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
} */


form.addEventListener('click', sumarInputValues)

function sumarInputValues() {
  // console.log({ event })
  // event.preventDefault()
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}