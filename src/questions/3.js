function findHighestSafeFloor(maxFloor = 100) {
  let step = 14; // smallest k such that k*(k+1)/2 >= 100
  let currentFloor = step;
  let previousSafe = 0;
  let egg1Breaks = false;

  // First egg: decreasing step strategy
  while (currentFloor <= maxFloor) {
    if (dropEgg(currentFloor)) {
      // simulates egg break
      egg1Breaks = true;
      break;
    }
    previousSafe = currentFloor;
    step--;
    currentFloor += step;
  }

  if (!egg1Breaks) {
    // never broke with egg1 → top floor is safe
    return maxFloor;
  }

  // Second egg: linear search from last safe floor + 1 up to break floor - 1
  for (let f = previousSafe + 1; f < currentFloor; f++) {
    if (dropEgg(f)) {
      return f - 1; // previous floor was highest safe
    }
  }

  return currentFloor - 1;
}

/**
 * Simulation helper: returns true if egg breaks at this floor.
 * Adjust `highestSafe` for testing.
 */
const highestSafe = 73; // Example: floor 73 is the highest safe
function dropEgg(floor) {
  return floor > highestSafe;
}

export default findHighestSafeFloor;
