const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let generate = document.getElementById("generate-pass");


let num = 0;
let pass = [];
let lenghtPass = 9;

function generatePass() {
    for (let i = 0; i < lenghtPass; i++) {
        let azar = Math.floor(Math.random() * 92);
        pass[i] = characters[azar];
        console.log(pass);
        let passwordCustumer = pass.join('');

        generate.textContent = passwordCustumer;


    }

}
