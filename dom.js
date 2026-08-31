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

//foodElement.classList.add('bg-red');
//foodElement.classList.add('bold');
//foodElement.classList.add('big');
//foodElement.classList.remove('bg-red');
//
//attribute:

//foodElement.getAttribute('id');
//foodElement.getAttribute('class');
//foodElement.setAttribute('tittle');

//nodeList :

//document.getElementById('player-container').childNodes;
//
//document.getElementById('player-container').childNodes[0];
//
//document.getElementById('player-container').childNodes[1];
//
//document.getElementById('player-container').childNodes[2];
//
//document.getElementById('player-container').childNodes[3];
//
//document.getElementById('player-container').childNodes[3].ChildNodes;
//
//document.getElementById('player-container').childNodes[3].childNodes[0];

//parent-nodes:
//
//document.getElementById('player-container').childNodes[3].childNodes[0].parentNodes
//
//document.getElementById('player-container').childNodes[3].childNodes[0].parentNodes.parentNodes;

//create element :

//document.createElement('p');
//document.createElement('li');
//document.createElement('h1');
//document.createElement('span');
//
//const newChild = document.createElement('li');
//
//newChild.innerText = 'new born baby';


//practice :

// akhane id 'player-list'

// 1. create element and set innerText or innerHtml :

//const newChild = document.createElement('li');
//newChild.innerText = 'new born footballer';

// 2. find the parent where you will add the child :

//const playList = document.getElementById('player-list');

// 3. append the child to the parent :

//playerList.appendChild('newChild');

