var validateRecipeWithQuantity = (ingredients, fridge)  => {
    ingredients = {'tomato': 2, 'onion': 3};
    fridge = {'tomato': 2, 'onion': 3, 'olives': 1};
    

    for (var i = 0, len = fridge.length; i < len; i++) {
  
  if (ingredients[i] === fridge) {
         return  console.log(fridge[i] + 'true ' );
        
   
  } else {
    console.log("false")
  }
  
}}

console.log(validateRecipeWithQuantity.map("tomato:2","onion:2"));