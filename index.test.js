const assert = require("node:assert/strict");
const { isPrime } = require("./index.js");

// Non-primes
assert.strictEqual(isPrime(0),false);
assert.strictEqual(isPrime(1),false);
assert.strictEqual(isPrime(15),false);
assert.strictEqual(isPrime(30),false);
assert.strictEqual(isPrime(222222222),false);
assert.strictEqual(isPrime(58769832),false);
assert.strictEqual(isPrime(100000000),false);
assert.strictEqual(isPrime(625),false);
assert.strictEqual(isPrime(8192),false);
assert.strictEqual(isPrime(16384),false);
assert.strictEqual(isPrime(9765625),false);
assert.strictEqual(isPrime(1000000000000000),false);

// Primes
assert.strictEqual(isPrime(2),true);
assert.strictEqual(isPrime(5),true);
assert.strictEqual(isPrime(17),true);
assert.strictEqual(isPrime(17),true);
assert.strictEqual(isPrime(29363),true);
assert.strictEqual(isPrime(113111),true);
assert.strictEqual(isPrime(194521),true);
assert.strictEqual(isPrime(236143),true);
assert.strictEqual(isPrime(295951),true);
assert.strictEqual(isPrime(305771),true);
assert.strictEqual(isPrime(523487),true);
assert.strictEqual(isPrime(580163),true);
assert.strictEqual(isPrime(594721),true);
assert.strictEqual(isPrime(737981),true);
assert.strictEqual(isPrime(98764321261),true);












