const buttonEncip = document.querySelector("#firstButton");
const buttonDesc = document.querySelector("#secondtButton");

let textEncryption = "Ningún mensaje fue encontrado";
let textDecryption ;

// button event Encryption
buttonEncip.addEventListener("click", function() {
    var textEncryption = getText(); 
  });
// button event Decryption
  buttonDesc.addEventListener("click", function() {
    var textDecryption = setText(textEncryption); 
    
});


// Function for pass text to second panel 
function setText (text){
    document.querySelector(".displayText").textContent =text;
}


 // Function extraer el texto ingresado en el 1er panel 
function getText (){
    let extractText = document.querySelector("textarea"); // Select content to textarea
    var text = extractText.value;
    // alert(text);
    return text;
}


