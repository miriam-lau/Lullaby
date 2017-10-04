const AreYouSleeping = [
  ['Are', 'you', 'sleep-', 'ing,', 'are', 'you', 'sleep-', 'ing?'],
  ['Ba-', 'by', 'Rey,', 'Ba-', 'by', 'Rey?'],
  ['Morn-', 'ing', 'bells', 'are', 'ring-', 'ing,'],
  ['Morn-', 'ing', 'bells', 'are', 'ring-', 'ing,'],
  ['Ding', 'ding', 'dong,', 'Ding', 'ding', 'dong.']
];

const BaaBaaBlackSheep = [
  ['Baa,', 'baa,', 'black', 'sheep,'],
  ['Have', 'you', 'an-', 'y', 'wool?'],
  ['Yes', 'sir,', 'yes', 'sir,', 'three', 'bags', 'full!'],
  ['One', 'for', 'the', 'mas-', 'ter,'],
  ['One', 'for', 'the', 'dame,'],
  ['And', 'one', 'for', 'the', 'little', 'boy'],
  ['Who', 'lives', 'down', 'the', 'lane.']
];

const BabyMine = [
  ['Ba-', 'by', 'mine,', 'don\'t', 'you', 'cry.'],
  ['Ba-', 'by', 'mine,', 'dry', 'your', 'eyes.'],
  ['Rest', 'your', 'head', 'close', 'to', 'my', 'heart,'],
  ['Ne-', 'ver', 'to', 'part,', 'ba-', 'by', 'of', 'mine.']
];

const BrahmsLullaby = [
  ['Lul-', 'la-', 'by', 'and', 'good', 'night,'],
  ['With', '-', 'ros-', 'es', 'bed', 'light.', '-'],
  ['With', '-', 'li-', 'lies', 'be', '-', 'spread,'],
  ['Is', '-', 'ba-', '-', 'by\'s', 'wee', 'bed.'],
  ['Lay', 'thee', 'down', 'now', 'and', 'rest,'],
  ['May', 'thy', 'slum-', 'ber', 'be', 'blessed.'],
  ['Lay', 'thee', 'down', 'now', 'and', 'rest,'],
  ['May', 'thy', 'slum-', 'ber', 'be', 'blessed.']
];

const HushLittleBaby = [
  ['Hush,', 'lit-', 'tle', 'ba-', 'by'],
  ['Don\'t', 'say', 'a', 'word,'],
  ['Pa-', 'pa\'s', 'gon-', 'na', 'buy', 'you'],
  ['A', 'mock-', 'ing', 'bird.'],
  ['If', 'that', 'mock-', 'ing', 'bird', 'don\'t', 'sing,'],
  ['Pa-', 'pa\'s', 'gon-', 'na', 'buy', 'you'],
  ['A', 'dia-', 'mond', 'ring.']
];

const ItsyBitsySpider = [
  ['The', 'it-', 'sy', 'bit-', 'sy', 'spi-', 'der'],
  ['Went', 'up', 'the', 'wa-', 'ter', 'spout.'],
  ['Down', 'came', 'the', 'rain'],
  ['And', 'washed', 'the', 'spi-', 'der', 'out.'],
  ['Out', 'came', 'the', 'sun'],
  ['And', 'dried', 'up', 'all', 'the', 'rain.'],
  ['And', 'the', 'it-', 'sy', 'bit-', 'sy', 'spi-', 'der'],
  ['Went', 'up', 'the', 'spout', 'a-', 'gain.']
];

const MaryHadALittleLamb = [
  ['Ma-', 'ry', 'had', 'a', 'lit-', 'tle', 'lamb,'],
  ['Lit-', 'tle', 'lamb,', 'lit-', 'tle', 'lamb.'],
  ['Ma-', 'ry', 'had', 'a', 'lit-', 'tle', 'lamb,'],
  ['Its', 'fleece', 'was', 'white', 'as', 'snow.']
];

const RockAByeBaby = [
  ['Rock', 'a', 'bye', 'ba-', 'by,'],
  ['In', 'the', 'tree', 'top.'],
  ['When', 'the', 'wind', 'blows,'],
  ['The', 'cra-', 'dle', 'will', 'rock.'],
  ['When', 'the', 'bough', 'breaks,'],
  ['The', 'cra-', 'dle', 'will', 'fall.'],
  ['And', 'down', 'will', 'come', 'ba-', 'by,'],
  ['Cra-', 'dle', 'and', 'all.']
];

const RowRowRowYourBoat = [
  ['Row,', 'row,', 'row', 'your', 'boat'],
  ['Gent-', 'ly', 'down', 'the', 'stream.'],
  ['Mer-', 'ri-', 'ly,', 'mer-', 'ri-', 'ly,'],
  ['Mer-', 'ri-', 'ly,', 'mer-', 'ri-', 'ly,'],
  ['Life', 'is', 'but', 'a', 'dream.']
];

const SomewhereOverTheRainbow = [
  ['Some-', 'where', 'o-', 'ver', 'the', 'rain-', 'bow'],
  ['Way', 'up', 'high,'],
  ['There\'s', 'a', 'land', 'that', 'I\'ve', 'heard', 'of'],
  ['Once', 'in', 'a', 'lul-', 'la-', 'by.']
];

const TwinkleTwinkleLittleStar = [
  ['Twin-', 'kle,', 'twin-', 'kle,', 'lit-', 'tle', 'star.'],
  ['How', 'I', 'won-', 'der', 'what', 'you', 'are.'],
  ['Up', 'a-', 'bove', 'the', 'world', 'so', 'high.'],
  ['Like', 'a', 'dia-', 'mond', 'in', 'the', 'sky.'],
  ['Twin-', 'kle,', 'twin-', 'kle,', 'lit-', 'tle', 'star.'],
  ['How', 'I', 'won-', 'der', 'what', 'you', 'are.']
];

const songs = new Map();
songLyrics.set("1", AreYouSleeping);
songLyrics.set("2", BaaBaaBlackSheep);
songLyrics.set("3", BabyMine);
songLyrics.set("4", BrahmsLullaby);
songLyrics.set("5", HushLittleBaby);
songLyrics.set("6", ItsyBitsySpider);
songLyrics.set("7", MaryHadALittleLamb);
songLyrics.set("8", RockAByeBaby);
songLyrics.set("9", RowRowRowYourBoat);
songLyrics.set("10", SomewhereOverTheRainbow);
songLyrics.set("11", TwinkleTwinkleLittleStar);

module.exports = songLyrics;

/* computer keys to piano notes
w = G3
e = A3
r = B3
a = C4
s = D4
d = E4
f = F4

j = G4
k = A4
l = B4
; = C5
u = D5
i = E5
o = F5
*/
