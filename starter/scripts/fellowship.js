console.log("Linked.");
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
  $section = $('<section>').attr('id', 'middle-earth');
  $('body').append($section);
  for(i=0; i<lands.length; i++){
    $article = $('<article>').append('<h1>' + lands[i] + '</h1>');
    $section.append($article);
  }
}


makeMiddleEarth();


// Part 2

function makeHobbits() {

  for(i=0;i<hobbits.length;i++){
    $hobbitList = $('<ul>').append('<li class="hobbit">' + hobbits[i] + '</li>');
    $('#middle-earth article').eq(0).append($hobbitList);
  }
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  $theRing = $('<div>').attr('id', 'ring').attr('class', 'magic-imbued-jewelry');
  $('.hobbit').eq(0).append($theRing);
  $('#ring').on('click', nazgulScreech);
  // $('')
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}
keepItSecretKeepItSafe()

// Part 4



function makeBuddies() {
$('article:nth-child(2)').append('<ul></ul>');


  for (var i = 0; i < buddies.length; i++) {
    console.log(buddies[i]);
    $('article:nth-child(2) ul').append('<li class="buddies">' + buddies[i] + '</li>');
  }
}
makeBuddies();

// Part 5


function beautifulStranger() {
  $('.buddies').eq(3).text('Aragorn');
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  $('article:nth-child(2) ul').append($('article:nth-child(1) ul'));
  // assemble the hobbits and move them to Rivendell
}
leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  $fellowship = $('<div>').attr('class', 'the-fellowship');
  for (var i = 0; i < hobbits.length; i++) {
    $hobbits[i].append($fellowship);
    if(buddies.length < hobbits.length){

    }
  }
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

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
});
