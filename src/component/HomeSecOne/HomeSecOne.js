import React, { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
    onSnapshot,
    collection,
    limit,
    orderBy,
    query,
} from "firebase/firestore";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import db from "../../database/firebase";
import led from "../../assets/led.png";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
// import "../../component/arrivalSilder/arrival.css";
// import "../bestimesale/bestime.css";
// import "../flashsale/sale.css";
import "../../Changes.css"
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Slider from "react-slick";
import dumy from "../../assets/dumy.jpeg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const HomeSecOne = () => {


var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };



    return (
        <div className="containerAs1"  >
            <h1 style={{ color: 'white' }}></h1>
            <div className="silder"
                style={{
                    // width: "1200px",
                    
                }}
            >
                {/* <Slider {...settings}> */}
                <Card
                    style={{ margin: '2%', height: '20em', cursor: 'pointer', }}
                    // sx={{ maxWidth: 250 }}
                    className="cardSli-a"
                >
                        <CardMedia
                            component="img"
                            // height="200"
                            width='150'
                            image={dumy}
                            alt="green iguana"
                            // key={i}
                        />
                        <CardContent className="background">
                            <div className="artypo1">

                                <Typography variant="" sx={{ lineHeight: 0 }} gutterBottom component="span">
                                    Contact Us
                                </Typography>
                            </div>

                            <div className="disdiv">
                                    <div className="discountf1">
                                        <span className="disratef1" >
                                                <>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nibh vitae tortor lobortis mollis fringilla vitae lacus.
                                                </>
                                        </span>
                                    </div>
                                
                                    <div className="discount-f1">

                                    <span
                                        style={{ color: "red", fontWeight: "bold" }}
                                        className="textf"
                                    >
                                            <>
                                                Read More 
                                            </>
                                    </span>
                                </div>
                               
                            </div>
                        </CardContent>
                </Card>
                <Card
                    style={{ margin: '2%', height: '20em', cursor: 'pointer', }}
                    // sx={{ maxWidth: 250 }}
                    className="cardSli-a"
                >
                        <CardMedia
                            component="img"
                            // height="200"
                            width='150'
                            image={dumy}
                            alt="green iguana"
                            // key={i}
                        />
                        <CardContent className="background">
                            <div className="artypo1">

                                <Typography variant="" sx={{ lineHeight: 0 }} gutterBottom component="span">
                                    Career
                                </Typography>
                            </div>

                            <div className="disdiv">
                                    <div className="discountf1">
                                        <span className="disratef1" >
                                                <>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nibh vitae tortor lobortis mollis fringilla vitae lacus.
                                                </>
                                        </span>
                                    </div>
                                
                                    <div className="discount-f1">

                                    <span
                                        style={{ color: "red", fontWeight: "bold" }}
                                        className="textf"
                                    >
                                            <>
                                                Read More 
                                            </>
                                    </span>
                                </div>
                               
                            </div>
                        </CardContent>
                </Card>

                <Card
                    style={{ margin: '2%', height: '20em', cursor: 'pointer', }}
                    // sx={{ maxWidth: 250 }}
                    className="cardSli-a"
                >
                        <CardMedia
                            component="img"
                            // height="200"
                            width='150'
                            image={dumy}
                            alt="green iguana"
                            // key={i}
                        />
                        <CardContent className="background">
                            <div className="artypo1" >

                                <Typography variant="" sx={{ lineHeight: 0 }} gutterBottom component="span">
                                    Support
                                </Typography>
                            </div>

                            <div className="disdiv">
                                    <div className="discountf1">
                                        <span className="disratef1" >
                                                <>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nibh vitae tortor lobortis mollis fringilla vitae lacus.
                                                </>
                                        </span>
                                    </div>
                                
                                    <div className="discount-f1">

                                    <span
                                        style={{ color: "red", fontWeight: "bold" }}
                                        className="textf"
                                    >
                                            <>
                                                Read More 
                                            </>
                                    </span>
                                </div>
                               
                            </div>
                        </CardContent>
                </Card>


                <Card
                    style={{ margin: '2%', height: '20em', cursor: 'pointer', }}
                    // sx={{ maxWidth: 250 }}
                    className="cardSli-a"
                >
                        <CardMedia
                            component="img"
                            // height="200"
                            width='150'
                            image={dumy}
                            alt="green iguana"
                            // key={i}
                        />
                        <CardContent className="background">
                            <div className="artypo1">
                                <Typography variant="" sx={{ lineHeight: 0 }} gutterBottom component="span">
                                    About
                                </Typography>
                            </div>

                            <div className="disdiv">
                                    <div className="discountf1">
                                        <span className="disratef1" >
                                                <>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nibh vitae tortor lobortis mollis fringilla vitae lacus.
                                                </>
                                        </span>
                                    </div>
                                
                                    <div className="discount-f1">

                                    <span
                                        style={{ color: "red", fontWeight: "bold" }}
                                        className="textf"
                                    >
                                            <>
                                                Read More 
                                            </>
                                    </span>
                                </div>
                               
                            </div>
                        </CardContent>
                </Card>
                {/* </Slider> */}
            </div>
        </div>
    );
}
