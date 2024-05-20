let cardWrapper = document.querySelector(".card__wrapper");
let eltemplate = document.querySelector("#template").content;

function renderArr(arr, list) {
  arr.map((item) => {
    let cloneTemplate = eltemplate.cloneNode(true);
    console.log(item);
    cloneTemplate.querySelector("img").src = item.thumbnail;
    cloneTemplate.querySelector("h3").textContent = item.title;
    cloneTemplate.querySelector("p").textContent = item.price + " $";

    list.appendChild(cloneTemplate);
  });
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => renderArr(data.products, cardWrapper));






  let val = document.getElementById("val")
let content = document.getElementById("content")
let mode = false
function darkMode(){
    mode = !mode

    if(mode == true){
        val.style.animationName = "darkModel"
        val.style.backgroundColor = "black"
        content.style.backgroundColor = "rgb(245, 245, 245)"
        document.body.style.backgroundColor = "black"
        document.body.satyle.color = "white"
    } else {
        val.style.animationName = "darkModel2"
        val.style.backgroundColor = "white"
        content.style.backgroundColor = "black"
        document.body.style.backgroundColor = "white"
        document.body.style.Color = "black"
    }
}

