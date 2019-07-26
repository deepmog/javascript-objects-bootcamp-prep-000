var playlist = { 
  olp: "is anybody home",
  riahanna: "diamonds",
  galantis: "emoji"
 };
  
  function updatePlaylist (playlist, artistName, songTitle) {
    return Object.assign({}, playlist, [artistName])
  }
  