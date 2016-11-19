// search for a giphy by sending the text to the Giphy API when i click on the "search" button
document.querySelector(".js-go").addEventListener("click", function(){
  var container = document.querySelector(".js-container");
  container.innerHTML = '';
  var input = document.querySelector("input").value;
  searchGiphy(input);
});

// search for a giphy by sending the text to the Giphy API when i hit "enter" on the keyboard
document.querySelector(".js-userinput").addEventListener("keyup", function(e){
  var input = document.querySelector("input").value;
  var container = document.querySelector(".js-container");
  if(e.which === 13){
    container.innerHTML = '';
    searchGiphy(input);
  }
});

// search giphy
//adds an active class (this was meant to be used for a stop button to stop playing the gifs. Implemention didn't work)
 function searchGiphy(input){
  document.getElementById('container').classList.add('active');
  var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();
  GiphyAJAXCall.addEventListener('load', function(e){
    var data = e.target.response;
    pushtoDOM(data);
  });
 }


//show me the gifs
function pushtoDOM(input){
  var response =  JSON.parse(input);
  var container = document.querySelector(".js-container");
  var imageUrls = response.data;
  var imageArray = [];
  //get all of the urls from the reponse of the Giphy API in an array
  imageUrls.forEach(function(image){
    var src = image.images.fixed_height.url;
    imageArray.push(src);
  });
  //iterate over the urls, displaying the photos, then waiting to show the next one
  for(i = 0; i <= imageArray.length; i++){
    (function(i){
        setTimeout(function(){
            container.innerHTML = '';
            container.innerHTML = "<img src=\"" + imageArray[i] + "\">";
        }, 7000 * i);
    }(i));
  }
}







