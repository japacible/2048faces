var TILE_THEME = ['dmah', 'baxter', 'sunjayc'];
var LEVELS = ['2', '4', '8', '16', '32', '64', '128', 
  '256', '512', '1024', '2048', 'super'];

// Changes all of the tiles given a theme
// name: theme of the tiles
var changeTheme = function(name) {
  for (var i = 0; i < LEVELS.length; i++) {
    change(name, LEVELS[i]);
  }
}

// Changes the tiles of a certain number of a theme
// name: theme of the tiles
// level: whichever number the tile is currently at
var change = function(name, level) {
  // console.log("change : " + name + " " + level);
  var src = "http://japacible.github.io/2048faces/img/" 
    + name + "-" + level + ".jpg";
  var current = ".tile.tile-" + level + " .tile-inner";
  $(current).css("background-image", "url(" + src + ")");
}
