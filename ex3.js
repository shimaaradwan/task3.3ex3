function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const inputString = "shimaa";
  const reversedString = reverseString(inputString);
  document.getElementById("demo").innerHTML = reverseString(inputString);
