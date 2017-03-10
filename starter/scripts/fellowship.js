console.log("Linked.");

$(function(){
  function nazgulScreech(){
    document.getElementById("nazgul-screech").play();
  }
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
  $('body').append('<section id = middle-earth></section>');
  for (i=0;i<lands.length;i++){
    $('#middle-earth').append('<article><h1>'+ lands[i] +'</h1></article>');
  }
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  $('article:nth-child(1)').append('<ul></ul>');
  for (i=0;i<hobbits.length;i++){
    $('article:nth-child(1) ul').append('<li class = hobbit>'+hobbits[i]+'</li>');
  }
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  $(".hobbit:first").append('<div id = the-ring class = magic-imbued-jewelry></div>');
  $('#the-ring').click(nazgulScreech);

}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  $('article:nth-child(2)').append('<ul></ul>');
  for (i=0;i<buddies.length;i++){
    $('article:nth-child(2) ul').append('<li class = buddies>'+buddies[i]+'</li>');
  }
}

makeBuddies();

// Part 5


function beautifulStranger() {
  $('.buddies').eq(3).text('Aragorn');
}

beautifulStranger();

// Part 6

function leaveTheShire() {
$('article:nth-child(2) ul').append($('article:first li'));
}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  $('article:nth-child(2) ul').after($('<div class = the-fellowship></div>'));
  $('.the-fellowship').append($('article:nth-child(2) ul'));


  if (hobbits.length > buddies.length){
    for (i=0;i<hobbits.length;i++){
      alert(hobbits[i] + ' has joined your party.');
      if (i < buddies.length){
      alert(buddies[i] + ' has joined your party.');
    }
    }
  }
    else {
      for (i=0;i<buddies.length;i++){
        if (i < hobbits.length){
        alert(hobbits[i] + ' has joined your party.');
      }
        alert(buddies[i] + ' has joined your party.');
    }

  }

  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  $('article:nth-child(2) ul li:first').text('Gandalf the White');

  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog();

// Part 9

function hornOfGondor() {
  alert('The Horn of Gondor has been blown.');
  $('.the-fellowship ul li').eq(4).css('text-decoration', 'line-through');
  $('.the-fellowship ul li').eq(4).remove();


  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  $('article:nth-child(3)').append($('.the-fellowship li:eq(4)'));
  $('article:nth-child(3)').append($('.the-fellowship li:eq(5)'));


  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone();

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
