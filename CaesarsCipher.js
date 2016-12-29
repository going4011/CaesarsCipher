function rot13(str) {
  var newStr = "";
  var currentLetterCode = 0;
  
  for (i = 0; i < str.length; i++){
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91){
          newStr += str[i];
      }
      else {
          if (str.charCodeAt(i) < 78){
              newStr += String.fromCharCode(str.charCodeAt(i) + 13);
          }
          else{
              newStr += String.fromCharCode(str.charCodeAt(i) - 13);
          }
      }
  }
  return newStr;
}

// Change the inputs below to test
rot13("LBH QVQ VG");