import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
// import slide5 from "../../assets/slide5.jpg"
import slide4 from "../../assets/slide4.jpg"
// import slide6 from "../../assets/slide6.jpg"
import slide3 from "../../assets/slide3.jpg"
import 'react-slideshow-image/dist/styles.css'
// import slider1 from '../../assets/slider1.jpg'
// import { ShopByCategory } from "../ShopByCategory/ShopByCategory";

import './silder.css'
import "../../Changes.css"

import {
  onSnapshot,
  collection,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import db from "../../database/firebase";
import { height } from "@mui/system";

const Silder = () => {

  // const slideImages = [
  //   // <img src={slide1} />,
  //   // <img src={slide2} />,
  //   // <img src={slide3} />,
  //   // "../../assets/slide1.jpg",
  //   // 'import slide2 from "../../assets/slide2.jpg"',
  //   // 'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  // ];

  const [banner, setBanner] = React.useState([]);

  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "webBanner");
      const q = query(
        collectionRef,
        // where("quantity", '>', 0),
        // orderBy("quantity"),
        // orderBy('name', 'desc'),
        // where("subcat", '==', 'BestSaleItem'),
      );
  
      const unsub = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBanner(data);
      });
      return unsub;
    })()
  }, []);

  // console.log("bbbb", banner)
  return (
    <Slide
      arrows={false}
      // auto={true}
      defaultIndex={0}
    >
      {banner.map((data, i) => (
        <div
          key={data.image}
          style={{
            backgroundImage: `url(${data.image})`,
            width: '100%',
            height: '28vw',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center'
          }}
        >
        </div>
      ))}
    </Slide>
  )
};

export default Silder;