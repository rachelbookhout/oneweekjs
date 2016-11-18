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

//
//function ChangePhoto(image){
  //console.log(image);
  //container.innerHTML = '';
  //console.log("I cleared the inner");
  //var src = image.images.fixed_height.url;
  //container.innerHTML = "<img src=\"" + src + "\">"
  //console.log("I added an image");
//}


//show me the gifs
function pushtoDOM(input){
  var response =  JSON.parse(input);
  var container = document.querySelector(".js-container");
  var data = response.data;
  var imageUrls = [];
  var i = 0;
  data.forEach(function(image){
   imageUrls[i] = image.images.fixed_height.url;
   i++;
  });
  setInterval(changeImage(0, imageUrls),10000);

  }

  function changeImage(index,array){
    container.innerHTML = "<img src=\"" + array[index] + "\">";
    index++;
  }



  //while (document.getElementById("container").classList.contains('active')){
  //if (document.getElementById("container").classList.contains('active')){
    // imageUrls.forEach(function(image){
      //  console.log(container.innerHTML);
        //container.innerHTML = '';
        //var src = image.images.fixed_height.url;
        //setTimeout(function(){
          //container.innerHTML = "<img src=\"" + src + "\">"
        //},100000);
        //console.log("I timed out");
   // });
  //}
  //setTimeout(AddPhoto(image,10000));


  //}



