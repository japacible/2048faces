var TILE_THEME = ['dmah', 'baxter', 'sunjayc'];
var LEVELS = ['2', '4', '8', '16', '32', '64', '128', 
  '256', '512', '1024', '2048', 'super'];

var changeTheme = function(value) {
  console.log("change theme: " + value);
  for (var i = 0; i < LEVELS.length; i++) {
    change(value, LEVELS[i]);
  }
}

var change = function(name, level) {
  console.log("change : " + name + " " + level);
  var src = "../img/" + name + "-" + level + ".jpg";
  var current = ".tile.tile-" + level + " .tile-inner";
  $(current).css("background-image", "url(" + src + ")");
}
