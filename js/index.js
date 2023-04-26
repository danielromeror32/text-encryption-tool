const buttonEncip = document.querySelector("#firstButton");
const buttonDesc = document.querySelector("#secondtButton");
const buttonCopy = document.querySelector(".buttom-decrypt"); // BUTTON COPY
const textArea =document.querySelector("#textArea");
// const textScondPanel = document.querySelector(".displayText").textContent;
var textScondPanel = document.querySelector(".displayText").textContent;

let textEncryption ;
let textDecryption ;
let textCopied;
let count= 0;

// button event Encryption
buttonEncip.addEventListener("click", function() {
    textEncryption = getText("textarea"); 
    textDecryption = setText(textEncryption);
  });

// button event copy
function copyToClipboard() {
  const el = document.createElement('textarea');
  el.value = document.querySelector(".displayText").textContent;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// button event Decryption
buttonDesc.addEventListener("click", function() {
  // textDecryption = setText(textEncryption); 
  // textDecryption = decryptionWord(textCopied);
  textEncryption = getText("textarea"); // extraer texto 
  textDecryption = setTextLabel(textEncryption);
  // console
  // textDecryption = setTextLabel(textEncryption);
  // textDecryption = decryptionWord(textEncryption); // desencriptar devuelve nuevo valor 
  // mostrar en 2do panel 

});


// Function for pass text to second panel 
function setText (text){
    //Encriptar palabra 
    let wordEncript = encryptionWord(text);
    // set word 
    document.querySelector(".displayText").textContent = wordEncript;
}


 // Function extraer el texto ingresado en el 1er panel 
function getText(area){
    let extractText = document.querySelector(area); // Select content to textarea
    var text = extractText.value;
    extractText.value = '';
    // alert(text);
    return text.toLowerCase();
}


// function getTextLabel (area){
//   let extractText = document.querySelector(area);
//   var text = extractText.textContent;
//   return text;
// }
function setTextLabel (area){

  textDecryption = decryptionWord(textEncryption);
  document.querySelector(".displayText").textContent = textDecryption; // print at second panel 
  
}
// Funcion styles to textArea
function delateAreaText() {

  if (count === 0){
    textArea.value = " ";
    count++;
  }
  textArea.classList.add("editTextArea");
}

// Funcion para encriptar 
function encryptionWord  (palabra){
  let newTextArray = [];
  // let textArray = textEncryption.split("");
  let textArray = palabra.split("");
  
  for (let index = 0; index < textArray.length; index++){
    
    let element = textArray[index];
   
    if (element === "e"){
      newTextArray.push("enter");
    }
    else if (element === "i"){
      newTextArray.push("imes");
    }
    else if (element === "a"){
      newTextArray.push("ai");
    }
    else if (element === "o"){
      newTextArray.push("ober");
    }
    else if (element === "u"){
      newTextArray.push("ufat");
    }else{
      newTextArray.push(element);
    }

  }
  let completeWord = newTextArray.join(""); 
  // console.log(completeWord);
  return (completeWord);
}



const dictionary = {
  "e": "enter", 
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
}
// Funcion para desencriptar  
function decryptionWord (word){
  let palabra = word;
  // palabra = palabra.replace("ai", "a");
  // palabra = palabra.replace("ober", "o");
 
  for (let property in dictionary){
    palabra = palabra.replace(dictionary[property], property);
    // console.log((dictionary[property]+ ": " +  property));
  }
  // console.log(palabra);
  return palabra; 
}