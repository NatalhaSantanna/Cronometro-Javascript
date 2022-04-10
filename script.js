//Mude a cor da tela para azul e depois para vermelho a cada 2s
//function mudaCor() {
//document.body.classList.toggle('vermelho');
//}
//setInterval(mudaCor, 400);

//Crie um cronômetro utilizando o setInterval.Deve ser possível iniciar, pausar e resetar (duplo clique)

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const milesimos = document.querySelector('.milesimo');
const segundos = document.querySelector('.segundo');
const minutos = document.querySelector('.minuto');
const horas = document.querySelector('.hora');

/*Eventos*/
//clique para iniciar
iniciar.addEventListener('click', iniciarTempo);
//clique para pausar
pausar.addEventListener('click', pausarTempo);
//duplo clique para resetar
pausar.addEventListener('dblclick', resetarTempo);

let m = 0;
let s = 1;
let min = 1;
let h = 1;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        //o texto do span será o tempo do cronômetro
        milesimos.innerText = m++;
        if (m > 10) {
            segundos.innerText = s++;
            m = 0;
            m++;
        }
        if (s > 60) {
            minutos.innerText = min++;
            s = 0;
            s++;
        }
        if (min > 59) {
            horas.innerText = h++;
            min = 0;
            min++;
        }
    }, 100);


    //para desabilitar o botão uma vez que ele já foi clicado
    iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
    clearInterval(timer);
    //quando o pausar for apertado, o iniciar volta a ser habilitado
    iniciar.removeAttribute('disabled');
}

function resetarTempo() {
    milesimos.innerText = '00';
    segundos.innerText = '00';
    minutos.innerText = '00';
    horas.innerText = '00';
    m = 0;
    s = 0;
    min = 0;
    h = 0;
}