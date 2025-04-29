const syllables = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "shi", "su", "se", "so",
    "ta", "chi", "tsu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "fu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya", "yu", "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa", "wo",
    "n"
];

const races = [
    "Human",
    "Elf",
    "Dwarf",
    "Orc",
    "Halfling",
    "Gnome",
    "Tiefling",
    "Dragonborn",
    "Goblin",
    "Fairy",
    "Vampire",
    "Werewolf",
    "Merfolk",
    "Aasimar",
    "Genasi",
    "Lizardfolk",
    "Tabaxi",
    "Kenku",
    "Minotaur",
    "Satyr",
    "Centaur",
    "Triton",
    "Changeling",
    "Dryad",
    "Harpy",
    "Angel",
    "Demon",
    "Elemental",
    "Spirit",
    "Construct"
];

const classes = [
    "Warrior",
    "Paladin",
    "Mage",
    "Cleric",
    "Rogue",
    "Ranger",
    "Bard",
    "Druid",
    "Monk",
    "Sorcerer",
    "Warlock",
    "Necromancer",
    "Assassin",
    "Berserker",
    "Knight",
    "Alchemist",
    "Summoner",
    "Samurai",
    "Ninja",
    "Gunslinger",
    "Beastmaster",
    "Witch",
    "Shaman",
    "Templar",
    "Pirate"
];

const specialAbilities = [
    "Fireball Mastery",
    "Shadow Step",
    "Healing Light",
    "Stormcaller",
    "Beast Tamer",
    "Time Warp",
    "Dragon’s Roar",
    "Frostbite Touch",
    "Divine Shield",
    "Soul Drain",
    "Blade Dance",
    "Celestial Arrow",
    "Earthquake Slam",
    "Illusion Weaving",
    "Blood Pact",
    "Arcane Overflow",
    "Nature’s Embrace",
    "Spectral Wings",
    "Lunar Blessing",
    "Phoenix Rebirth",
    "Gravity Manipulation",
    "Thunderous Charge",
    "Mirror Image",
    "Venomous Strike",
    "Astral Projection",
    "Witchfire Hex",
    "Runic Explosion",
    "Windwalk",
    "Shadowforge Armor",
    "Mystic Chains"
];

function generateName(syllableCount = 2) {
    let name = "";

    for (let i = 0; i < syllableCount; i++) {
        const randomIndex = Math.floor(Math.random() * syllables.length);
        name += syllables[randomIndex];
    }

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function generateRace() {
    const randomIndex = Math.floor(Math.random() * races.length);
    return races[randomIndex];
}

function generateClass() {
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
}

function generateAbility() {
    const randomIndex = Math.floor(Math.random() * specialAbilities.length);
    return specialAbilities[randomIndex];
}

function generateAtributes(totalPoints = 27) {
    const attributes = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
    let distribution = {
        Strength: 0,
        Dexterity: 0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
    };
    let remainingPoints = totalPoints;

    while (remainingPoints > 0) {
        const randomAttr = attributes[Math.floor(Math.random() * attributes.length)];
        distribution[randomAttr]++;
        remainingPoints--;
    }

    return distribution;
}
  