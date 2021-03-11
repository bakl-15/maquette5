let slideIndex, captionText_head, captionText_link, slides, dots
function initGallery(){
    slideIndex = 0
    slides = document.getElementsByClassName("imageHolder")
    slides[slideIndex].style.opacity=1
    captionText_head = document.querySelector(".captionText .head")
    captionText_link = document.querySelector(".captionText .link")
    captionText_head.innerText = slides[slideIndex].querySelector(".captionText .head").innerText
    captionText_link.innerText = slides[slideIndex].querySelector(".captionText .link").innerText
    dots=[]
    let DotsContainer = document.getElementById("DotsContainer")
    for(let k = 0; k < slides.length;k++){
        let dot = document.createElement("span")
        dot.classList.add("dots")
        dot.setAttribute("onClick"," move("+k+")")
        DotsContainer.append(dot)
        dots.push(dot)
    }
    dots[slideIndex].classList.add("active")
} 
initGallery()
function plusSlides(n){
    move(slideIndex + n)
}
function move(n){
let i, current, next
let moveWithAnimClass={
                        forCurrent :"",
                        forNext :""
                     }
if(n > slideIndex){
    if(n > slides.length -1){n=0}
    moveWithAnimClass.forCurrent = "moveLeftCurrent"
    moveWithAnimClass.forNext = "moveLeftNext"
}else if(n < slideIndex){
    if(n < 0){n=slides.length - 1}
    moveWithAnimClass.forCurrent = "moveRightCurrent"
    moveWithAnimClass.forNext = "moveRightNext"
}
if(n !== slideIndex){
   next = slides[n]
   current = slides[slideIndex]
   for(i= 0; i < slides.length; i++){
       slides[i].className = "imageHolder"
       slides[i].style.opacity = 0
       dots[i].classList.remove("active")
   }
   current.classList.add(moveWithAnimClass.forCurrent)
   next.classList.add( moveWithAnimClass.forNext)
   dots[n].classList.add("active")
   slideIndex = n
}
}

function check(){
    alert(checked)
let checkbox = document.getElementsByClassName('cbx')
   
     for(let i = 0; i < checkbox.length;i++){
         if(checkbox[i].checked){
            checkbox[i].classList.add('display')
            this.parentNode.querySelector('div').classList.add('hide')
         }else{
            checkbox[i].classList.add('hide')
            this.parentNode.querySelector('div').classList.add('display')
         }
     }
}
