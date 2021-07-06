let state = 0;
let mobileNav = document.getElementById("mobile-nav-container")

function navControl(){
 if (state === 0){ 
     mobileNav.style.display= "block"
    state = 1
    console.log(state)
    return
 }

 if (state === 1){ 
    mobileNav.style.display= "none"
    state = 0
    console.log(state)
    return
}
}

function closeNav(){
    mobileNav.style.display= "none"
    state = 0
    console.log(state)
    return
}
