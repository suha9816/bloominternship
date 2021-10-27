




// var whereIsMyFood = (fridge, item)  => {
//     fridge=["drinks","vegetables","fruits"]
//     item=["banana","cola","cucamber"]

//     return console.log(fridge, item);



    
//   }  
//   whereIsMyFood("drinks","banana");
  
// var words = ['apple', 'orange', 'ananas', 'banana', 'mango', 'lemon', 'tomato'];

// function search (term) {
//   for (var i = 0, len = words.length; i < len; i++) {
//     if (words[i] === term) {
//       console.log(words[i] + ' is found at ' + i);
     
//     }
//   }
//     else { 
//        console.log(-1);

//          }
// }

// search('suga');

 var whereIsMyFood = (fridge, item)  => {
    fridge=["drinks","cola","bannana","orange"]
    

    for (var i = 0, len = fridge.length; i < len; i++) {
  
  if (fridge[i] === item) {
         return  console.log(fridge[i] + ' is found at ' + i);
        
   
  } else {
    console.log("-1")
  }
  
}}

console.log(whereIsMyFood("drinks","cola"));