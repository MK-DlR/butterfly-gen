// script.js

// butterfly sets
const gardenSunButterflies = [
  "Pink Cattleheart Butterfly (Common)",
  "Postman Butterfly (Common)",
  "Lacewing Butterfly (Uncommon)",
  "Scarlet Mormon Butterfly (Uncommon)",
  "Great Orange-tip Butterfly (Rare)",
  "Palmfly Butterfly (Rare)",
];

const gardenRainButterflies = [
  "Black and White Helicon Butterfly (Common)",
  "Starry Night Cracker Butterfly (Common)",
  "Tailed Jay Butterfly (Uncommon)",
  "Great Eggfly Butterfly (Uncommon)",
  "Atlas Moth (Rare)",
  "Queen Alexandra Birdwing Butterfly (Rare)",
];

const forestSunButterflies = [
  "Rose Butterfly (Common)",
  "Green Birdwing Butterfly (Common)",
  "Clouded Mother-of-Pearl Butterfly (Uncommon)",
  "Blue Pansy Butterfly (Uncommon)",
  "Dero Clearwing Butterfly (Rare)",
  "Forest Mother-of-Pearl Butterfly (Rare)",
];

const forestRainButterflies = [
  "Banded Morpho Butterfly (Common)",
  "Brazilian Owl Butterfly (Common)",
  "Atala Butterfly (Uncommon)",
  "Black-Tipped Diadem Butterfly (Uncommon)",
  "Bat Wing Butterfly (Rare)",
  "Blue Cracker Butterfly (Rare)",
];

const fieldSunButterflies = [
  "Cloudless Sulphur Butterfly (Common)",
  "Juniper Hairstreak Butterfly (Common)",
  "Question Mark Butterfly (Uncommon)",
  "Monarch Butterfly (Uncommon)",
  "Hummingbird Moth (Rare)",
  "Giant Swallowtail Butterfly (Rare)",
];

const fieldRainButterflies = [
  "Bronze Copper Butterfly (Common)",
  "Little Wood-Satyr Butterfly (Common)",
  "Mourning Cloak Butterfly (Uncommon)",
  "Harvester Butterfly (Uncommon)",
  "Tiger Swallowtail Butterfly (Rare)",
  "Red-Spotted Purple Butterfly (Rare)",
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
