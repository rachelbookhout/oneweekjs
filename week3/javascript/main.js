//search


//query soundcloud api
var SoundCloudAPI = {};

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
    console.log(tracks);
  });
}

SoundCloudAPI.getTrack("Rilo Kiley");
//display the cards

SoundCloudAPI.renderTracks = function(){
  var card = document.createElement('div');
  card.classList.add('card');

  var imageDiv = document.createElement('div');
  imageDiv.classList.add('image');

  var image_img = document.createElement('img');
  image_img.classList.add('image_img');
  image_img.src = "http://www.placekitten.com/290/290";

  imageDiv.appendChild(image_img);

   var content = document.createElement('div');
    content.classList.add('content');

   var header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '<a href="https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance" target="_blank">"Science Vs. Romance"</a>';

    var button = document.createElement('div');
    button.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');

    var icon = document.createElement('i');
    icon.classList.add("icon", "add");

    var buttonText = document.createElement('span');
    buttonText.innerHTML = "Add to Playlist";

   content.appendChild(header);
    button.appendChild(icon);
    button.appendChild(buttonText);
    card.appendChild(imageDiv);
    card.appendChild(content);
    card.appendChild(button);
  var searchResults = document.querySelector(".js-search-results");
  searchResults.appendChild(card);
}

SoundCloudAPI.renderTracks();
//add to playlist and play
