console.log("Linked.");

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
  $section = $('<section>').attr('id', 'middle-earth');

  // add each land as an article tag
  for (var i=0; i<lands.length; i++){

  // inside each article tag include an h1 with the name of the land
    $article = $('<article>').html('<h1>'+ lands[i] + '<h1>');
  // append middle-earth to your document body
    $section.append($article);
  }
  $('body').append($section);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  $('article').eq(0).append('<ul>');
  for (var i=0; i<hobbits.length; i++){
      $li = $('<li>').html(hobbits[i]);
      console.log(hobbits[i]);
      $('ul').append($li).addClass('hobbitses');
  }
  console.log('hobbits');
  // give each hobbit a class of hobbit
}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  $(body).append($('<div>').attr('id', 'the-ring'));
  // give the div a class of 'magic-imbued-jewelry'
  $('#the-ring').addClass('magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  $('#the-ring').on('click', function(){
    nazgulScreech();
    console.log('screeech');
  })
  // add the ring as a child of Frodo
  $('li').eq(0).append($('#the-ring'));
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  $(body).append($('<aside>'));
  // attach an unordered list of the 'buddies' in the aside
  $('aside').append('<ul>');
  for (var i=0; i<buddies.length; i++){
      $li = $('<li>').html(buddies[i]);
      console.log(buddies[i]);
      $('aside ul').append($li);
  }
  // insert your aside as a child element of rivendell
  $('article').eq(1).append($('aside ul'));
}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
$('article:nth-of-type(2) ul li').eq(3).text('Aragorn');
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $('.hobbitses').appendTo($('article').eq(1));

}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  $('article').eq(1).append('<div class="fellowship">the-fellowship</div>');
  // add each hobbit and buddy one at a time to 'the-fellowship'
  $('article:nth-child(2) ul li').each(function(index, value){
    $(this).appendTo('.fellowship');
    alert($(this).text() + ' has been added to your party!');
  });
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  $('.fellowship').children().eq(0).text('Gandalf the White').css({'background': 'white', 'border':'5px solid grey'});
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog();
// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  $('.fellowship').children().eq(4).css('text-decoration','line-through');
  // Remove Boromir from the Fellowship
  $('.fellowship').children().eq(4).remove()
}

hornOfGondor();
// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var $frodo = $('.fellowship').children().eq(4);
  var $sam = $('.fellowship').children().eq(5);
  $('article').eq(2).append($frodo, $sam);
  // add a div with an id of 'mount-doom' to Mordor
  $('article').eq(2).append('<div id="mount-doom"></div>')
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  $('article').eq(2).append('<div id="gollum"></div>')
  // Remove the ring from Frodo and give it to Gollum
  $('#gollum').append($('#the-ring'));
  // Move Gollum into Mount Doom
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  $('#gollum').remove();
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  console.log($('.fellowship li:nth-child(5)').text());
  console.log($('.fellowship li:nth-child(6)').text());

  $('article').eq(0).append($('.fellowship li:nth-child(5)'));
  $('article').eq(0).append($('.fellowship li:nth-child(5)'));
  $('article').eq(0).append($('#mount-doom').prev());
  $('article').eq(0).append($('#mount-doom').prev());


}

thereAndBackAgain();
