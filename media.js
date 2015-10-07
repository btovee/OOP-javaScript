function Media(title, artist, duration) {
 this.title = title;
 this.artist = artist;
 this.duration = duration;
 this.isPlay = false;
}

Media.prototype.play = function() {
  this.isPlay = true;
};

Media.prototype.stop = function() {
  this.isPlay = false;
};