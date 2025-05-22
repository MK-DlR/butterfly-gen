// script.js

// use if/else statement instead to select locations and weather

const gardenSunButterflies = [
  "Pink Cattleheart",
  "Postman",
  "Lacewing",
  "Scarlet Mormon",
  "Great Orange-tip",
  "Palmfly",
];

const gardenRainButterflies = [
  "Black and White Helicon",
  "Starry Night Cracker",
  "Tailed Jay",
  "Great Eggfly",
  "Atlas Moth",
  "Queen Alexandra Birdwing",
];

const forestSunButterflies = [
  "Rose",
  "Green Birdwing",
  "Clouded Mother-of-Pearl",
  "Blue Pansy",
  "Dero Clearwing",
  "Forest Mother-of-Pearl",
];

const forestRainButterflies = [
  "Banded Morpho",
  "Brazilian Owl",
  "Atala",
  "Black-Tipped Diadem",
  "Bat Wing",
  "Blue Cracker",
];

const fieldSunButterflies = [
  "Cloudless Sulphur",
  "Juniper Hairstreak",
  "Question Mark",
  "Monarch",
  "Hummingbird Moth",
  "Giant Swallowtail",
];

const fieldRainButterflies = [
  "Bronze Copper",
  "Little Wood-Satyr",
  "Mourning Cloak",
  "Harvester",
  "Tiger Swallowtail",
  "Red-Spotted Purple",
];

const weights = [30, 30, 13, 13, 7, 7];

// garden location
function gardenSun(gardenSunButterflies, weights) {
  if (gardenSunButterflies.length !== weights.length) {
    throw new Error(
      "gardenSunButterflies and weights must be of the same size"
    );
  }

  if (!gardenSunButterflies.length) {
    throw new Error("gardenSunButterflies must not be empty");
  }

  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  for (
    let itemIndex = 0;
    itemIndex < gardenSunButterflies.length;
    itemIndex += 1
  ) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      return {
        item: gardenSunButterflies[itemIndex],
        index: itemIndex,
      };
    }
  }

  // fallback return
  return {
    item: gardenSunButterflies[gardenSunButterflies.length - 1],
    index: gardenSunButterflies.length - 1,
  };
}

/* testing function 10 times:
for (let i = 0; i < 10; i++) {
  const result = gardenSun(gardenSunButterflies, weights);
  console.log(`Pick ${i + 1}:`, result);
}
*/

function gardenRain() {
  //code
}

// forest location
function forestSun() {
  //code
}

function forestRain() {
  //code
}

// field location
function fieldSun() {
  //code
}

function fieldRain() {
  //code
}
