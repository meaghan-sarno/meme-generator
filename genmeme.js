//const formElement = document.querySelector('form');

 //formElement.addEventListener('submit', function(event){
     //event.preventDefault();

     //alert('SUBMITTED')
 //});

 document.addEventListener("DOMContentLoaded", function(){
    var memeForm = document.getElementById("memeForm");
    var listGallery = document.querySelector(".gallery");

memeForm.addEventListener("submit", function(event){
    event.preventDefault();

    //li element 

    var memeLi = document.createElement('li');
    memeLi.classList.add("memeImg");


    //staging area for img
        var topText = document.getElementById("topText");
        var urlInput = document.getElementById("uploaded-img-url").value,
        src = urlInput,
        img = document.createElement("img");
        img.src = src;

    var topTextDiv = document.createElement("div");
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("text-top").value;

    var bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("text-bottom").value;

    //creating remove element
    var removeDiv = document.createElement("div");
    removeDiv.classList.add("red-cross");
    removeDiv.innerText = "X"
    removeDiv.style.color = "red";


listGallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextDiv);
memeLi.appendChild(bottomTextDiv);
memeLi.appendChild(removeDiv);


    memeForm.reset();


});

function remove(event){
    event.target.parentNode.remove();
}

listGallery.addEventListener("click", remove, false);

 });
