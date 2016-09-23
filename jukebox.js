var count = 0;

var currentSong = "";

function Jukebox(songs) {
  this.songs = [];
  this.addSong = function(song){
  this.songs.push(song);}
  this.changeSong = function() {
    
    var obj = this.songs[count];
 
    for(var prop in obj) {
     
      if(prop == "file") {
     
      document.getElementById("box").src = obj[prop];
      }
      }
        
    for(var prop in obj) {

      if(prop == "artist"){
        
        currentSong += obj[prop]
        
        document.getElementById("name").innerHTML = currentSong;
      }
      }

    for(var prop in obj) {

      if(prop == "soundtrack"){

      currentSong += "-" + obj[prop]
        
        document.getElementById("name").innerHTML = currentSong;

      }
      }

      currentSong = "";

      count++;

      }
      this.changeBack = function() {
    
  var obj = this.songs[count];

    for(var prop in obj) {
      if(prop == "file") {
      document.getElementById("box").src = obj[prop];
      }
      }

    for(var prop in obj) {

      if(prop == "artist"){
        
        currentSong += obj[prop]
        
        document.getElementById("name").innerHTML = currentSong;
      }
       }

    for(var prop in obj) {

      if(prop == "soundtrack"){

      currentSong += "-" + obj[prop]
        
        document.getElementById("name").innerHTML = currentSong;

      }
      }

      currentSong = "";
      
      count--;
      }

        this.shuffle = function() {

    random = (Math.floor((Math.random() * this.songs.length) + 1) -1);

    var obj = this.songs[random];
    
    for(var prop in obj){
        if(prop == "file"){
            document.getElementById("box").src = obj[prop];
        }
    }
      for(var prop in obj) {

      if(prop == "artist"){
        
        currentSong += obj[prop]
        
        document.getElementById("name").innerHTML = currentSong;
      }
       }

    for(var prop in obj) {

      if(prop == "soundtrack"){

      currentSong += "-" + obj[prop]
        
        document.getElementById("name").innerHTML = currentSong;

      }
      }
      currentSong = "";
    };

    
      }
  
  function Song(artist, soundtrack, file) {
  this.artist = artist;
  this.soundtrack = soundtrack;
  this.file = file;
}
  var myPlaylist = new Jukebox();
  
  var song1 = new Song("Matti_Paalanen", "Emotion", "music/Matti_Paalanen_Emotion.mp3");
  var song2 = new Song("JekK", "First", "music/JekK_First.mp3");
  var song3 = new Song("We'll_Light_The_Sky", "Lyonn", "music/We'll_Light_The_Sky_Lyonn.mp3");
  var song4 = new Song("John Newman","Love Me Again", "music/John Newman - Love Me Again.mp3");
  var song5 = new Song("Coldplay","Yellow","music/Coldplay - Yellow.mp3")

  myPlaylist.addSong(song1);
  myPlaylist.addSong(song2);
  myPlaylist.addSong(song3);
  myPlaylist.addSong(song4);
  myPlaylist.addSong(song5);


  document.addEventListener('DOMContentLoaded', function() {
  myPlaylist.changeSong();

  text1();
  butUn();
  
  
  document.querySelector("#erven").addEventListener("click", function(){myPlaylist.changeSong()
  
  })
  
    document.querySelector("#back").addEventListener("click", function(){myPlaylist.changeBack()
  })
    document.querySelector("#shuffle").addEventListener("click",function(){myPlaylist.shuffle()
  })  
    $("#start").click(function(){duration1(), text2();
    } );

  });


  var text1 = function(){ $("h1").animate({
  opacity:1.5,  

},3000);
}
  var text2 = function(){ $("h2").animate({
  opacity:1.5,  

},2000);
}

var butUn = function(){ $("button").fadeIn(3000);
}


var duration1 = function(){
$('#name').animate({opacity:1},3  000,"swing", duration2);}

  
var duration2 = function(){
$('#name').animate({opacity:0},3000,"swing", duration1);}












