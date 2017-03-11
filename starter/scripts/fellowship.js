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
  for (var i=0; i<lands.length; i++) {
    // inside each article tag include an h1 with the name of the land
    $article = $('<article>').html('<h1>' + lands[i] + '</h1>');

    $section.append($article);
  }

  // append middle-earth to your document body
  $('body').append($section);

}

setTimeout(function(){makeMiddleEarth()},500);


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var first = $('article').eq(0);
  var list = $(first).append('<ul></ul>').find('ul');
  for (var i = 0; i < hobbits.length; i++)
      list.append('<li class="hobbit">'+ hobbits[i]+'</li>');
}

setTimeout(function(){makeHobbits()},1500);

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  $theRing = $('<div>').attr('id', 'the-ring');

  // give the div a class of 'magic-imbued-jewelry'
  $theRing.addClass('magic-imbued-jewelry');

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  $theRing.click(function() {
  nazgulScreech();
})

// add the ring as a child of Frodo
var frodo = $('li.hobbit').eq(0);

$( ".inner" ).append( "<p>Test</p>" );
$(frodo).append($theRing);

}

setTimeout(function(){keepItSecretKeepItSafe()},2500);

// Part 4


function makeBuddies() {
  // create an aside tag
  var $aside = $('<aside>');
  // insert your aside as a child element of rivendell
  var second = $('article').eq(1);
  $(second).append($aside);
  // attach an unordered list of the 'buddies' in the aside
  var list = $aside.append('<ul></ul>').find('ul');
  for (var i = 0; i < buddies.length; i++)
      list.append('<li>' + buddies[i] + '</li>');

}

setTimeout(function(){makeBuddies()},3500);

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
$("li:contains('Strider')").text('Aragorn');

}

setTimeout(function(){beautifulStranger()},4500);

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

$('ul > li').slice(0).appendTo('aside ul');

}

setTimeout(function(){leaveTheShire()},5500);

// Part 7

//
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
 var $fellowship = $('<div>').attr('id', 'the-fellowship');
 var second = $('article').eq(1);
 $(second).append($fellowship);

 $("li").each(function(){
    $fellowship.append($(this));
    alert($(this).text() + " has joined the party!");
})

}

setTimeout(function(){forgeTheFellowShip()},6500);

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  $("li:contains('Gandalf')").text('Gandalf the White').css('background-color', 'white').css('border', '5px grey solid');

}

setTimeout(function(){theBalrog()},7500);

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  $("#the-ring").click(function(){
   alert("Boromir's been killed by the Uruk-hai!");
   $("li:contains('Boromir')").css("text-decoration", "line-through");
  $("li:contains('Boromir')").fadeOut("slow");
})
}

setTimeout(function(){hornOfGondor()},8500);

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor

 var third = $('article').eq(2);
 $('div#the-fellowship').slice(0,2).appendTo(third);
 


    // add a div with an id of 'mount-doom' to Mordor
    $doom = $('<div>').attr('id', 'mount-doom');
    $($doom).text('Mount Doom');
    $('h1:contains("Mordor")').append($doom)


}

setTimeout(function(){itsDangerousToGoAlone()},10500);

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

  var $Gollum = $('<div>').attr('id', 'Gollum');
  var third = $('article').eq(2);
  $(third).append($Gollum);
  $($Gollum).text('Gollum');
  $("#Gollum").attr('id', 'the-ring').attr('class', 'magic-imbued-jewelry');

}

setTimeout(function(){weWantsIt()},11500);

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  $("div:contains('Gollum')").fadeOut("slow");

  // remove all the baddies from the document
  var $second = $('<div>').attr('id', 'the-fellowship');
  $('#the-fellowship').fadeOut("slow");

  // Move all the hobbits back to the shire
  var first = $('article').eq(0);
  $('li.hobbit').appendTo(first);

}

setTimeout(function(){thereAndBackAgain()},12500);
