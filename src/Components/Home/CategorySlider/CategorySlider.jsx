import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './CategorySlider.scss'

const categories = [
    { title: "Medical", image: "/imgs/medical.jpg", description: "Dentistry ,Physical Therapy ,Pharmacy ,Medicine ," },
    { title: "Medical", image: "/imgs/medical.jpg", description: "Dentistry ,Physical Therapy ,Pharmacy ,Medicine ," },
    { title: "Medical", image: "/imgs/medical.jpg", description: "Dentistry ,Physical Therapy ,Pharmacy ,Medicine ," },
    { title: "Medical", image: "/imgs/medical.jpg", description: "Dentistry ,Physical Therapy ,Pharmacy ,Medicine ," },
    { title: "Medical", image: "/imgs/medical.jpg", description: "Dentistry ,Physical Therapy ,Pharmacy ,Medicine ," },
    { title: "Medical", image: "/imgs/medical.jpg", description: "Dentistry ,Physical Therapy ,Pharmacy ,Medicine ," },
];

const CategorySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 3000,
        customPaging: (i) => (
            <div className="custom-dot"></div>
        ),
        dotsClass: "slick-dots custom-dots",
        responsive: [
            {   
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };

    return <>
        <div className="container-fluid mt-5 position-relative" style={{ top: '-80px' }}>
            <Slider {...settings}>
                {categories.map((category, index) => (
                    <div key={index} className="px-2">
                        <div className="card category-card">
                            <img src={category.image} className="card-img-top" alt={category.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{category.title}</h5>
                                <p className="card-text">{category.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </>;
};

export default CategorySlider;
