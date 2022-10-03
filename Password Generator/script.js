const display = document.querySelector(".display");
const slider = document.querySelector(".char-slider");
const sliderText = document.querySelector(".char-show");
const checks = Array.from(document.querySelectorAll("input[type=checkbox]"));
const submitButton = document.querySelector("button"); 
let characters = [];


function runChecks(){
    const [uppercaseCheck, numberCheck, symbolCheck] = checks;
    if(uppercaseCheck.checked){
        characters.push(...generateCharacters(65, 26));
    }
    if(numberCheck.checked){
        characters.push(...generateCharacters(48, 10));
    }
    if(symbolCheck.checked){
        characters.push(...generateSymbols());
    }
}

function generateCharacters(startingASCIIIndex, numberOfCharacters){
    const alpha = Array.from(Array(numberOfCharacters)).map((e, i) => i + startingASCIIIndex);
    return alpha.map((x) => String.fromCharCode(x));
}


function generateSymbols(){
    const alpha1 = Array.from(Array(15)).map((e, i) => i + 33);
    const symbols1 = alpha1.map((x) => String.fromCharCode(x));

    const alpha2 = Array.from(Array(7)).map((e, i) => i + 58);
    const symbols2 = alpha2.map((x) => String.fromCharCode(x));
    
    const alpha3 = Array.from(Array(6)).map((e, i) => i + 91);
    const symbols3 = alpha3.map((x) => String.fromCharCode(x));

    const alpha4 = Array.from(Array(4)).map((e, i) => i + 123);
    const symbols4 = alpha4.map((x) => String.fromCharCode(x));
    
    return symbols1 + symbols2 + symbols3 + symbols4;
}

function syncSlider(){
    sliderText.value = this.value;
    slider.value = this.value;
}

function shuffle(){
    for (let i = 0; i < characters.length; i++) {
        const randomIndex = Math.round(Math.random() * (i + 1));
        const oldElement = characters[i];
        const replacedElement = characters[randomIndex];
        characters[i] = replacedElement;
        characters[randomIndex] = oldElement;
    }
}

function start(){
    characters = [];
    const wordLimit = slider.value || sliderText.value
    characters.push(...generateCharacters(97, 26)); //lowercase characters
    runChecks();
    for (let i = 0; i < wordLimit; i++) {
        shuffle(characters);    
    }
    console.log(characters);
    const password = generatePassword(characters, wordLimit);
    display.innerHTML = password;
}

function generatePassword(characters, wordLimit){
    let password = '';
    for (let i = 0; i < wordLimit; i++) {
        const randomIndex = Math.round(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password
}


slider.addEventListener("change", syncSlider);
sliderText.addEventListener("input", syncSlider);
submitButton.addEventListener("click", start);