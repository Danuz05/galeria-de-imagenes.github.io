const fullbox = document.getElementById("full-imgbox")
const fullimg = document.getElementById("full-img")

function closeimg() {
    fullbox.style.display= "none"

}

function openfullimg(reference) {
    fullbox.style.display= "flex"
    fullimg.src =reference
}