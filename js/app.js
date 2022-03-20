
let links_list = document.getElementById("links-list"),
    link_items = ["home", "about", "catigories", "testimonials", "contact"];

for (let li of link_items) {
  // console.log(li/)
    let link_item = document.createElement("li");
    link_item.innerHTML = li;
    link_item.id = li;
    links_list.appendChild(link_item);
}

var links = document.getElementById("links"),
    menue = document.getElementById("menue");

menue.onclick = () => {
    links.classList.toggle("open-menue");
};
let windowheight = this.innerHeight;
let windowscrolltop = document.documentElement.scrollTop;

let link = document.querySelectorAll(".links ul li");

let sections = [];
link.forEach((l) => {

    let section = document.querySelector(`.${l.id}`);
    sections.push(section)
    console.log(sections)
    // for(let sec of sections){
    //     let top_distance = sec.getBoundingClientRect();
    //     if(window.scrollY === top_distance.y){
    //         for (let l of link) {
    //             l.classList.remove("active");
    //         }
    //         l.classList.add("active");
    //     }
    // }
});

window.onscroll = ()=>{
    let top_distance_about = document.querySelector('.about').getBoundingClientRect(),
    top_distance_home = document.querySelector('.home').getBoundingClientRect(),
    top_distance_catigories = document.querySelector('.catigories').getBoundingClientRect(),
    top_distance_testimonials = document.querySelector('.testimonials').getBoundingClientRect(),
    top_distance_contact = document.querySelector('.contact-us').getBoundingClientRect();
    console.log(top_distance_home.y)
    console.log(top_distance_about.y)
    console.log(top_distance_catigories.y)
    console.log(top_distance_testimonials.y)
    console.log(top_distance_contact.y)
    // while(true){
        if( top_distance_home.y >= 0){
            for (let l of link) {
                l.classList.remove("active");
            }
                document.getElementById('home').classList.add("active");
        }
        else if ( top_distance_about.y >= 0){
            for (let l of link) {
                l.classList.remove("active");
            }
                document.getElementById('about').classList.add("active");
        }
        else if( top_distance_catigories.y >= 0){
            for (let l of link) {
                l.classList.remove("active");
            }
                document.getElementById('catigories').classList.add("active");
        }
        else if( top_distance_testimonials.y >= 0){
            for (let l of link) {
                l.classList.remove("active");
            }
                document.getElementById('testimonials').classList.add("active");
        }
        else if( top_distance_contact.y >= 0){
            for (let l of link) {
                l.classList.remove("active");
            }
                document.getElementById('contact').classList.add("active");
        }
    }


// }

link.forEach((l) => {
    l.addEventListener("click", (e) => {
    let section = document.querySelector(`.${l.id}`);
    let top_distance = section.getBoundingClientRect()
    console.log(top_distance)

    console.log(section);
    for (let l of link) {
        l.classList.remove("active");
    }
    l.classList.add("active");
    section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
        });
    
    });
});

var contact = document.querySelector(".contact");
let socialoffset = contact.offsetTop;
let socialheight = contact.offsetHeight;
var followers = document.querySelectorAll(".social .icon .number");
if (windowscrolltop > socialoffset + socialheight - windowheight - 200) {
    let increment;
    for (let f of followers) {
        let data_number = +f.getAttribute("data-number");
        increment = Math.floor(data_number / 300);
        let update_function = () => {
        let value = +f.innerHTML;

        if (value < data_number) {
            f.innerHTML = value + increment;
            setTimeout(update_function, 13);
        } else {
            f.innerHTML = data_number;
        }
        };

        update_function();
    }
} else {
    for (let f of followers) {
        f.innerHTML = 0;
    }
}
// update_function();
