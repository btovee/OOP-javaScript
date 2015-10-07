var playlist = new Playlist();

var hereComesTheSun = new Song("Here comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the waves", "3:43");


var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");



playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(manOfSteel);



var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);


var playButton = document.getElementById("play");
console.log(playButton);

playButton.onclick = function(){
  playlist.play();
  
  playlist.renderInElement(playlistElement);
  console.log("function");
}

var nextButton = document.getElementById("next");

nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop"); 

stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);
}