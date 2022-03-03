var links = document.getElementById('links'),
    menue = document.getElementById('menue');

menue.onclick = ()=>{
    links.classList.toggle('open-menue')
}
let windowheight = this.innerHeight;
let windowscrolltop = document.documentElement.scrollTop;



var link = document.querySelectorAll('.links ul li a')
console.log(link)
link.forEach(l =>{
    
    l.addEventListener("click" , (e)=>{
        for(let l of link){
            l.classList.remove('active');
        }
        l.classList.add('active');
    })
    
});















var contact = document.querySelector('.contact');
let socialoffset = contact.offsetTop;
let socialheight = contact.offsetHeight;
var followers = document.querySelectorAll(".social .icon .number");
if(windowscrolltop > (socialoffset + socialheight - windowheight - 200 )){
    let increment;
    for(let f of followers){
        let data_number = +f.getAttribute('data-number');
        increment =Math.floor(data_number / 300);
        let update_function = ()=>{
            let value = +f.innerHTML;

            if(value < data_number){
                f.innerHTML = value + increment;
                setTimeout(update_function, 13);
            }
            else{
                f.innerHTML = data_number;
            }
        }

        update_function();
        
    }
}
else{
    for(let f of followers){
        f.innerHTML = 0;
    }

}
// update_function();