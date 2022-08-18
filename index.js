            //   var swiper = new Swiper(".mySwiper", {
            //           effect: "coverflow",
            //           grabCursor: true,
            //           centeredSlides: true,
            //           slidesPerView: "auto",
            //           coverflowEffect: {
            //             rotate: 50,
            //             stretch: 0,
            //             depth: 1200,
            //             modifier: 1,
            //             slideShadows: false,
            //           },
            //           pagination: {
            //             el: ".swiper-pagination",
            //           },
            //         });

            
            const swiper = new Swiper('.swiper-container', {
                effect: 'coverflow',
                centeredSlides: true,
                slidesPerView: 2,
                loop: true,
                speed: 600,
                
                 autoplay: {
                    delay: 1000,
                 },
                
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 1000,
                    modifier: 1,
                    slideShadows: false,
                },
                
                breakpoints: {
                    1500: {
                        slidesPerView: 2,
                    }
                },
            
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            
    
            });
            