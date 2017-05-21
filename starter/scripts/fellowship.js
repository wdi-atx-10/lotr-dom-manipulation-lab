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
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var section = document.createElement('section')
  section.className = ("middle-earth")

  lands.forEach(function(land, i, array){
    var article = document.createElement('article')
    var h1 = document.createElement('h1')
    h1.textContent = land
    article.appendChild(h1)
    section.appendChild(article)

  })
  body.appendChild(section)

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var ul = document.createElement('ul')
  hobbits.forEach(function (hobbit, index) {
    var li = document.createElement('li')
    li.className = ('hobbit')
    li.textContent = hobbit
    ul.appendChild(li)
  })
  document.querySelector('section').firstChild.appendChild(ul)
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var div = document.createElement('div')
  div.id = 'the-ring'
  div.className = 'magic-imbued-jewelry'
  div.addEventListener('click', nazgulScreech)
  document.querySelector('ul').querySelector('li.hobbit').appendChild(div)
}
keepItSecretKeepItSafe()


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  var ul = document.createElement('ul')
  buddies.forEach(function(buddy, index) {
    var li = document.createElement('li')
    li.textContent = buddy
    ul.appendChild(li)
  })
  aside.appendChild(ul)
  var rivendell = document.getElementsByTagName('article')
  rivendell[1].appendChild(aside)
}
makeBuddies()

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var buddies = document.querySelector('aside ul').getElementsByTagName('li')
  buddies[3].textContent= 'Aragorn'
}
beautifulStranger()


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = document.querySelector('section').firstChild.getElementsByClassName('hobbit')
  newUl = document.querySelector('aside ul')
  newUl.appendChild(hobbits[0])
  newUl.appendChild(hobbits[0])
  newUl.appendChild(hobbits[0])
  newUl.appendChild(hobbits[0])


  document.querySelector('section').firstChild.querySelector('ul').innerHTML = ''

}
leaveTheShire()



// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var div = document.createElement('div')
  div.id = 'the-fellowship'
  document.getElementsByTagName('article')[1].appendChild(div)
  fellowship = document.querySelector('section article aside ul')
  while (fellowship.hasChildNodes()) {
    //alert(fellowship.firstChild.textContent + " has joined your party!")
    document.getElementById('the-fellowship').appendChild(fellowship.firstChild)
  }
}
forgeTheFellowShip()

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.querySelector('#the-fellowship').firstChild
  gandalf.textContent = 'Gandalf the White'
  gandalf.style.cssText = 'background-color: white; border: 3px solid gray'

}

theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('The horn of Gondor has been Blown')
  alert('Boromir has been killed by the Uruk-hai')
  document.querySelector('#the-fellowship').children[4].style.cssText = 'text-decoration: line-through;'
  document.querySelector('#the-fellowship').removeChild(document.querySelector('#the-fellowship').children[4])
}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var ul = document.createElement('ul')
  var frodo = document.getElementsByClassName('hobbit')[0]
  var sam = document.getElementsByClassName('hobbit')[1]
  ul.appendChild(frodo)
  ul.appendChild(sam)
  console.log("frodo", frodo)
  document.getElementsByTagName('article')[2].appendChild(ul)
  var doom = document.createElement('div')
  doom.id = 'mount-doom'
  document.getElementsByTagName('article')[2].appendChild(doom)

}
itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  gollum = document.createElement('div')
  gollum.id = 'gollum'
  document.getElementsByTagName('article')[2].appendChild(gollum)
  console.log(document.getElementById('the-ring'))
  document.getElementById('gollum').appendChild(document.getElementById('the-ring'))
}

weWantsIt()


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  document.getElementById('gollum').removeChild(document.getElementById('the-ring'))
  document.getElementsByTagName('article')[2].removeChild(document.getElementById('gollum'))
  document.getElementsByTagName('article')[0].appendChild(document.getElementsByTagName('article')[2].getElementsByTagName('ul')[0])

}
thereAndBackAgain()
