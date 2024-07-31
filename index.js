const passwordLengthInput = document.getElementById("passwordLength");
const includeLowerCaseInput = document.getElementById("includeLowerCase");
const includeUpperCaseInput = document.getElementById("includeUpperCase");
const includeSymbolsInput = document.getElementById("includeSymbols");
const includeNumbersInput = document.getElementById("includeNumbers");
const resposta = document.getElementById("resposta");



function generatePasswords(passwordLength, includeLowerCase, includeUpperCase, includeSymbols, includeNumbers) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvxwyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "@#%&*-";
    let allowedChars = "";
    let password = "";

    if (includeLowerCase.checked) {
        allowedChars += lowerCaseChars;
    }
    if (includeUpperCase.checked) {
        allowedChars += upperCaseChars;
    }
    if (includeNumbers.checked) {
        allowedChars += numbersChars;
    }
    if (includeSymbols.checked) {
        allowedChars += symbolsChars;
    }

    if (passwordLength <= 0) {
        resposta.textContent = "O tamanho da senha deve ser maior que zero.";
    }
    if (allowedChars.length === 0) {
        resposta.textContent = "Pelo menos uma caixa deve estar selecionada";
    } else {
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        resposta.textContent = password;
    }
}



document.getElementById("generateButton").addEventListener("click", () => {
    const passwordLength = parseInt(passwordLengthInput.value);
    generatePasswords(passwordLength, includeLowerCaseInput, includeUpperCaseInput, includeSymbolsInput, includeNumbersInput);
});
