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
  $('body').append('#middle-earth').html('<section></section>');
  for(var i=0; i<lands;i++){
    var landValue = lands[i];
    $('#middle-earth').append('<article><h1>'+landValue+'</article>');
  }
}
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

// ex $section = $('<section>').attr('id', 'middle-earth');
//for(var i=0;i<lands.length;i++) {
//$article = $('<article>').html('<h1>' + lands[i] + '</h1>');
//@section.append($section);
//}
makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  $unorderedList = $('<ul>').attr('class', 'hobbits');
  for(var i=0;i<hobbits.length; i++) {
    $list = $('<ul>').html('<li>' +hobbit[i] +'</li>');
    $unorderedList.after($section);

  }
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  $thering = $('<div class="magic-imbued-jewelry" id="the-ring">');
  //$thering.addClass("magic-imbued-jewelry");
  $thering.click(function(){
    nazgulScreech();
  });
  $("ul:nth-child(1)").append($thering);
}
setTimeout(function(){keepItSecretKeepItSafe()},2500);

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  $asideTag = $('<aside>').attr('id', 'buddiesList');
  for(var i=0;i<buddies;i++){
    $list2 = $('<ul>').html('<li>' +buddies[i]+ '</li>');
    $asideTag.append($list2);
}
    $('article').eq(1).append($asidetag);
}
setTimeout(function(){makeBuddies()},3500);

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $('li').each(function(){
    if ($(this).text () === 'Strider'){
      $(this).text("Aragorn");
    }
  })
}
setTimeout(function(){beautifulStranger()},4500);

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $('h1').each(function() {
    if ($(this).text() === 'Rivendell'){
      $(this).after($hobbits);
    }
  })

  $('li').each(function(){
    if ($(this).text() === 'Frodo Baggins'){
      $(this).append('$theRing');
    }
  })

}
setTimeout(function(){leaveTheShire()},5500);

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  $fellowship = $('<div class="the-fellowship"> The Fellowship </div>');
  $("li").each(function(){
    $fellowship.append($(this));
    alert($(this).text() + " has joined the party!");
  })

  $("h1:contains('Rivendell')").append($fellowship);
  $("#buddieslist").remove();
  $("#hobbitslist").remove();

}


setTimeout(function(){forgeTheFellowShip()},6500);

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  $("li").each(function(){
    if ($(this).text() === "Gandalf the Grey"){
      $(this).text("Gandalf the White");
      $(this).css("background-color","white");
      $(this).css("border-style","solid");
      $(this).css("border-width","5px");
      $(this).css("border-color","grey");
    }
  })

}

setTimeout(function(){theBalrog()},7500);


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('someone blew the horn of gondor!');
  alert('the Uruk-hai has killed Boromir!');

  $('li').each(function(){
    if ($(this).text() === 'Boromir'){
      $(this).css('text-decoration','line-through');
    }
  });

setTimeout(function(){
      $("li").each(function(){
        if ($(this).text() === "Boromir"){
          $(this).remove();
        }
      });
  },1000);


}

setTimeout (function(){hornOfGondor()},8500);

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
    $("li").each(function(){
      if ($(this).text() === "Frodo Baggins" || $(this).text() === 'Samwise \'Sam\' Gamgee'){
        $('h1:contains("Mordor")').append($(this));
      }
    });
setTimeout(function(){itsDangerousToGoAlone()},10500);

// Part 11

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
    $("li").each(function(){
      if ($(this).text() === "Frodo Baggins" || $(this).text() === 'Samwise \'Sam\' Gamgee'){
        $('h1:contains("Mordor")').append($(this));
      }
    });

    $wtf = $('<div id="mount-doom"> Mount Doom </div>');
    $('h1:contains("Mordor")').append($wtf)


}

setTimeout(function(){itsDangerousToGoAlone()},10500);

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  $('#gollum').remove();
  $('#theRing').remove();
  $('#mount-doom').remove();

  $("li").each(function(){
    console.log($(this).attr("class"));
    if($(this).attr("class")==="hobbits"){
      $("h1:contains('The Shire')").append($(this));
    }
  });
}
setTimeout(function(){thereAndBackAgain()},12500);

