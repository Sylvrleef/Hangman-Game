var words = ["Abhorrent", "Adventure", "Afraid", "Allure", "Alone", "Amulet", "Annihilate", "Antics", "Apparition", "Awesome", "Banshee", "Basket", "Bats", "Beasts", "Bewitching", "Black", "Bloody", "Bobbing", "Bones", "Bony", "Boo", "Brew", "Brimstone", "Broom", "Bubbling", "Cackle", "Candles", "Candy", "Captivate", "Carvings", "Cat", "Cauldron", "Caution", "Cemetery", "Ceremonies", "Charms", "Chills", "Clairvoyant", "Cloak", "Cloudy", "Cobwebs", "Cockroach", "Coffin", "Concoction", "Conjure", "Contort", "Costume", "Coven", "Crawling", "Crazed", "Creaking", "Creepy", "Cringe", "Crone", "Crypt", "Curses", "Dark", "Decapitation", "Decomposed", "Decorations", "Demon", "Devil", "Dim", "Disgusting", "Dismal", "Dracula", "Dragon", "Druids", "Dusk", "Eek", "Eerie", "Effect", "Elf", "Enchant", "Entertaining", "Escapade", "Face paint", "Fairy", "Fear", "Feasting", "Fiend", "Foggy", "Fortuneteller", "Frankenstein", "Fright", "Frighten", "Gasp", "Ghastly", "Ghost", "Ghoul", "Gnarl", "Gnome", "Goblin", "Gory", "Gourd", "Grave", "Gremlin", "Groaning", "Gross", "Grotesque", "Gruesome", "Hag", "Haunt", "Haven", "Hecate", "Hex", "Hobgoblin", "Horrible", "Horrify", "Horseman", "Hover", "Howl", "Hysterical", "Imitate", "Imp", "Infect", "Influence", "Jinx", "Jokes", "Keep", "Labyrinth", "Lantern", "Leprechaun", "Lunar", "Lycanthrope", "Macabre", "Maggot", "Magic", "Magical", "Maniac", "Mask", "Maze", "Mesmerize", "Metamorphosis", "Miasma", "Moan", "Monster", "Moon", "Mummy", "Mysterious", "Mystery", "Netherworld", "Newt", "Nightmarish", "Noisemaker", "Noisy", "Occultism", "Occurrences", "Ogre", "Orange", "Outfit", "Parade", "Pendant", "Pentagram", "Petrify", "Phantasm", "Phantom", "Phenomenon", "Possess", "Potions", "Pranks", "Prowl", "Psychic", "Pumpkin", "Purple", "Quake", "Quest", "Quiver", "Rattle", "Repugnant", "Revolting", "Sack", "Sarcophagus", "Scar", "Scare", "Scared", "Scream", "Screech", "Scythe", "Season", "Seer", "Shiver", "Shriek", "Sibyl", "Sinister", "Skeleton", "Skulduggery", "Skull", "Slink", "Soothsayer", "Sorcerer", "Sorcery", "Soul", "Specter", "Spectral", "Spell", "Spellbound", "Spider", "Spirit", "Spook", "Stuff", "Supernatural", "Superstition", "Supervision", "Suspicious", "Terror", "Terrorize", "Toads", "Tomb", "Tortured", "Treasure", "Trickery", "Troll", "Twilight", "Ugly", "Uneasy", "Unexpected", "Unexplained", "Unmask", "Vampire", "Vein", "Vixen", "Voodoo", "Wail", "Wandering", "Warts", "Waylay", "Weird", "Whisper", "Whistle", "Wicked", "Wild", "Witch", "Witchcraft", "Wizard", "Worrisome", "Yells", "Yelp", "Zap", "Zombie", "Zone", "Zorro"]

var wordToGuess = words[Math.floor(Math.random() * words.length)];

var wins = 0

var hiddenWord = wordToGuess.replace(/ /gi, "_")

var userInput =




console.log(wordToGuess);
console.log(hiddenWord);
