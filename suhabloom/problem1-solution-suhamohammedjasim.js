var validateRecipe = (ingredients, fridge)  => {
    ingredients = ['tomato', 'onion', 'lettuce']
    fridge = ['tomato', ' banana','apple', 'onion', 'cucumber']
    

    for (var i = 0, len = fridge.length; i < len; i++) {
  
  if (ingredients[i] === fridge) {
         return  console.log(fridge[i] + 'true ' );
        
   
  } else {
    console.log("false")
  }
  
}}

console.log(validateRecipe("tomato","tomato"));