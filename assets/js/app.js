const navbar = document.querySelector("[data-navbar]")
const navbarLinks = document.querySelectorAll("[data-nav-link]")
const navToggler = document.querySelector("[data-nav-toggler]")
const gridList = document.querySelector("[grid-list]")
const backTopBtn = document.querySelector("[data-back-top-btn]")
const header = document.querySelector("[data-header]")

//Services
const services = [
    {
        name: "Manejo de redes sociales",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veniam ipsam perspiciatis fuga laboriosam error cumque consequatur optio qui earum cum voluptas in sunt dolor voluptatem explicabo, aut maxime sequi?",
        color: "#13c4a1"
    },
    {
        name: "Manejo de redes sociales",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veniam ipsam perspiciatis fuga laboriosam error cumque consequatur optio qui earum cum voluptas in sunt dolor voluptatem explicabo, aut maxime sequi?",
        color: "#13c4a1"
    },
    {
        name: "Manejo de redes sociales",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veniam ipsam perspiciatis fuga laboriosam error cumque consequatur optio qui earum cum voluptas in sunt dolor voluptatem explicabo, aut maxime sequi?",
        color: "#13c4a1"
    },
    {
        name: "Manejo de redes sociales",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At veniam ipsam perspiciatis fuga laboriosam error cumque consequatur optio qui earum cum voluptas in sunt dolor voluptatem explicabo, aut maxime sequi?",
        color: "#13c4a1"
    }
]



navToggler.addEventListener("click", () => {
    navbar.classList.toggle("active")
    navToggler.classList.toggle("active")
})

services.forEach(service => {
    const li = document.createElement("li")
    li.innerHTML = ` <div class="service-card">
    <div class="card-icon" style="background-color: ${service.color}; ">
        <ion-icon name="chatbox"></ion-icon>
    </div>

    <h3 class="h3">
        <a href="#" class="card-title">${service.name}</a>
    </h3>

    <p class="card-text">${service.text}</p>

</div>`
    gridList.appendChild(li)
});


/*BACK TOP */
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        header.classList.add("active")
        backTopBtn.classList.add("active")
    }else{
        header.classList.remove("active")
        backTopBtn.classList.remove("active")
    }
})
