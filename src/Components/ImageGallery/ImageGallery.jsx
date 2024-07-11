
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./ImageSlider.css"
import hetimage1 from "./Images/HET Image.jpg"
import hetimage2 from "./Images/Het.jpg"
import hetimage3 from "./Images/Het1.png"
import hetimage4 from "./Images/het2.png"
import hetimage5 from "./Images/het3.png"
import hetimage6 from "./Images/het4.png"
import hetimage7 from "./Images/het5.png"
import hetimage8 from "./Images/het7.png"
import hetimage9 from "./Images/het8.png"
import hetimage10 from "./Images/het9.png"
import hetimage11 from "./Images/het10.png"
import hetimage12 from "./Images/het11.png"
import hetimage13 from "./Images/het12.png"
// import AnimatedImage14 from "./Images/het13.png"
import hetimage14 from "./Images/het14.png"
import hetimage15 from "./Images/het15.png"
import hetimage16 from "./Images/het16.png"
const ImageGallery = () => {


    const carousalImages = [
        {
            image: hetimage1
        },
        {
            image: hetimage2
        },
        {
            image: hetimage3
        },
        {
            image: hetimage4
        },
        {
            image: hetimage5
        },
        {
            image: hetimage6
        },
        {
            image: hetimage7
        },
        {
            image: hetimage8
        },
        {
            image: hetimage9
        },
        {
            image: hetimage10
        },
        {
            image: hetimage11
        },
        {
            image: hetimage12
        },
        {
            image: hetimage13
        },
        {
            image: hetimage14
        },
        {
            image: hetimage15
        },
        {
            image: hetimage16
        },

    ]
    return (
        <>
            <section>
                <div className="row container m-auto">
                    <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                        <div className="headingContainer">
                            <h1 className="sectionheading">Gallery</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="Container col-lg-9" id='SwiperSlider' >

                        <div style={{ height: "500px" }}>
                            <Swiper
                                // slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                // navigation={true}
                                speed={700}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                                style={{ height: "500px" }}

                            >
                                {carousalImages.map((item, index) => (
                                    <SwiperSlide key={index}>

                                        {/* <div style={{display:"flex",justifyContent:"center" }} id='ActiveContainer'> */}
                                        <img src={item.image} alt="hetgraphics" className='ImgPreview' />
                                        {/* <div className='borderContainer'>
                                            </div>
                                        </div> */}
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageGallery