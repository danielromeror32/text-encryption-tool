const buttonEncip = document.querySelector("#firstButton");
const buttonDesc = document.querySelector("#secondtButton");
const buttonCopy = document.querySelector(".buttom-decrypt"); // BUTTON COPY

// const textScondPanel = document.querySelector(".displayText").textContent;
var textScondPanel = document.querySelector(".displayText").textContent;

let textEncryption ;
let textDecryption ;
let textCopied;

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
  textCopied = el;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

// button event Decryption
buttonDesc.addEventListener("click", function() {
  // textDecryption = setText(textEncryption); 
  textDecryption = decryptionWord(textCopied); // console
  textEncryption = setTextLabel(textDecryption);
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

  document.querySelector(".displayText").textContent = area;
  
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
  console.log(palabra);
}