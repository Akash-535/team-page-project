const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-nvabar")
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("lines").classList.toggle("line-1-1")
    document.getElementById("lines-2").classList.toggle("line-2")
    document.getElementById("lines-3").classList.toggle("line-3")


}


$(".sliderbox").slick({
    dots: false,
    infinite: true,
    speed: 3000,
 
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
            }
        }
    ]
});
          