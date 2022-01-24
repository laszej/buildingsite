const menu = document.querySelector(".menubutton")
const list = document.querySelector(".list")
const gallery = document.getElementById("gallery")
const photos = [`<img src="images/0.png"`, `<img src="images/1.jpg"`, `<img src="images/2.jpg"`,
 `<img src="images/3.png"`, `<img src="images/4.jpg"`, `<img src="images/5.jpg"`, `<img src="images/6.jpg"`]
 

menu.addEventListener("click", ()=>{list.classList.toggle("listStyle")})


let current = 0;

function changeImage(){
    current++
    if (current>photos.length){current=1}
    gallery.innerHTML = `${photos[current-1]} class="image" >`;
    console.log(photos[current-1])
}

setInterval(changeImage, 3000)

