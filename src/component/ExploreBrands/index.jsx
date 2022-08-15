import React from 'react'
import { TitleText } from './ExploreBrands.styles'
import Slider from "react-slick";
import brandImg1 from "../../assets/brand_logos/1.png";
import brandImg2 from "../../assets/brand_logos/2.png";
import brandImg3 from "../../assets/brand_logos/3.png";
import brandImg4 from "../../assets/brand_logos/4.png";
import brandImg5 from "../../assets/brand_logos/5.png";
import brandImg6 from "../../assets/brand_logos/6.png";
import brandImg7 from "../../assets/brand_logos/7.png";
import brandImg8 from "../../assets/brand_logos/8.png";
import brandImg9 from "../../assets/brand_logos/9.png";
import brandImg10 from "../../assets/brand_logos/10.png";
import brandImg11 from "../../assets/brand_logos/11.png";
import brandImg12 from "../../assets/brand_logos/12.png";
import brandImg13 from "../../assets/brand_logos/13.png";
import brandImg14 from "../../assets/brand_logos/14.png";
import brandImg15 from "../../assets/brand_logos/15.png";

// Crousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreBrands = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    };

    return (
        <section style={{margin: '50px'}}>
            <TitleText>
                <span>Explore</span> a selection of our brands
            </TitleText>
            <Slider {...settings}>
                <div>
                    <img src={brandImg1} alt="brandImg1" width="100%" />
                </div>
                <div>
                    <img src={brandImg2} alt="brandImg2" width="100%" />
                </div>
                <div>
                    <img src={brandImg3} alt="brandImg3" width="100%" />
                </div>
                <div>
                    <img src={brandImg4} alt="brandImg4" width="100%" />
                </div>
                <div>
                    <img src={brandImg5} alt="brandImg5" width="100%" />
                </div>
                <div>
                    <img src={brandImg6} alt="brandImg6" width="100%" />
                </div>
                <div>
                    <img src={brandImg7} alt="brandImg7" width="100%" />
                </div>
                <div>
                    <img src={brandImg8} alt="brandImg8" width="100%" />
                </div>
                <div>
                    <img src={brandImg9} alt="brandImg9" width="100%" />
                </div>
                <div>
                    <img src={brandImg10} alt="brandImg10" width="100%" />
                </div>
                <div>
                    <img src={brandImg11} alt="brandImg11" width="100%" />
                </div>
                <div>
                    <img src={brandImg12} alt="brandImg12" width="100%" />
                </div>
                <div>
                    <img src={brandImg13} alt="brandImg13" width="100%" />
                </div>
                <div>
                    <img src={brandImg14} alt="brandImg14" width="100%" />
                </div>
                <div>
                    <img src={brandImg15} alt="brandImg15" width="100%" />
                </div>
            </Slider>
        </section>
    )
}

export default ExploreBrands