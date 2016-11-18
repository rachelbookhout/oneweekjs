document.querySelector(".js-go").addEventListener("click", function(){
  var container = document.querySelector(".js-container");
  container.innerHTML = '';
  var input = document.querySelector("input").value;
  searchGiphy(input);
});


document.querySelector(".js-userinput").addEventListener("keyup", function(e){
  var input = document.querySelector("input").value;
  var container = document.querySelector(".js-container");
  if(e.which === 13){
    container.innerHTML = '';
    searchGiphy(input);
  }
});

//add a function when hitting the stop button
document.querySelector("#stop").addEventListener("click", function(){
  document.getElementById('container').classList.remove('active');
  document.querySelector(".js-container").innerHTML = '';

});

//do the data stuff with the api

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
  imageUrls.forEach(function(image){
    var src = image.images.fixed_height.url;
    container.innerHTML += "<img src=\"" + src + "\">";
  });

}







