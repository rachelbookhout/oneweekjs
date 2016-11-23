var UI = {};
var SoundCloudAPI = {};


UI.SubmitClick = function(){
  document.querySelector('.js-submit').addEventListener("click", function(){
    var input = document.querySelector(".input-search").value;
    SoundCloudAPI.getTrack(input);

  })
}
UI.EnterPress = function(){
  document.querySelector('.input-search').addEventListener("keyup", function(e){
    var input = document.querySelector(".input-search").value;
    if (e.which == 13){
          SoundCloudAPI.getTrack(input);
    }
  })
}

UI.ClickClear = function(){

  document.querySelector('.clear').addEventListener("click", function(){
      var sideBar = document.querySelector('.js-playlist');
      while (sideBar.hasChildNodes()) {
        sideBar.removeChild(sideBar.firstChild);
      }
      localStorage.removeItem("key");

  // go through the dom clean it
  })
}

UI.SubmitClick();
UI.EnterPress();
UI.ClickClear();

SoundCloudAPI.init = function(){
  SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
  });
}

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue){
  SC.get('/tracks', {
    q: inputValue
    }).then(function(tracks) {
    SoundCloudAPI.renderTracks(tracks);
  });
}


SoundCloudAPI.renderTracks = function(tracks){

  var searchResults = document.querySelector(".js-search-results");
  searchResults.innerHTML = '';
  tracks.forEach(function(track){

    var card = document.createElement('div');
    card.classList.add('card');

    var imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    var image_img = document.createElement('img');
    image_img.classList.add('image_img');
    image_img.src = track.artwork_url || 'http://lorempixel.com/400/200/';

    imageDiv.appendChild(image_img);

    var content = document.createElement('div');
    content.classList.add('content');

    var header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '<a href=' + track.permalink_url + 'target="_blank">' + track.title +'</a>';

    var button = document.createElement('div');
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

    var icon = document.createElement('i');
    icon.classList.add("icon", "add");

    var buttonText = document.createElement('span');
    buttonText.innerHTML = "Add to Playlist";

    content.appendChild(header);
    button.appendChild(icon);
    button.appendChild(buttonText);
    button.addEventListener('click', function(){
        SoundCloudAPI.getEmbed(track.permalink_url);
    })
    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(button);

    searchResults.appendChild(card);
  });

}


SoundCloudAPI.getEmbed = function(trackUrl){
  SC.oEmbed(trackUrl, {
  auto_play: true
}).then(function(embed){
    var sideBar = document.querySelector('.js-playlist');
    var box = document.createElement('div');
    box.innerHTML = embed.html;
    sideBar.insertBefore(box, sideBar.firstChild);
    localStorage.setItem("key", sideBar.innerHTML);
  });
}

var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");



