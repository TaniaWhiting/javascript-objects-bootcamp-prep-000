var playlist  = {Asia: "Heat of the Moment"};

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}