console.log("Linked.");

// $(function(){
//   function nazgulScreech(){
//     document.getElementById("nazgul-screech").play();
// }


$(document).ready(function(){
// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
//answers
//$section = $('<section>').attr('id, 'middle-earth');
//for (var i=0; i<lands.length; i++) {
//$article = $('<article).html('<h1>' + lands[i] +' </h1> ');
//$section.append)$article);
//}
  $('body').append('<section id = middle-earth></section>');
  // create a section tag with an id of middle-earth
    for(var i=0; i<lands; i++) {
    $('#middle-earth').append('<article><h1>' + lands [i] + '</h1></article>');
     }
  // add each land as an article tag


  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2
// display an unordered list of hobbits in the shire (which is the second article tag on the page) // give each hobbit a class of hobbit

 function makeHobbits() {
   $('article:nth-child(1)').append('<ul></ul>');
   for (i=0;i<hobbits.length;i++){
   $('article:nth-child(1) ul').append('<li class = hobbit>'+hobbits[i]+'</li>');
   }
  }

 makeHobbits();

// Part 3

 $(".hobbit:first").append('<div id = the-ring class = magic-imbued-jewelry></div>');
 $('#the-ring').click(nazgulScreech);

keepItSecretKeepItSafe();
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo



// Part 4

 function makeBuddies() {
// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell
 $('article:nth-child(2)').append('<ul></ul>');
   for (i=0;i<buddies.length;i++){
   $('article:nth-child(2) ul').append('<li class = buddies>'+buddies[i]+'</li>');
  }
}

makeBuddies();


// Part 5
function beautifulStranger() {
// change the 'Strider' textnode to 'Aragorn'
$('.buddies').eq(3).text('Aragorn');
}

beautifulStranger();
//erroring out?????

// Part 6

//  function leaveTheShire() {
//  // assemble the hobbits and move them to Rivendell
// $('article:nth-child(2) ul').append($('article:first li'));
// }

// leaveTheShire()


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
