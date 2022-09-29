var button = document.getElementById('button');
const inputC = document.querySelector('#cInput');
const inputB = document.querySelector('#bInput');

function calculateHipotunusa() {
    
    var result = document.getElementById('resultado');
    
    var hipotenusa = Math.round(Math.sqrt((inputC.value * inputC.value) + (inputB.value * inputB.value)));

    result.innerHTML = hipotenusa;
}

button.addEventListener('click', calculateHipotunusa)