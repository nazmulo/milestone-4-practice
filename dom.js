// DOM = Document Object Model

//Traversing DOM :

// document.getElementByTagName ('li');

//1

//const liCollection = document.getElementsByTagName('li');
//
//console.log(liCollection);
//
//for (const li of liCollection) {
//    console.log(li);
//}
//
//console.log(li.innerText);

//2

//const allHeading = document.getElementsByTagName(h1); 
//console.log (allHeading);

//for (const heading of allHeading) {
//    //console.log(heading)
//    console.log(heading.innerText);
//}

//3 inner text change korte :

//const allHeading = document.getElementsByTagName (h1);
//       allHeading.innerText = 'Jahan';

//document.get elementById ;

//1

//const foodTittle = document.getElementById('food');
//console.log ('foodTittle');
//console.log ('foodTittle.innerText');
//foodTittle.innerText = "food i can"

//2


//const brandElement = document.getElementById('brand');

//brandElement.innerText = 'jalal slepping brand';

//get elementByClassName :

//const farenElements = document.getElementsByClassName('faren');
//console.log("farenElements");
//
//    for (const element of farenElements){
//    console.log ('elements');
//    }
//    console.log(element.innerText);

//query selector all :

//1
 
//document.querySelectorAll(".food.forenge");
//
//document.querySelectorAll("#old.p.span");
//
//foodElement.innerText
//foodElement.style.color = "blue"
//foodElement.style.backgroundColor = "gold"
//foodElement.style.borderRadius = "0px"
//foodElement.style.padding = "50px"
//foodElement.style.marginLeft = "20px"
//foodElement.style.textAlign = "center"


//class-list :

foodElement.classList.add('bg-red');
foodElement.classList.add('bold');
foodElement.classList.add('big');
foodElement.classList.remove('bg-red');
