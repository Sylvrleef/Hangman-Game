var words = ["Abhorrent", "Adventure", "Afraid", "Allure", "Alone", "Amulet", "Annihilate", "Antics", "Apparition", "Awesome", "Banshee", "Basket", "Bats", "Beasts", "Bewitching", "Black", "Bloody", "Bobbing", "Bones", "Bony", "Boo", "Brew", "Brimstone", "Broom", "Bubbling", "Cackle", "Candles", "Candy", "Captivate", "Carvings", "Cat", "Cauldron", "Caution", "Cemetery", "Ceremonies", "Charms", "Chills", "Clairvoyant", "Cloak", "Cloudy", "Cobwebs", "Cockroach", "Coffin", "Concoction", "Conjure", "Contort", "Costume", "Coven", "Crawling", "Crazed", "Creaking", "Creepy", "Cringe", "Crone", "Crypt", "Curses", "Dark", "Decapitation", "Decomposed", "Decorations", "Demon", "Devil", "Dim", "Disgusting", "Dismal", "Dracula", "Dragon", "Druids", "Dusk", "Eek", "Eerie", "Effect", "Elf", "Enchant", "Entertaining", "Escapade", "Face paint", "Fairy", "Fear", "Feasting", "Fiend", "Foggy", "Fortuneteller", "Frankenstein", "Fright", "Frighten", "Gasp", "Ghastly", "Ghost", "Ghoul", "Gnarl", "Gnome", "Goblin", "Gory", "Gourd", "Grave", "Gremlin", "Groaning", "Gross", "Grotesque", "Gruesome", "Hag", "Haunt", "Haven", "Hecate", "Hex", "Hobgoblin", "Horrible", "Horrify", "Horseman", "Hover", "Howl", "Hysterical", "Imitate", "Imp", "Infect", "Influence", "Jinx", "Jokes", "Keep", "Labyrinth", "Lantern", "Leprechaun", "Lunar", "Lycanthrope", "Macabre", "Maggot", "Magic", "Magical", "Maniac", "Mask", "Maze", "Mesmerize", "Metamorphosis", "Miasma", "Moan", "Monster", "Moon", "Mummy", "Mysterious", "Mystery", "Netherworld", "Newt", "Nightmarish", "Noisemaker", "Noisy", "Occultism", "Occurrences", "Ogre", "Orange", "Outfit", "Parade", "Pendant", "Pentagram", "Petrify", "Phantasm", "Phantom", "Phenomenon", "Possess", "Potions", "Pranks", "Prowl", "Psychic", "Pumpkin", "Purple", "Quake", "Quest", "Quiver", "Rattle", "Repugnant", "Revolting", "Sack", "Sarcophagus", "Scar", "Scare", "Scared", "Scream", "Screech", "Scythe", "Season", "Seer", "Shiver", "Shriek", "Sibyl", "Sinister", "Skeleton", "Skulduggery", "Skull", "Slink", "Soothsayer", "Sorcerer", "Sorcery", "Soul", "Specter", "Spectral", "Spell", "Spellbound", "Spider", "Spirit", "Spook", "Stuff", "Supernatural", "Superstition", "Supervision", "Suspicious", "Terror", "Terrorize", "Toads", "Tomb", "Tortured", "Treasure", "Trickery", "Troll", "Twilight", "Ugly", "Uneasy", "Unexpected", "Unexplained", "Unmask", "Vampire", "Vein", "Vixen", "Voodoo", "Wail", "Wandering", "Warts", "Waylay", "Weird", "Whisper", "Whistle", "Wicked", "Wild", "Witch", "Witchcraft", "Wizard", "Worrisome", "Yells", "Yelp", "Zap", "Zombie", "Zone", "Zorro"]


var word = words[Math.floor(Math.random() * words.length)];
var wordToGuess = word.toLowerCase();
var wordArray = wordToGuess.split("");
console.log(wordArray);

var str_replaced = "";

for (var i = 0; i < wordToGuess.length; i++) {
  str_replaced = str_replaced + "_ ";
}
console.log(str_replaced.length);
document.getElementById("emptyWord").innerHTML = str_replaced;

// document.getElementById("hiddenWord").innerHTML = wordToGuess;
document.getElementById("winCount").innerHTML = "0";

console.log(str_replaced);
console.log(wordToGuess);

// capture and log user's input
var keyPressed = "";

document.onkeyup = function(event) {
    keyPressed = event.key;
    console.log("key pressed:", keyPressed);
    console.log("word array index of:", wordArray.indexOf(keyPressed));

    if (wordArray.indexOf(keyPressed) >= 0) {
      var letterIndex = (wordArray.indexOf(keyPressed) * 2);
      wordArray[wordArray.indexOf(keyPressed)] = "";
      console.log(wordArray);
      str_replaced = str_replaced.substr(0, letterIndex) + keyPressed + str_replaced.substr(letterIndex + 1);
      console.log(str_replaced);
      document.getElementById("emptyWord").innerHTML = str_replaced;
    } else {
      numberOfGuesses = numberOfGuesses - 1;
      document.getElementById("remainingGuesses").innerHTML = numberOfGuesses;
    }
      var letterGuessed = keyPressed;
      document.getElementById("keyPressed").innerHTML += letterGuessed + "<br>";
    }

    // is letter in wordToGuess?
    wordArray.indexOf(keyPressed);

    // track and log remaining number of guesses
    var numberOfGuesses = 10;
    document.getElementById("remainingGuesses").innerHTML = numberOfGuesses;

// reset wins total
document.getElementById("reset").onclick = function() {
document.getElementById("winCount").innerHTML = 0;
}
