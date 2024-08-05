const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-nvabar")
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("lines").classList.toggle("line-1-1")
    document.getElementById("lines-2").classList.toggle("line-2")
    document.getElementById("lines-3").classList.toggle("line-3")


}


$(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 1,
})
