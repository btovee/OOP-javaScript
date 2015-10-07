function Movie(title, year, duration) {
  //var song = this;
 Media.call(this, title, duration);
 this.year = year;
}

//this is inheritance in javascript
Movie.prototype = Object.create(Media.prototype);


Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlay){
    htmlString += ' class="current"'
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' ( ';
  htmlString += this.year;
  htmlString += ' ) ';
  htmlString += '<span class="duration">';
  htmlString += this.duration
  htmlString += '</span></li>';
  
  return htmlString;
};