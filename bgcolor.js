let colorinput = document.querySelector("#colorinput")
let radiusinput = document.getElementById("radiusinput")
let image = document.getElementById("image")

function changecolor(colorr){
    if(colorr.key == "Enter"){
        document.body.style.backgroundColor = colorinput.value
    }
    else{
        document.body.style.backgroundColor = "white"        
    }
}

function changeradius(radiuss){
    if(radiuss.key == "Enter"){
        image.style.borderRadius =`${radiusinput.value}`
    }
    else{
        image.style.borderRadius = "none"
    }
}