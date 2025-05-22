// script.js

/* testing function 10 times:
for (let i = 0; i < 10; i++) {
  const result = gardenSun(gardenSunButterflies, weights);
  console.log(`Pick ${i + 1}:`, result);
}
*/

// buttons onclick tied to specific functions

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
// sun
function gardenSun() {
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
      const result = {
        item: gardenSunButterflies[itemIndex],
        index: itemIndex,
      };
      document.getElementById("results").innerHTML = result.item;
      console.log(result);
      return result;
    }
  }

  const fallback = {
    item: gardenSunButterflies[gardenSunButterflies.length - 1],
    index: gardenSunButterflies.length - 1,
  };
  document.getElementById("results").innerHTML = fallback.item;
  return fallback;
}

// rain
function gardenRain() {
  if (gardenRainButterflies.length !== weights.length) {
    throw new Error(
      "gardenRainButterflies and weights must be of the same size"
    );
  }

  if (!gardenRainButterflies.length) {
    throw new Error("gardenRainButterflies must not be empty");
  }

  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  for (
    let itemIndex = 0;
    itemIndex < gardenRainButterflies.length;
    itemIndex += 1
  ) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      const result = {
        item: gardenRainButterflies[itemIndex],
        index: itemIndex,
      };
      document.getElementById("results").innerHTML = result.item;
      console.log(result);
      return result;
    }
  }

  const fallback = {
    item: gardenRainButterflies[gardenRainButterflies.length - 1],
    index: gardenRainButterflies.length - 1,
  };
  document.getElementById("results").innerHTML = fallback.item;
  return fallback;
}

// forest location
// sun
function forestSun() {
  if (forestSunButterflies.length !== weights.length) {
    throw new Error(
      "forestSunButterflies and weights must be of the same size"
    );
  }

  if (!forestSunButterflies.length) {
    throw new Error("forestSunButterflies must not be empty");
  }

  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  for (
    let itemIndex = 0;
    itemIndex < forestSunButterflies.length;
    itemIndex += 1
  ) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      const result = {
        item: forestSunButterflies[itemIndex],
        index: itemIndex,
      };
      document.getElementById("results").innerHTML = result.item;
      console.log(result);
      return result;
    }
  }

  const fallback = {
    item: forestSunButterflies[forestSunButterflies.length - 1],
    index: forestSunButterflies.length - 1,
  };
  document.getElementById("results").innerHTML = fallback.item;
  return fallback;
}

// rain
function forestRain() {
  if (forestRainButterflies.length !== weights.length) {
    throw new Error(
      "forestRainButterflies and weights must be of the same size"
    );
  }

  if (!forestRainButterflies.length) {
    throw new Error("forestRainButterflies must not be empty");
  }

  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  for (
    let itemIndex = 0;
    itemIndex < forestRainButterflies.length;
    itemIndex += 1
  ) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      const result = {
        item: forestRainButterflies[itemIndex],
        index: itemIndex,
      };
      document.getElementById("results").innerHTML = result.item;
      console.log(result);
      return result;
    }
  }

  const fallback = {
    item: forestRainButterflies[forestRainButterflies.length - 1],
    index: forestRainButterflies.length - 1,
  };
  document.getElementById("results").innerHTML = fallback.item;
  return fallback;
}

// field location
//sun
function fieldSun() {
  if (fieldSunButterflies.length !== weights.length) {
    throw new Error("fieldSunButterflies and weights must be of the same size");
  }

  if (!fieldSunButterflies.length) {
    throw new Error("fieldSunButterflies must not be empty");
  }

  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  for (
    let itemIndex = 0;
    itemIndex < fieldSunButterflies.length;
    itemIndex += 1
  ) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      const result = {
        item: fieldSunButterflies[itemIndex],
        index: itemIndex,
      };
      document.getElementById("results").innerHTML = result.item;
      console.log(result);
      return result;
    }
  }

  const fallback = {
    item: fieldSunButterflies[fieldSunButterflies.length - 1],
    index: fieldSunButterflies.length - 1,
  };
  document.getElementById("results").innerHTML = fallback.item;
  return fallback;
}

// rain
function fieldRain() {
  if (fieldRainButterflies.length !== weights.length) {
    throw new Error(
      "fieldRainButterflies and weights must be of the same size"
    );
  }

  if (!fieldRainButterflies.length) {
    throw new Error("fieldRainButterflies must not be empty");
  }

  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  for (
    let itemIndex = 0;
    itemIndex < fieldRainButterflies.length;
    itemIndex += 1
  ) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      const result = {
        item: fieldRainButterflies[itemIndex],
        index: itemIndex,
      };
      document.getElementById("results").innerHTML = result.item;
      console.log(result);
      return result;
    }
  }

  const fallback = {
    item: fieldRainButterflies[fieldRainButterflies.length - 1],
    index: fieldRainButterflies.length - 1,
  };
  document.getElementById("results").innerHTML = fallback.item;
  return fallback;
}
