//var email=true
//var facebook =false
//var google =true

//if(email || facbook || google)
//{
    //console.log("login succes")
    
//}



//const printName = (name,password) =>
//{
    //return console.log("name is: ",user,"pass is: ",password)

//}
//printName = ("suha","1998")

var multi = (num1,num2) =>
{
  let result=num1*num2
  return console.log("the result is :",result)

}
multi (3,13)




var suha = (num1,num2) =>
{   let result=num1+num2
    return console.log("the result is :",result)
}
suha (1,22)



var suham = (num1,num2) =>
{   let result=num1*num2
    return console.log("the result is :",result)
}
suham (1,22)


var num1 = 2;
var nv2 = 1;

console.log(num1 * nv2);

var result = num1 > nv2;

console.log(typeof result);



var Sales = "Toyota";

function CarTypes(name) {
  if (name == "Honda") {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota 










var sWeather = 49//will got its ok.... bcouse 49 greater than other.
if (sWeather < 20){
  console.log("it's  more great")
}
if (sWeather < 30){
  console.log("it's  great")
}
else{

    console.log("it's ok best than 55 omg")
  }
  

var ins = true
var face = false
var google = false
if(ins){
  console.log("login successs")
}
if(face){
  console.log("login ")
}
if (google || face || ins){// if change to and & will appear just ins bcouse true * false= false hhh.
  console.log("great login ")
}




var step;
for (step = 0; step < 6; step++); {
  // Runs 5 times, with values of step 0 through 4.
  console.log("suha is the best");
}






const fullName = ["suha",
"rashhh",
"ss",88];
for (let i = 0 ; i <= fullName.length ; i++){
  if(typeof fullName[i] !== "string") break;//try break instead continue 
  console.log(fullName[i]);
}




let i = 0;
while( i < 10) {

  console.log(i);
  i++;
}


for (k = 1 ; k < 9 ; k++ ){
  console.log("suha mohammed jasim")
}
