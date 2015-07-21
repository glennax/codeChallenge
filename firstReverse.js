// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
function FirstReverse(str) { 
	var strArray = str.split('');
      	 var reverseStr = "";
	for (var i = strArray.length -1; i >= 0; i --){

         reverseStr += strArray[i];
    }

     return reverseStr;     
}
   