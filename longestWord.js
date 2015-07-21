// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
//this doesn't work yet
Array.max = function( array ){
    return Math.max.apply( Math, array );
};

function LongestWord(sen) { 
  	function cleanse(){
      for(var i = 0; i < sen.length; i ++){
          var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/g;
          sen.replace(punctRE, "");
          var senSplit = sen.split(" ");
      }
      return senSplit;
    }
  
  	var cleanedSen = cleanse();
  	var lengthArr = [];
  	for (var j = 0; j < cleanedSen.length; j ++){
      	lengthArr.push(cleanedSen[j].length);
    }
   var max = Array.max(lengthArr);
  
 // return sen; 
         
}
   