//grab the input

document.querySelector(".js-go").addEventListener("click", function(){
  var input = document.querySelector("input").value;
  pushtoDOM(input);
});


document.querySelector(".js-userinput").addEventListener("keyup", function(){
  var input = document.querySelector("input").value;
  if(e.which == 13){
    pushtoDOM(input);
  }
});
//do the data stuff with teh api

var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC" ;
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load', function(e){
  var data = e.target.response;
  pushtoDOM(data);
});

//show me the gifs
function pushtoDOM(input){
 var response =  JSON.parse[input];
 var imageUrls = response.data;
 imageUrls.forEach(function(image){
    var src = image.images.fixed_heigh.url;
    var container = document.querySelector(".js-container");
    container.innerHTML += container.innerHTML + "<img src='" + src +"'/>";
 });

}
