var awiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop:true,
    breakpoints : {
        991: {
            slidesPerView:3
        }
    },
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
        effect: 'fade' ,
        speed: 800
    }
})