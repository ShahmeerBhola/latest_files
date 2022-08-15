import React, { useEffect, useState } from "react";
import Silder from "../../component/Silder/Silder";
import "./Home.css";
// import FlashSale from "../FlashSale/FlashSale"
import ArrivalSilder from "../../component/arrivalSilder/ArrivalSilder";
// import Footer from "../../component/footer/Footer";
// import { FlashSlider } from "../../component/flashsale/FlashSlider";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircularProgress from '@mui/material/CircularProgress';
import {
  collection,
  limit, onSnapshot, query, startAfter
} from "firebase/firestore";
import db from "../../database/firebase";


import { useHistory } from "react-router-dom";

import ExploreBrands from "../../component/ExploreBrands";
import { HomeSecTwo } from "../../component/HomeSecTwo/HomeSecTwo";
import PopularHighlight from "../../component/PopularHighlight";
import FeaturesSection from "../../component/FeaturesSection";
import Slider from "react-slick";



const crouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  // autoplay: true,
  responsive: [
      {
          breakpoint: 750,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 500,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
  ]
};


export default function Home({ itemSearch, isLoad, isCatLoad, fetchMore, isEmpty, isPLoad }) {
  const history = useHistory()
  const [categoryD, setCategoryD] = React.useState([]);

  // const categoryD = useSelector((state) => state.category.initialState);

  const [lastFDocCat, setLastFDocCat] = useState([]);
  const [isFEmptyCat, setIsFEmptyCat] = useState(false)
  const [isFLoadCat, setIsFLoadCat] = useState(false)

  useEffect(async () => {
    const collectionRef = collection(db, "MainCategory");
    const q = query(
      collectionRef,
      limit(7)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const lastFDocCat = snapshot.docs[snapshot.docs.length - 1];
      setCategoryD(data);
      setLastFDocCat(lastFDocCat);
    });

    return unsub;
  }, []);


  // const flashD = useSelector((state) => state.flashSale.initialState);
  const fetchMoreCat = () => {
    setIsFLoadCat(true)

    const collectionRef = collection(db, "MainCategory");
    const q = query(
      collectionRef,
      startAfter(lastFDocCat),
      limit(7)
    );

    const unsub = onSnapshot(q, (snapshot) => {
      const isCollectionEmpty = snapshot.size === 0;
      if (!isCollectionEmpty) {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const lastFDocCat = snapshot.docs[snapshot.docs.length - 1];
        setCategoryD(categoryD => [...categoryD, ...data]);
        setLastFDocCat(lastFDocCat);
      }
      else {
        setIsFEmptyCat(true);
      }
      setIsFLoadCat(false)

    });

    return unsub;

  }



  const submit = (data) => {
    // console.log('main data', data)
    history.push({
      pathname: '/Categories/'+data.category,
      // search: '?query=abc',
      state: { detail: data }
    });
    // history.push("/ProductDetail", data)
  }

  // console.log("<><><><><", itemSearch)
  return (
    <>
      <Silder />
      <main id="main-container">
        <div className="main">
          <div className="justify-content-md-center" style={{width: '100%'}}>
            {/* <img className="estore" src={estore} alt="estore" /> */}
            <h1 className="heading-cat" >Categories</h1>
            <div className="category" style={{marginBottom: '50px'}}>
              {/* <div className="row1"> */}
              <Slider {...crouselSettings}>
                {categoryD.map((data, ind) => (
                  <div className="card1"
                    key={ind} onClick={() => submit(data)} style={{ cursor: 'pointer' }} >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                      <img width="70%" src={data.image} alt="image" />
                      <div>
                        <div className="name1">{data.category}</div>
                        <div className="subname">{data.description}</div>
                        {/* <div className="subname">Men's Watches</div>
                        <div className="subname">Women's Watches</div> */}
                        {/* <Button
                          className="btn"
                          variant="contained"
                        // onClick={() => {
                        //   console.log("ok");
                        // }}
                        >
                          Browse
                        </Button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>



              {/* <Button
                // onClick={() => {
                //   history.push("/bestSale");
                // }}
                className="btns"
                id="btns"
              >
                Shop more
              </Button> */}
            </div>
            {/* <div>
              {isFLoadCat &&

                <div style={{
                  textAlign: 'center !important',
                  // marginLeft: '50%' 
                }}>

                  <CircularProgress disableShrink />
                </div>


              }
              {!isFEmptyCat && !isFLoadCat &&
                // <button
                //   style={{
                //     textAlign: 'center !important',
                //     // marginLeft: '50%' 
                //   }}
                //   onClick={fetchMoreCat}>
                //   More
                // </button>
                <KeyboardArrowDownIcon
                  style={{
                    textAlign: 'center !important',
                    marginTop: '2%',
                    cursor: 'pointer',
                  }}

                  sx={{ height: "50px", width: "50px" }}
                  onClick={fetchMoreCat}
                />
              }
            </div> */}
            {/* ......................................................... */}
            {/* <FlashSaleHome /> */}
            {/* ......................................................... */}
            {/* <FlashSale /> */}

            {/* ......................................................... */}
            {/* <FlashSlider /> */}
            {/* <BesTimeSale isLoad={isLoad} isCatLoad={isCatLoad} itemSearch={itemSearch} /> */}
            {/* <RecommendedItems /> */}
            <ArrivalSilder isPLoad={isPLoad} isEmpty={isEmpty} fetchMore={fetchMore} />
            <PopularHighlight />
            <ExploreBrands />
            {/* <HomeSecOne /> */}
            {/* <HomeSecTwo /> */}

            {/* <Footer /> */}
          </div>
        </div>
      </main>
    </>
  );
}
