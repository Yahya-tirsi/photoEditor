let Grayscal = document.getElementById("Grayscal");
let Contrast = document.getElementById("Contrast");
let Blur = document.getElementById("Blur");
let Brightness = document.getElementById("Brightness");
let Invert = document.getElementById("Invert");
let hueRetate = document.getElementById("hue-retate");
let Opacity = document.getElementById("Opacity");
let Sturate = document.getElementById("Sturate");
let Sepia = document.getElementById("Sepia");

let uploawd = document.getElementById("up");
let reset = document.getElementById("reset");
let download = document.getElementById("download");
let imge = document.getElementById("imge");
let imageClass = document.querySelector(".img");
let downloadParent = document.querySelector(".download");

// download photo
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d")

// when we chose new picture
let newPicture = function(){
    imge.style.filter = "none"
    Grayscal.value = "0"
    Contrast.value = "100"
    Blur.value = "0"
    Brightness.value = "100"
    Invert.value = "0"
    hueRetate.value = "0"
    Sturate.value = "100"
    Sepia.value = "0"
}

window.onload = function(){
    downloadParent.style.display = "none"
    imge.style.display = "none"
}
// when we chose a picture
uploawd.onchange = function(){
    newPicture();
    downloadParent.style.display = "block"
    imge.style.display = "block"
    retate.style.display = "block"
    let file = new FileReader();
    // when we click on upload and we chose a picture the picture we set in th files[0] => files [0] is a list
    file.readAsDataURL(uploawd.files[0]);
    file.onload = function(){
        imge.src = file.result
    }
    // draw photo
    imge.onload = function(){
        canvas.width = imge.width;
        canvas.height = imge.height;
        context.drawImage(imge,0,0,canvas.width,canvas.height)
        imge.style.display = "none"
    }
}

let inp = document.querySelectorAll("input")

inp.forEach(item => {
    item.addEventListener("input", (eo) => {
        canvas.style.display = "block"
        context.filter = ` 
        contrast(${Contrast.value}%)
        saturate(${Sturate.value}%)
        brightness(${Brightness.value}%)
        sepia(${Sepia.value}%)
        grayscale(${Grayscal.value})
        blur(${Blur.value}px)
        hue-rotate(${hueRetate.value}deg)
        invert(${Invert.value})
        `
        context.drawImage(imge,0,0,canvas.width,canvas.height)
    })
});

// when you click on reset
reset.onclick = function(){
    imge.style.display = "block"
    canvas.style.display = "none"
    Grayscal.value = "0"
    Contrast.value = "100"
    Blur.value = "0"
    Brightness.value = "100"
    Invert.value = "0"
    hueRetate.value = "0"
    Sturate.value = "100"
    Sepia.value = "0"
}

// retate image
const retate = document.getElementById("retate");
retate.onclick = function(){
    canvas.classList.toggle("retate")
    canvas.style.display = "block"
}


// download photo
download.onclick = function(){
    download.href = canvas.toDataURL();
}
