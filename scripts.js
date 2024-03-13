const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const textResult = document.getElementById('text-result');

checkBtn.addEventListener("click", () =>{
    if(textInput.value===""){
        alert("Por favor ingrese un texto")
    } else {
        result.classList.remove('hidde');
        const texto = textInput.value.toLowerCase();
        const regex = /[0-9a-z]/g;
        const textArray = texto.match(regex);
        if(textArray.toString() == textArray.reverse().toString()){
            textResult.innerText = `${textInput.value} es un palíndromo`;
        } else {
            textResult.innerText = `${textInput.value} no es un palíndromo`;
        }
    }
})