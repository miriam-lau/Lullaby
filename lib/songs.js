
const AreYouSleeping = [
  ['a', 's', 'd', 'a', 'a', 's', 'd', 'a'],
  ['d', 'f', 'j', 'd', 'f', 'j'],
  ['j', 'k', 'j', 'f', 'd', 'a', 'j', 'k', 'j', 'f', 'd', 'a'],
  ['a', 'w', 'a', 'a', 'w', 'a'] ];

const BaaBaaBlackSheep = [
  ['a', 'a', 'j', 'j', 'k', 'k', 'k', 'k', 'j'],
  ['f', 'f', 'd', 'd', 's', 's', 'a'],
  ['a', 'a', 'a', 'j', 'j', 'k', 'k', 'k', 'j'],
  ['f', 'f', 'f', 'd', 'd', 'd', 'd', 's', 's', 's', 'a'] ];

const BabyMine = [
  ['d', 'j', 'd', 's', 'a', 's'],
  ['d', 'j', 'd', 's', 'a', 's'],
  ['k', ';', 'k', 'f', 'j', 'k', 's'],
  ['s', 'd', 'f', 'r', 'r', 'a', 's', 'a'] ];

const BrahmsLullaby = [
  ['d', 'd', 'j', 'd', 'd', 'j'],
  ['d', 'j', ';', 'l', 'k', 'k', 'j'],
  ['s', 'd', 'f', 's', 's', 'd', 'f'],
  ['s', 'f', 'l', 'k', 'j', 'l', ';'],
  ['a', 'a', ';', 'k', 'f', 'j', 'd', 'a', 'f', 'j', 'k', 'd', 'j'],
  ['a', 'a', ';', 'k', 'f', 'j', 'd', 'a', 'f', 'j', 'f', 'd', 's', 'a']];

const HushLittleBaby = [
  ['s', 'l', 'l', ';', 'l', 'k', 'k', 'k', 'k'],
  ['s', 's', 'k', 'k', 'k', 'k', 'l', 'k', 'j', 'j'],
  ['s', 'l', 'l', ';', 'l', 'k', 'k'],
  ['s', 's', 'k', 'k', 'k', 'k', 'l', 'k', 'j', 'j'] ];

const RockAByeBaby = [
  ['d', 'j', 'i', 'u', ';', 'd', 'j', ';', 'l'],
  ['f', 'j', 'o', 'i', 'u', 'u', ';', 'k', 'j'],
  ['d', 'j', 'i', 'u', ';', 'd', 'j', ';', 'l', 'k'],
  ['j', ';', 'o', 'i', ';', 'u', 'k', 'l', ';'] ];

const SomewhereOverTheRainbow = [
  ['a', ';', 'l', 'j', 'k', 'l', ';'],
  ['a', 'k', 'j'],
  ['e', 'f', 'd', 'a', 's', 'd'],
  ['f', 's', 'r', 'a', 's', 'd', 'a'] ];

const TwinkleTwinkleLittleStar = [
  ['a', 'a', 'j', 'j', 'k', 'k', 'j'],
  ['f', 'f', 'd', 'd', 's', 's', 'a'],
  ['j', 'j', 'f', 'f', 'd', 'd', 's'],
  ['j', 'j', 'f', 'f', 'd', 'd', 's'],
  ['a', 'a', 'j', 'j', 'k', 'k', 'j'],
  ['f', 'f', 'd', 'd', 's', 's', 'a'] ];

const songs = new Map();
songs.set("1", AreYouSleeping);
songs.set("2", BaaBaaBlackSheep);
songs.set("3", BabyMine);
songs.set("4", BrahmsLullaby);
songs.set("5", HushLittleBaby);
songs.set("6", RockAByeBaby);
songs.set("7", SomewhereOverTheRainbow);
songs.set("8", TwinkleTwinkleLittleStar);

// Source: youtube


module.exports = songs;
