
// buzz.defaults.formats = ['wav'];
// buzz.defaults.preload = 'auto';


const notesToKeys = new Map();
  notesToKeys.set("C4", "a");
  notesToKeys.set("D4", "s");
  notesToKeys.set("E4", "d");
  notesToKeys.set("F4", "f");
  notesToKeys.set("G4", "j");
  notesToKeys.set("A4", "k");
  notesToKeys.set("B4", "l");
  notesToKeys.set("C5", ";");
  notesToKeys.set("G3", "w");
  notesToKeys.set("A3", "e");
  notesToKeys.set("B3", "r");
  notesToKeys.set("D5", "i");
  notesToKeys.set("E5", "o");
  notesToKeys.set("F5", "p");

const keyCodes = new Map();
  keyCodes.set("a", 65);
  keyCodes.set("s", 83);
  keyCodes.set("d", 68);
  keyCodes.set("f", 70);
  keyCodes.set("j", 74);
  keyCodes.set("k", 75);
  keyCodes.set("l", 76);
  keyCodes.set(";", 186);
  keyCodes.set("w", 87);
  keyCodes.set("e", 69);
  keyCodes.set("r", 82);
  keyCodes.set("i", 73);
  keyCodes.set("o", 79);
  keyCodes.set("p", 80);

const sounds = new Map();
sounds.set(65, ['./sounds/40_C4.wav']);
sounds.set(83, ['./sounds/42_D4.wav']);
sounds.set(68, ['./sounds/44_E4.wav']);
sounds.set(70, ['./sounds/45_F4.wav']);
sounds.set(74, ['./sounds/47_G4.wav']);
sounds.set(75, ['./sounds/49_A4.wav']);
sounds.set(76, ['./sounds/51_B4.wav']);
sounds.set(186, ['./sounds/52_C5.wav']);
sounds.set(87, ['./sounds/35_G3.wav']);
sounds.set(69, ['./sounds/37_A3.wav']);
sounds.set(82, ['./sounds/39_B3.wav']);
sounds.set(73, ['./sounds/54_D5.wav']);
sounds.set(79, ['./sounds/56_E5.wav']);
sounds.set(80, ['./sounds/57_F5.wav']);

module.exports = sounds;
