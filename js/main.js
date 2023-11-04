//format the side bar
document.querySelectorAll(".sidebar .links .li").forEach((li,ind) => {
    li.addEventListener("click" , () => {
        document.querySelectorAll(".sidebar .links .li").forEach(e => {
            e.classList.remove("active");
        })
    li.classList.add("active");
    document.querySelector(".main-holder").scrollLeft =+ window.innerWidth * ind; 
    } )
});

//formath about us sections
document.querySelectorAll(".about-us .holder .questions i").forEach((i,ind) => {
    i.addEventListener("click",() => {
        document.querySelectorAll(".about-us .holder .questions i").forEach((e) => {
            e.classList.remove("active");
        })
        document.querySelectorAll(".about-us .holder .box .sl").forEach((e) => {
            e.classList.remove("active");
        })
    i.classList.add("active");
    document.querySelectorAll(".about-us .holder .box .sl")[ind].classList.add("active");
    })
});

//format the gallery section
let slider = document.querySelector(".gallery .holder .slider");
let icons = document.querySelectorAll(".gallery .holder i");
let uniteWidth = document.querySelector(".gallery .holder .slider .unit").clientWidth + 10;

icons.forEach((i,ind) => {
    i.addEventListener("click", () => {
        if(ind == 0 ){
            slider.scrollLeft -= uniteWidth;
            console.log(slider.scrollLeft)
        }else if(ind == 1 ){
            slider.scrollLeft += uniteWidth;
            console.log(slider.scrollLeft)

        }
    })
})