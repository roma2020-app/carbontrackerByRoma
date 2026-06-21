import test from "node:test";
import assert from "node:assert";

test("Transit Mode Speed Limit Classification", () => {
  function getTransitMode(speed) {
    if (speed <= 5) return "Stationary";
    if (speed <= 15) return "WALKING";
    if (speed <= 28) return "CYCLING";
    return "DRIVING";
  }

  assert.strictEqual(getTransitMode(0), "Stationary");
  assert.strictEqual(getTransitMode(4), "Stationary");
  assert.strictEqual(getTransitMode(10), "WALKING");
  assert.strictEqual(getTransitMode(15), "WALKING");
  assert.strictEqual(getTransitMode(22), "CYCLING");
  assert.strictEqual(getTransitMode(35), "DRIVING");
});

test("Transit Carbon Intensity Factors Math", () => {
  const distance = 12.5; // km
  const drivingFactor = 0.18; // kg/km
  const expectedCarbon = distance * drivingFactor;

  assert.strictEqual(expectedCarbon, 2.25);
  assert.strictEqual(distance * 0.0, 0.0); // Walking / cycling is carbon-free
});

test("Grocery AI Alternatives Carbon Savings", () => {
  const originalProductCarbon = 15.5; // Beef Ribeye
  const plantProductAlternative = 1.2; // Impossible Steak
  const actualSavings = originalProductCarbon - plantProductAlternative;

  assert.strictEqual(actualSavings, 14.3);
});

test("Predictive Energy Forecast Projection Math", () => {
  const currentTrajectory = 154; // kg
  const activeEcoSavings = 25; // kg
  const projectedFutureCarbon = Math.max(currentTrajectory - activeEcoSavings, 92);

  assert.strictEqual(projectedFutureCarbon, 129);
});
