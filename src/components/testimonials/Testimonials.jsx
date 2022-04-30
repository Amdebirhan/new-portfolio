import React from 'react'
import AVATAR1 from '../../assets/avatar1.jpg'
import './testimonials.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: AVATAR1,
        name: 'Amdebirhan',
        review: 'cached modules 5.66 MiB (javascript) 2.92 MiB (asset) [cached] 153 modules  runtime modules 28.1 KiB 13 modules',
    },
    {
        avatar: AVATAR1,
        name: 'Amdebirhan',
        review: 'cached modules 5.66 MiB (javascript) 2.92 MiB (asset) [cached] 153 modules  runtime modules 28.1 KiB 13 modules',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonial">
            <h2>Review From Clients</h2>
            <h5>Testimonials</h5>
            <Swiper className="container testimonial__container"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avator">
                                <img src={avatar} alt="image" />
                            </div>
                            <div>
                                <h5 className="client__name">
                                    {name}
                                </h5>
                                <small className="client__review">{review}</small>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </section>
    )
}

export default Testimonials