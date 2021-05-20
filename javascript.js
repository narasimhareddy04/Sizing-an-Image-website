let imageElement = document.getElementById("image");

let defaultImageWidth = "200px";

imageElement.style.width = defaultImageWidth;
// console.log(parseInt(defaultImageWidth)+5);
function decrement() {
    if (parseInt(imageElement.style.width) - 5 < 100) {
        document.getElementById("warningMessage").textContent = "Can't visible. Increase the size of the Image.";
    } else {
        document.getElementById("warningMessage").textContent = "";
        imageElement.style.width = (parseInt(imageElement.style.width) - 5) + "px";
        document.getElementById("imageWidth").textContent = imageElement.style.width;

    }
}

function increment() {
    if (parseInt(imageElement.style.width) + 5 > 300) {
        document.getElementById("warningMessage").textContent = "Too big. Decrease the size of the Image.";
    } else {
        document.getElementById("warningMessage").textContent = "";
        imageElement.style.width = (parseInt(imageElement.style.width) + 5) + "px";
        document.getElementById("imageWidth").textContent = imageElement.style.width;

    }
}