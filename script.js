const levels = {
    1: 0,
    2: 100,
    3: 200,
    4: 400,
    5: 800,
    6: 1500,
    7: 2600,
    8: 4200,
    9: 6400,
    10: 9300,
    11: 13000,
    12: 17600,
    13: 23200,
    14: 29900,
    15: 37800,
    16: 47000,
    17: 57600,
    18: 69700,
    19: 83400,
    20: 98800,
    21: 116000,
    22: 135100,
    23: 156200,
    24: 179400,
    25: 204800,
    26: 232500,
    27: 262600,
    28: 295200,
    29: 330400,
    30: 368300,
    31: 409000,
    32: 452600,
    33: 499200,
    34: 548900,
    35: 601800,
    36: 658000,
    37: 717600,
    38: 780700,
    39: 847400,
    40: 917800,
    41: 992000,
    42: 1070100,
    43: 1152200,
    44: 1238400,
    45: 1328800,
    46: 1423500,
    47: 1522600,
    48: 1626200,
    49: 1734400,
    50: 1847300,
    51: 1965000,
    52: 2087600,
    53: 2215200,
    54: 2347900,
    55: 2485800,
    56: 2629000,
    57: 2777600,
    58: 2931700,
    59: 3091400,
    60: 3256800,
    61: 3428000,
    62: 3605100,
    63: 3788200,
    64: 3977400,
    65: 4172800,
    66: 4374500,
    67: 4582600,
    68: 4797200,
    69: 5018400,
    70: 5246300
}
const potions = {
    bronze: { small: 3000, medium: 30000, large: 300000 },
    silver: { small: 2000, medium: 20000, large: 200000 },
    gold: { small: 1000, medium: 10000, large: 100000 },
    diamond: { small: 500, medium: 5000, large: 50000 },
}
function calcPotions(actualLevel, desiredLevel, tier) {
    const xpSmall = Math.ceil((levels[desiredLevel] - levels[actualLevel]) / potions[tier].small)

    const xpMedium = Math.round((levels[desiredLevel] - levels[actualLevel]) / potions[tier].medium)
    const modXpMedium = Math.round((levels[desiredLevel] - levels[actualLevel]) % potions[tier].medium)
    const restOfMedium = Math.ceil(modXpMedium / potions[tier].small)


    const xpLarge = Math.floor((levels[desiredLevel] - levels[actualLevel]) / potions[tier].large)
    const modXpLarge = Math.round((levels[desiredLevel] - levels[actualLevel]) % potions[tier].large)
    const restOfLarge = Math.floor(modXpLarge / potions[tier].medium)
    const modOfRemaining = modXpLarge % potions[tier].medium
    const restOfRemaining = Math.ceil(modOfRemaining / potions[tier].small)

    const values = {
        xpSmall,
        xpMedium,
        xpLarge,
        restOfMedium,
        restOfLarge,
        restOfRemaining,
    }
    return values
}

function handleCalc() {
    const tier = document.getElementById("tier").value
    const actualLevel = document.getElementById("actualLevel").value
    const desiredLevel = document.getElementById("desiredLevel").value
    const values = calcPotions(actualLevel, desiredLevel, tier)
    const outputSmall = document.getElementById("xpNeededSmall")
    const outputMedium = document.getElementById("xpNeededMedium")
    const outputLarge = document.getElementById("xpNeededLarge")
    outputSmall.textContent = `${values.xpSmall} pocões pequenas`
    outputMedium.textContent = `${values.xpMedium} poções médias e ${values.restOfMedium} poções pequenas`
    outputLarge.textContent = `${values.xpLarge} poções grandes , ${values.restOfLarge} poções médias e ${values.restOfRemaining} pocões pequenas`
    const audio = document.getElementById("sfx")
    audio.play()
    document.getElementById("ruffy").classList.remove("hidden");

}