//grab the input

document.querySelector(".js-go").addEventListener("click", function(){
  var node = document.getElementsByClassName("js-container")[0];
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
  var input = document.querySelector("input").value;
  searchGiphy(input);
});


document.querySelector(".js-userinput").addEventListener("keyup", function(e){
  var input = document.querySelector("input").value;
  if(e.which === 13){
    var node = document.getElementsByClassName("js-container")[0];
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }
  searchGiphy(input);
  }
});

//do the data stuff with the api

 function searchGiphy(input){
  console.log(input + "in search");
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
