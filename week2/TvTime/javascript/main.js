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
//document.querySelector("#stop").addEventListener("click", function(){
  //document.getElementById('container').classList.remove('active');
  //document.querySelector(".js-container").innerHTML = '';
  //console.log(document.getElementById('container').classList);
//});

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
  var imageArray = [];
  //imageUrls.forEach(function(image){
    //var src = image.images.fixed_height.url;
    //container.innerHTML += "<img src=\"" + src + "\">";
  //});
  imageUrls.forEach(function(image){
    var src = image.images.fixed_height.url;
    imageArray.push(src);
  });
  //take values in ImageUrls and iterate over them, displaying them on the dom in a row
  for(i = 0; i <= imageArray.length; i++){
    //if (document.getElementById("container").className = "active"){
    (function(i){
        setTimeout(function(){
            console.log(document.getElementById("container").className);
            //if classname is active
            //clear innerHtml
            container.innerHTML = '';
            //push imageurls[i] to container
            container.innerHTML = "<img src=\"" + imageArray[i] + "\">";
        }, 7000 * i);
    }(i));
//}
}
}







