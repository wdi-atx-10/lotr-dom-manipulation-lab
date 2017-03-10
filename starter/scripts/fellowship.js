console.log("Linked.");
$(function() {

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

function nazgulScreech(){
  document.getElementById("nazgul-screech").play();
};

// Part 1
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  $section=$('<section>').attr('id','middle-earth');
  // add each land as an article tag
  for(var i=0;i<lands.length;i++) {
  // inside each article tag include an h1 with the name of the land
  $article=$('<article>').html('<h1>'+lands[i]+'</h1>');
  $section.append($article);
  }
  // append middle-earth to your document body
  $('body').append($section);
};
makeMiddleEarth();

// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  $('article').eq(0).append('<ul>');
  for(var i=0;i<hobbits.length;i++) {
    $('ul').append('<li>'+hobbits[i]+'</li>');
    $('li').addClass('hobbit');
  };
  // give each hobbit a class of hobbit
};
makeHobbits();

// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  $div=$('<div>').attr('id','the-ring').addClass('magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  $div.click(nazgulScreech);
  // add the ring as a child of Frodo
  $('.hobbit').eq(0).append($div);
};
keepItSecretKeepItSafe();

// Part 4
function makeBuddies() {
  // create an aside tag
  $aside=$('<aside>');
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  $('article').eq(1).append($aside);

  $('aside').append('<ul class="buddies">');
  for (var i=0;i<buddies.length;i++) {
    $('ul.buddies').append('<li>'+buddies[i]+'</li>');
  };
}
makeBuddies();

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $('ul.buddies li').eq(3).text('Aragorn');
};
beautifulStranger();

// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $('.hobbit').appendTo('ul.buddies');
}
leaveTheShire();

// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  $('article').eq(1).append('<div id="the-fellowship">');
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (var i=0, x=($('ul.buddies li')).length; i<x ;i++) {
    $('ul.buddies li').eq(0).appendTo('#the-fellowship');
    // after each character is added make an alert that they have joined your party
    alert(($('#the-fellowship li').eq(i).text())+' has joined your party.');
  };
};
forgeTheFellowShip();

// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  $divGandolf=$('div#the-fellowship li').eq(0);
  $divGandolf.text('Gandalf the White');
  // apply style to the element
  $divGandolf.css('background','white').css('border', 'thick').css('border-color','grey');
  // make the background 'white', add a grey border
}
theBalrog();

// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of Gondor has been blown!');
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  $('#the-fellowship li').eq(4).css('text-decoration', 'line-through');
  // Remove Boromir from the Fellowship
  $('#the-fellowship li').eq(4).remove();
}
hornOfGondor();

// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  $('#the-fellowship .hobbit').eq(0).appendTo($('article').eq(2));
  $('#the-fellowship .hobbit').eq(0).appendTo($('article').eq(2));
  // add a div with an id of 'mount-doom' to Mordor
  $('article').eq(2).append('<div id="mount-doom">');
}
itsDangerousToGoAlone();

// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  $('article').eq(2).append('<div id="Gollum">');
  // Remove the ring from Frodo and give it to Gollum
  $('#the-ring').appendTo('#Gollum');
  // Move Gollum into Mount Doom
  $('#Gollum').appendTo('#mount-doom');
}
weWantsIt();

// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  $('#the-ring, #Gollum').remove();
  // remove all the baddies from the document
  $('article').eq(2).css('background', 'none');
  $('h1').eq(2).remove();
  // Move all the hobbits back to the shire
  $('.hobbit, #the-fellowship li').appendTo($('article').eq(0));
}
thereAndBackAgain();






});
