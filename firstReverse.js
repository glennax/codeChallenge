function FirstReverse(str) { 
	var strArray = str.split('');
      	 var reverseStr = "";
	for (var i = strArray.length -1; i >= 0; i --){

         reverseStr += strArray[i];
    }

     return reverseStr;     
}
   