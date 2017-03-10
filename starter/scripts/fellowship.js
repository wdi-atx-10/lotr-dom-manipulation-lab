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
  // create a section tag with an id of middle-earth
  $section = $('<section>').attr('id','middle-earth');
  // add each land as an article tag
  for(var i =0;i<lands.length; i++){
    $article = $('<article class="lands">').html('<h1>' + lands[i] + '</h1>');
    $section.append($article);   
  }
  // inside each article tag include an h1 with the name of the land
  $('body').append($section);

  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  $('article').eq(0).append('<ul class="hobbits"></ul>');
  for(var i=0;i<hobbits.length;i++){
    $('ul').append('<li>' + hobbits[i] + '</li>');
     $('li').addClass('hobbit');
  }

  // give each hobbit a class of hobbit

}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  $ring = $('<div>').attr('class', 'magic-imbued-jewelry');
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  $('.magic-imbued-jewelry').on('click', nazgulScreech());
  // add the ring as a child of Frodo
  $('.hobbit').eq(0).append($ring);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  $aside = $('<aside>');
  // attach an unordered list of the 'buddies' in the aside
  $('article').eq(1).append($aside);

  $('aside').append('<ul id="buddies">');
  for(var i=0;i<buddies.length;i++){
    $('#buddies').append('<li>' + buddies[i] + '</li>');
  }
  
  // insert your aside as a child element of rivendell
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $('#buddies li').eq(3).text("Aragorn");
}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    $hobbitMove = $('.hobbits').detach();
    $('.lands').eq(1).append($hobbitMove);
 }
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  $fellowship = $('<div>').attr('class', 'the-fellowship');
    $('.lands').eq(1).append($fellowship);

  $('li').each(function(){
  +    $fellowship.append($(this));
  +    alert($(this).text() + " has joined the party!");
  })
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  $('.the-fellowship li').eq(0).text('Gandalf the White').css('background','white').css('border-color','grey');
  // apply style to the element
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('horn of gondor has been blown')
  $('.the-fellowship li').eq(4).css('text-decoration','line-through');


  $('.the-fellowship li').eq(4).delay(4000).remove();
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  $sam = $('.hobbit').eq(1).detach();
  $frodo = $('.hobbit').eq(0).detach();
  
  // add a div with an id of 'mount-doom' to Mordor
 $('.lands').eq(2).append($sam);
  $('.lands').eq(2).append($frodo);
  $('.lands').eq(2).append('<div id="mount-doom">');
} 
itsDangerousToGoAlone();
// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  $('.lands').eq(2).append('<div id="gollum">');
  $('.magic-imbued-jewelry').detach();
  $('#gollum').append('<div.magic-imbued-jewelry>');
  $('#mount-doom').append('<div.#gollum>');
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  $('#gollum').remove();
  $('.magic-imbued-jewelry').remove();
  
  
  $hobbitMove2 = $('.hobbit').detach();
  $('.lands').eq(0).append($hobbitMove2);
  $(' .the-fellowship').detach();
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain();
});