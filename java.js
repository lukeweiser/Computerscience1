var anime = [
  'Tank by The Seatbelts',
  'A cruel Angels Thesis by Yoko Takahashi',
  'Hacking to the Gate from Steins;Gate',
  'Inner Universe by Origa',
  'Unravel by TK from Ling Tosite Sigure',
  'Again by YUI',
]

function newAnime() {
  var randomNumber = Math.floor(Math.random() * (anime.length));
document.getElementById('Display').innerHTML = anime[randomNumber];
}

var rag = [
  'Caress Me Down by Sublime',
  '2am by Slightly Stoopid',
  'Ordinary Girl by Rebelution',
  'Dont Push by Sublime',
  'Cabron by Red Hot Chilli Peppers',
]

function newRag() {
  var randomNumber = Math.floor(Math.random() * (rag.length));
document.getElementById('Display').innerHTML = rag[randomNumber];
}

var trash = [
  'Problem by Ariana Grande',
  'Closer by Chainsmokers',
  'Chandelier by Sia',
  'Style by Taylor Swift',
  'Uptown Funk by Mark Ronson',
  'Never Say Never by Justin Bieber ',
]

function newTrash() {
  var randomNumber = Math.floor(Math.random() * (trash.length));
document.getElementById('Display').innerHTML = trash[randomNumber];
}
var meme = [
  'Fresh Avocado - Remix Compilation #3',
  'Chum Drum Bedrum by A Weird Russian Singer',
  'Never Gonna Hit Those Notes',
]

function newMeme() {
  var randomNumber = Math.floor(Math.random() * (meme.length));
document.getElementById('Display').innerHTML = meme[randomNumber];
}
var bass = [
  'Okay,ButThisIsTheLastTime Bassboosted by Bones ',
]

function newBass() {
  var randomNumber = Math.floor(Math.random() * (bass.length));
document.getElementById('Display').innerHTML = bass[randomNumber];
}
var old = [
  'That Way by Backstreet Boys',
  'Payphone by Maroon 5',
  'Counting Stars by OneRepublic',
  'Paradise by Coldplay',
  'Sk8er Boi by Avril Lavigne',
  'Last Friday Night by Katy Perry',
  'Soul Sister by Train',
]

function newOld() {
  var randomNumber = Math.floor(Math.random() * (old.length));
document.getElementById('Display').innerHTML = old[randomNumber];
}
