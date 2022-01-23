const menu = document.querySelector(".menubutton")
const leftHeader = document.getElementById("header-left")
const list = document.querySelector(".list")
const gallery = document.getElementById("gallery")
const photos = [`<img src="images/1.jpg"`, `<img src="images/2.png"`, `<img src="images/3.jpg"`,
 `<img src="images/4.jpg"`, `<img src="images/5.png"`, `<img src="images/6.jpg"`, `<img src="images/7.jpg"`]

 const alusy = document.getElementById("alusy")
 const doczesne = document.getElementById("doczesne")
 const pośmiertne = document.getElementById("pośmiertne")
 const content = document.getElementById("content")
 const powrót = document.getElementById("powrót")



menu.addEventListener("click", ()=>{list.classList.toggle("listStyle")} )

let current = 0;

function changeImage(){
    current++
    if (current>photos.length){current=1}
    gallery.innerHTML = `${photos[current-1]} class="image">`;
    photos[current-1]
}
setInterval(changeImage, 3000)

alusy.addEventListener("click", ()=>{content.innerHTML = `<strong>Od alimentów</strong><br><br>Vestibulum eget lacus sed justo cursus scelerisque a id leo. Sed tempor, lorem sed facilisis interdum, neque orci fringilla urna, a tempor odio neque sit amet magna. Donec tristique dictum interdum. Mauris tincidunt mollis vehicula. Sed id risus vitae sapien auctor volutpat vel nec quam. Integer convallis maximus molestie. Nullam feugiat fringilla scelerisque. Vivamus in nisi magna. Nam ut condimentum turpis, non gravida risus. Pellentesque semper convallis lacus non malesuada. Nam accumsan pretium nisl, ut egestas lectus. Etiam semper ac ante at molestie. Integer sed mi varius, aliquet neque eget, aliquet leo. Fusce tincidunt nisl ac dictum egestas. Duis dictum ligula sem, quis sagittis quam malesuada cursus.<br><br>

    Aliquam blandit nisl et nulla gravida mattis. Suspendisse tempus turpis diam, id consequat augue dictum ut. Maecenas in leo quis leo viverra tempor. Fusce sagittis euismod tincidunt. Nunc mattis volutpat lacus. Pellentesque varius vehicula aliquet. Mauris luctus vel purus eget interdum. Suspendisse tincidunt, sapien sed interdum imperdiet, ex ipsum posuere ligula, eget dictum tortor ipsum et quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse congue libero eu sapien accumsan scelerisque.`})

doczesne.addEventListener("click", ()=>{content.innerHTML =`<strong>Doczesne</strong><br><br>Vestibulum eget lacus sed justo cursus scelerisque a id leo. Sed tempor, lorem sed facilisis interdum, neque orci fringilla urna, a tempor odio neque sit amet magna. Donec tristique dictum interdum. Mauris tincidunt mollis vehicula. Sed id risus vitae sapien auctor volutpat vel nec quam. Integer convallis maximus molestie. Nullam feugiat fringilla scelerisque. Vivamus in nisi magna. Nam ut condimentum turpis, non gravida risus. Pellentesque semper convallis lacus non malesuada. Nam accumsan pretium nisl, ut egestas lectus. Etiam semper ac ante at molestie. Integer sed mi varius, aliquet neque eget, aliquet leo. Fusce tincidunt nisl ac dictum egestas. Duis dictum ligula sem, quis sagittis quam malesuada cursus.<br><br>

    Aliquam blandit nisl et nulla gravida mattis. Suspendisse tempus turpis diam, id consequat augue dictum ut. Maecenas in leo quis leo viverra tempor. Fusce sagittis euismod tincidunt. Nunc mattis volutpat lacus. Pellentesque varius vehicula aliquet. Mauris luctus vel purus eget interdum. Suspendisse tincidunt, sapien sed interdum imperdiet, ex ipsum posuere ligula, eget dictum tortor ipsum et quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse congue libero eu sapien accumsan scelerisque.`})

pośmiertne.addEventListener("click", ()=>{content.innerHTML = `<strong>Pośmiertne</strong><br><br>Vestibulum eget lacus sed justo cursus scelerisque a id leo. Sed tempor, lorem sed facilisis interdum, neque orci fringilla urna, a tempor odio neque sit amet magna. Donec tristique dictum interdum. Mauris tincidunt mollis vehicula. Sed id risus vitae sapien auctor volutpat vel nec quam. Integer convallis maximus molestie. Nullam feugiat fringilla scelerisque. Vivamus in nisi magna. Nam ut condimentum turpis, non gravida risus. Pellentesque semper convallis lacus non malesuada. Nam accumsan pretium nisl, ut egestas lectus. Etiam semper ac ante at molestie. Integer sed mi varius, aliquet neque eget, aliquet leo. Fusce tincidunt nisl ac dictum egestas. Duis dictum ligula sem, quis sagittis quam malesuada cursus.<br><br>

    Aliquam blandit nisl et nulla gravida mattis. Suspendisse tempus turpis diam, id consequat augue dictum ut. Maecenas in leo quis leo viverra tempor. Fusce sagittis euismod tincidunt. Nunc mattis volutpat lacus. Pellentesque varius vehicula aliquet. Mauris luctus vel purus eget interdum. Suspendisse tincidunt, sapien sed interdum imperdiet, ex ipsum posuere ligula, eget dictum tortor ipsum et quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse congue libero eu sapien accumsan scelerisque.`})

powrót.addEventListener("click", ()=>{content.innerHTML = `Vestibulum eget lacus sed justo cursus scelerisque a id leo. Sed tempor, lorem sed facilisis interdum, neque orci fringilla urna, a tempor odio neque sit amet magna. Donec tristique dictum interdum. Mauris tincidunt mollis vehicula. Sed id risus vitae sapien auctor volutpat vel nec quam. Integer convallis maximus molestie. Nullam feugiat fringilla scelerisque. Vivamus in nisi magna. Nam ut condimentum turpis, non gravida risus. Pellentesque semper convallis lacus non malesuada. Nam accumsan pretium nisl, ut egestas lectus. Etiam semper ac ante at molestie. Integer sed mi varius, aliquet neque eget, aliquet leo. Fusce tincidunt nisl ac dictum egestas. Duis dictum ligula sem, quis sagittis quam malesuada cursus.<br><br>

    Aliquam blandit nisl et nulla gravida mattis. Suspendisse tempus turpis diam, id consequat augue dictum ut. Maecenas in leo quis leo viverra tempor. Fusce sagittis euismod tincidunt. Nunc mattis volutpat lacus. Pellentesque varius vehicula aliquet. Mauris luctus vel purus eget interdum. Suspendisse tincidunt, sapien sed interdum imperdiet, ex ipsum posuere ligula, eget dictum tortor ipsum et quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse congue libero eu sapien accumsan scelerisque.`
console.log("chuj")})
