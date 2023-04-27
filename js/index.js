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
    
    let logoNone = document.querySelector(".logoLookMessage").style.display = "none";
    document.querySelector(".innerPanel").style.display = "block";
    
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
  // textArea.value = " ";
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



const dict = {
  "e": "enter", 
  "o": "ober",
  "i": "imes",
  "a": "ai",
  "u": "ufat"
}

function decryptionWord (word){
  // word:  j ober enter n enter s -  joberventernenters
  // joven enter s
  const values = Object.values(dict);
  const keys = Object.keys(dict);
  let wordArray = word.split("");
  let newWord = [];
  // let resultado =;

  let veri=true;
  for (let index = 0; index <= values.length; index++) {
    // const element = wordArray[index];

    // while(word.includes(values[index2]){
      
    
    while (veri === true){
      if(word.includes(values[index]) ){
        word = word.replace(values[index], keys[index]);
        veri=true;
      }else{
          veri=false;
        }
      } 
      if(word.includes(values[index]) ){
        word = word.replace(values[index], keys[index]);
      }
    



    
    // if(word.includes(values[index]) ){
    //   word = word.replace(values[index], keys[index]);
    // }
  } 
    console.log(word);
    }
    
    // return word; 
  
  


  



// // Funcion para desencriptar  
// function decryptionWord (word){
//   let palabra = word; // j ober enter n enter s
//   // Resultado= jovenenters 
//   // palabra = palabra.replace("ai", "a");
//   // palabra = palabra.replace("ober", "o");
//   let i = 0
//   let textArray = palabra.split("");
//   for (let property in dictionary){
//     textArray[i] = palabra.replace(dictionary[property], property);
//     // while(palabra[i] in dictionary[property]){
//     //   palabra = palabra.replace(dictionary[property], property);
//     i++;
//     // }
//     // i++;
//     // console.log((dictionary[property]+ ": " +  property));
//     // (enter + e)
//     // Resultado= j o v e n enter s
//   }let completeWord = textArray.join(""); 
//   // console.log(palabra);
//   return completeWord; 
// }