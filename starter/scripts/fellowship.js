console.log("Linked.");

$(document).ready(function() {

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
    for (var i = 0; i < lands.length; i++) {
      $article = $('<article>').html('<h1>' + lands[i] + '</h1>');
      $section.append($article);
    }
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    $('body').append($section);
  }

  makeMiddleEarth();


  // Part 2

  function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    $ul = $('<ul>');
    for (var i = 0; i < hobbits.length; i++) {
      $list = $('<li>').html(hobbits[i]);
      $ul.append($list);
    }

    // give each hobbit a class of hobbit
    $('ul').attr('class', 'hobbit');
    $('article').eq(0).append($ul);
  }

  makeHobbits();

  // Part 3

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    $div = $('<div>').attr('id', 'the-ring');

    // give the div a class of 'magic-imbued-jewelry'
    $div.addClass('magic-imbued-jewelry');
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    $div.on('click', function(e) {
      nazgulScreech();
      e.preventDefault();
    });
    // add the ring as a child of Frodo
    $('ul').find('li').eq(0).append($div);
  }

  keepItSecretKeepItSafe();

  // Part 4


  function makeBuddies() {
    // create an aside tag
    $aside = $('<aside>');
    // attach an unordered list of the 'buddies' in the aside
    $ul = $('<ul>');
    for (var i = 0; i < buddies.length; i++) {
      $list = $('<li>').html(buddies[i]);
      $ul.append($list);
    }
    $aside.append($ul);

    // insert your aside as a child element of rivendell
    $('article').eq(1).append($aside);
  }

  makeBuddies();

  // Part 5


  function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    $('aside').find('li').eq(3).text('Aragorn');
  }

  beautifulStranger();

  // Part 6

  function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    $('article').eq(1).append($('article').eq(0).find('ul').eq(0));

  }
  leaveTheShire();

  // Part 7


  function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    $div = $('<div>');
    $div.attr('id', 'the-fellowship');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    for (var i = 0; i < buddies.length; i++) {
      $div.append($('article').eq(1).find('li').eq(i));

      if (i < hobbits.length) {
        alert(hobbits[i] + ' has joined the fellowship!');
      }
      alert(buddies[i] + ' has joined the fellowship!');
    }
    $('article').eq(1).append($div);
  }
  forgeTheFellowShip();

  // Part 8


  function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    $('article').eq(1).find('li').eq(0).text('Gandalf the White');
    $('article').eq(1).find('li').eq(0).css('border', '3px solid grey').css('background-color', 'white');

  }
  theBalrog();

  // Part 9

  function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    alert('Horn of Gondor has been blown!!');
    $('article').eq(1).find('li').eq(6).css('text-decoration', 'line-through');
    alert('Boromir\'s been killed by the Uruk-hai!');
    $('article').eq(1).append($('article').eq(1).find('li').eq(4));

  }
  hornOfGondor();


  // Part 10

  function itsDangerousToGoAlone() {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
    $('article').eq(2).append($('li').eq(0));
    $('article').eq(2).append($('article').eq(1).find('li').eq(6));
    $div = $('<div>');
    $div.attr('id', 'mount-doom');
    $('article').eq(2).append($div);
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
