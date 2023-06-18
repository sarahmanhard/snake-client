const IP = 'localhost';
const PORT = 50541;
// Movement keys
const Move_Up_Key = 'w';
const Move_Left_Key = 'a';
const Move_Down_Key = 's';
const Move_Right_Key = 'd';
const Messages = {
  '1': 'Say: SsSssSs',
  '2': 'Say: I am a snake!',
  '3': 'Say: Just keep slithering, just keep slithering',
  '4': 'Say: 🐍',
  '5': 'Say: Hello!'
};

//Export the configuration
module.exports = {
  IP,
  PORT,
  Move_Up_Key,
  Move_Left_Key,
  Move_Down_Key,
  Move_Right_Key,
  Messages
};