// script.js

// butterfly sets
const gardenSunButterflies = [
  "1x Pink Cattleheart Butterfly (Common) from the Garden!",
  "1x Postman Butterfly (Common) from the Garden!",
  "1x Lacewing Butterfly (Uncommon) from the Garden!",
  "1x Scarlet Mormon Butterfly (Uncommon) from the Garden!",
  "1x Great Orange-tip Butterfly (Rare) from the Garden!",
  "1x Palmfly Butterfly (Rare) from the Garden!",
];

const gardenRainButterflies = [
  "1x Black and White Helicon Butterfly (Common) from the Garden!",
  "1x Starry Night Cracker Butterfly (Common) from the Garden!",
  "1x Tailed Jay Butterfly (Uncommon) from the Garden!",
  "1x Great Eggfly Butterfly (Uncommon) from the Garden!",
  "1x Atlas Moth (Rare) from the Garden!",
  "1x Queen Alexandra Birdwing Butterfly (Rare) from the Garden!",
];

const forestSunButterflies = [
  "1x Rose Butterfly (Common) from the Forest!",
  "1x Green Birdwing Butterfly (Common) from the Forest!",
  "1x Clouded Mother-of-Pearl Butterfly (Uncommon) from the Forest!",
  "1x Blue Pansy Butterfly (Uncommon) from the Forest!",
  "1x Dero Clearwing Butterfly (Rare) from the Forest!",
  "1x Forest Mother-of-Pearl Butterfly (Rare) from the Forest!",
];

const forestRainButterflies = [
  "1x Banded Morpho Butterfly (Common) from the Forest!",
  "1x Brazilian Owl Butterfly (Common) from the Forest!",
  "1x Atala Butterfly (Uncommon) from the Forest!",
  "1x Black-Tipped Diadem Butterfly (Uncommon) from the Forest!",
  "1x Bat Wing Butterfly (Rare) from the Forest!",
  "1x Blue Cracker Butterfly (Rare) from the Forest!",
];

const fieldSunButterflies = [
  "1x Cloudless Sulphur Butterfly (Common) from the Field!",
  "1x Juniper Hairstreak Butterfly (Common) from the Field!",
  "1x Question Mark Butterfly (Uncommon) from the Field!",
  "1x Monarch Butterfly (Uncommon) from the Field!",
  "1x Hummingbird Moth (Rare) from the Field!",
  "1x Giant Swallowtail Butterfly (Rare) from the Field!",
];

const fieldRainButterflies = [
  "Bronze Copper Butterfly (Common) from the Field!",
  "Little Wood-Satyr Butterfly (Common) from the Field!",
  "Mourning Cloak Butterfly (Uncommon) from the Field!",
  "Harvester Butterfly (Uncommon) from the Field!",
  "Tiger Swallowtail Butterfly (Rare) from the Field!",
  "Red-Spotted Purple Butterfly (Rare) from the Field!",
];

// rarities
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
      const logEntry = document.createElement("div");
      logEntry.textContent = `${
        document.getElementById("results").children.length + 1
      }. ${result.item}`;
      document.getElementById("results").appendChild(logEntry);
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
      const logEntry = document.createElement("div");
      logEntry.textContent = `${
        document.getElementById("results").children.length + 1
      }. ${result.item}`;
      document.getElementById("results").appendChild(logEntry);
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
      const logEntry = document.createElement("div");
      logEntry.textContent = `${
        document.getElementById("results").children.length + 1
      }. ${result.item}`;
      document.getElementById("results").appendChild(logEntry);
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
      const logEntry = document.createElement("div");
      logEntry.textContent = `${
        document.getElementById("results").children.length + 1
      }. ${result.item}`;
      document.getElementById("results").appendChild(logEntry);
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
      const logEntry = document.createElement("div");
      logEntry.textContent = `${
        document.getElementById("results").children.length + 1
      }. ${result.item}`;
      document.getElementById("results").appendChild(logEntry);
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
      const logEntry = document.createElement("div");
      logEntry.textContent = `${
        document.getElementById("results").children.length + 1
      }. ${result.item}`;
      document.getElementById("results").appendChild(logEntry);
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
