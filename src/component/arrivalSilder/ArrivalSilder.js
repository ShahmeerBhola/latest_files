import React, { useState, useEffect } from "react";
// import {
//   onSnapshot,
//   collection,
//   limit,
//   orderBy,
//   query,
// } from "firebase/firestore";
// import db from "../../database/firebase";
import "../../component/flashsale/sale.css";
import "../../screens/BestSaleItem/BestSaleItem.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NewArrival({ fetchMore, isEmpty, isPLoad }) {
  // const [productD, setProductD] = useState([])

  const history = useHistory();
  const productD = useSelector((state) => state.product.initialState);
  // const [product, setProduct] = React.useState([]);
  // useEffect(async () => {
  //   const collectionRef = collection(db, "product");
  //   const q = query(
  //     collectionRef,
  //     orderBy("name", "asc")
  //     // limit(5)
  //   );

  //   const unsub = onSnapshot(q, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     setProduct(data);
  //   });

  //   return unsub;
  // }, []);


  // useEffect(() => {
  //   setProductD(productData)
  // }, [productData])

  // console.log('main data', productD)
  const dataPass = (data) => {
    // console.log('main data', data)
    history.push({
      pathname: '/ProductDetail',
      // search: '?query=abc',
      state: { detail: data }
    });
    // history.push("/ProductDetail", data)
  }
  return (
    <div className="prod-div-main">
      <h1 className="heading-f">Products</h1>
      <Divider variant="middle" />
      <div className="container-ff">
        {productD.length == 20 ?
          <div className="mainf-2">
            {productD
              // .slice(0, 24)
              // .sort(() => 0.5 - Math.random())
              // :
              // productD
              .map(data =>
                // <div className="cardf">
                //   <div className="postf">
                //     <img  src={data.image} />
                //     <span className="textf">{data.name}</span>
                //     <span className="textf">{data.spec}</span>
                //     <span
                //       style={{ color: "red", fontWeight: "bold" }}
                //       className="textf"
                //     >
                //       RS.{data.rate}
                //     </span>
                //     <div className="discountf">
                //       {/* <span className="disratef">RS.{data.flashData.rate}</span> */}
                //       {/* <span className="disperf">-{data.discountPercenage}%</span> */}
                //     </div>
                //   </div>
                // </div>

                //........................................................................
                data.quantity > 0 ?
                <div style={{
                  minWidth: 'calc(25% - 40px)',
                  textAlign: 'center',
                  maxWidth: 'calc(50% - 40px)'
                }}>
                  <Card
                    style={{
                      cursor: 'pointer',
                      backgroundColor: 'whitesmoke',
                      fontFamily: 'poppins',
                    }}
                    // lassName='Asilder'
                    sx={{ maxWidth: 160 }}
                    className="cardSli"
                  // onClick={() => dataPass(data)}
                  >
                    <Link to={`/ProductDetail/${data.name}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                      <>
                      {data.discountPrice?
                            <div style={{color:'white', backgroundColor: 'red',float:'right', width: '35%' }}>
                              {/* <h6 style={{ fontWeight: "bold", fontSize: "12px", color: 'white', textAlign: 'center' }}>Sale</h6> */}
                              SALE
                            </div>
                          :
                          null

                        }
                        <CardMedia
                          component="img"
                          height="200"
                          width='150'
                          image={data.image}
                          alt="green iguana"
                          className="cardSli-M"
                          style={{objectFit: 'contain'}}
                        />
                        

                          <div className="artypo">

                            {/* <Typography variant="body2" gutterBottom component="span"> */}
                              {data.name}
                            {/* </Typography> */}
                          </div>
                          {/* <div className="ari-spce-div">


<Typography variant="caption" color="text.secondary">
{data.spec}
</Typography>
</div> */}
                          <div className="disdiv">

                            {/* <span className="spec-ari">{data.spec}</span> */}
                            {/* <span className="rates">Rs: {data.flashData.rate}</span> */}
                            <div className="discount-f">

                              <span
                                style={{ color: "red", fontWeight: "bold", fontSize: 16 }}
                                className="textf"
                              >

                                {data.discountPrice ?
                                  <>
                                    Rs: {data.discountPrice}
                                  </>
                                  :
                                  <>
                                    Rs: {data.rate}
                                  </>
                                }

                              </span>
                            </div>
                            {data.discountPrice ?
                              <div className="discountf">
                                <span className="disratef" >
                                  {data.discountPrice ? <>
                                    RS.{data.rate}
                                  </>
                                    :
                                    <>
                                      RS.{data.discountPrice}
                                    </>
                                  }
                                </span>
                                <span className="disperf" >-{data.discountPercentage}%</span>
                              </div> : null
                            }
                            {/* <div className="discountf">
                    <span className="disratef">RS.{data.flashData.rate}</span>
                    <span className="disperf">-{data.discountPercenage}%</span>
                  </div> */}
                          </div>
                        {/* </CardActionArea> */}
                      </>
                    </Link>
                  </Card>
                </div>
                  :
                  null
                //               <>
                //                 <CardMedia
                //                   component="img"
                //                   height="200"
                //                   width='150'
                //                   image={data.image}
                //                   alt="green iguana"
                //                   className="cardSli-M"
                //                 />
                //                 <CardContent>
                //                   <div className="artypo">

                //                     <Typography variant="body2" gutterBottom component="span">
                //                       {data.name}
                //                     </Typography>
                //                   </div>
                //                   {/* <div className="ari-spce-div">


                //   <Typography variant="caption" color="text.secondary">
                //   {data.spec}
                //   </Typography>
                // </div> */}
                //                   <div className="disdiv">

                //                     {/* <span className="spec-ari">{data.spec}</span> */}
                //                     {/* <span className="rates">Rs: {data.flashData.rate}</span> */}
                //                     <div className="discount-f">

                //                       <span
                //                         style={{ color: "red", fontWeight: "bold" }}
                //                         className="textf"
                //                       >
                //                         {data.discountPrice ?
                //                           <>
                //                             Rs: {data.discountPrice}
                //                           </>
                //                           :
                //                           <>
                //                             Rs: {data.rate}
                //                           </>
                //                         }
                //                       </span>
                //                     </div>
                //                     {data.discountPrice ?
                //                       <div className="discountf">
                //                         <span className="disratef" >
                //                           {data.discountPrice ? <>
                //                             RS.{data.rate}
                //                           </>
                //                             :
                //                             <>
                //                               RS.{data.discountPrice}
                //                             </>
                //                           }
                //                         </span>
                //                         <span className="disperf" >-{data.discountPercentage}%</span>
                //                       </div> : null
                //                     }
                //                     {/* <div className="discountf">
                //                       <span className="disratef">RS.{data.flashData.rate}</span>
                //                       <span className="disperf">-{data.discountPercenage}%</span>
                //                     </div> */}
                //                   </div>
                //                 </CardContent>
                //               </>




              )}
          </div>
          :
          <div className="mainf-2">
            {productD
              // .slice(0, 20)
              // .sort(() => 0.5 - Math.random())
              // :
              // productD
              .map(data =>
                // <div className="cardf">
                //   <div className="postf">
                //     <img  src={data.image} />
                //     <span className="textf">{data.name}</span>
                //     <span className="textf">{data.spec}</span>
                //     <span
                //       style={{ color: "red", fontWeight: "bold" }}
                //       className="textf"
                //     >
                //       RS.{data.rate}
                //     </span>
                //     <div className="discountf">
                //       {/* <span className="disratef">RS.{data.flashData.rate}</span> */}
                //       {/* <span className="disperf">-{data.discountPercenage}%</span> */}
                //     </div>
                //   </div>
                // </div>

                //........................................................................
                data.quantity > 0 ?
                  <div style={{
                    minWidth: 'calc(25% - 40px)',
                    textAlign: 'center',
                    maxWidth: 'calc(50% - 40px)'
                  }}>
                    <Card
                      style={{
                        cursor: 'pointer',
                        backgroundColor: 'whitesmoke',
                        fontFamily: 'poppins',
                        // marginLeft: "2%",
                        // height: '20em',
                        // width: "30%"
                      }}
                      // lassName='Asilder'
                      className="cardSli"
                    // onClick={() => dataPass(data)}
                    >
                      <Link to={`/ProductDetail/${data.name}`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                        <>
                        {data.discountPrice?
                              <div style={{color:'white', backgroundColor: 'red',float:'right', width: '35%' }}>
                                {/* <h6 style={{ fontWeight: "bold", fontSize: "12px", color: 'white', textAlign: 'center' }}>Sale</h6> */}
                                SALE
                              </div>
                            :
                            null

                          }
                          <CardMedia
                            component="img"
                            height="200"
                            width='150'
                            image={data.image}
                            alt="green iguana"
                            className="cardSli-M"
                            style={{objectFit: 'contain'}}
                          />
                          
                            <div className="artypo">

                              {/* <Typography variant="body2" gutterBottom component="span"> */}
                                {data.name}
                              {/* </Typography> */}
                            </div>
                            {/* <div className="ari-spce-div">


  <Typography variant="caption" color="text.secondary">
  {data.spec}
  </Typography>
  </div> */}
                            <div className="disdiv">

                              {/* <span className="spec-ari">{data.spec}</span> */}
                              {/* <span className="rates">Rs: {data.flashData.rate}</span> */}
                              <div className="discount-f">

                                <span
                                  style={{ color: "red", fontWeight: "bold" , fontSize: 18}}
                                  className="textf"
                                >

                                  {data.discountPrice ?
                                    <>
                                      Rs: {data.discountPrice}
                                    </>
                                    :
                                    <>
                                      Rs: {data.rate}
                                    </>
                                  }

                                </span>
                              </div>
                              {data.discountPrice ?
                                <div className="discountf" >
                                  <span className="disratef" style={{ fontSize: 14 }} >
                                    {data.discountPrice ? <>
                                      RS.{data.rate}
                                    </>
                                      :
                                      <>
                                        RS.{data.discountPrice}
                                      </>
                                    }
                                  </span>
                                  <span className="disperf" style={{ fontSize: 14 }} >-{data.discountPercentage}%</span>

                                </div> : null
                              }
                              {/* <div className="discountf">
                  <span className="disratef">RS.{data.flashData.rate}</span>
                  <span className="disperf">-{data.discountPercenage}%</span>
                </div> */}
                            </div>
                          {/* </CardActionArea> */}
                        </>
                      </Link>
                    </Card>
                  </div>
                  :
                  null
                //               <>
                //                 <CardMedia
                //                   component="img"
                //                   height="200"
                //                   width='150'
                //                   image={data.image}
                //                   alt="green iguana"
                //                   className="cardSli-M"
                //                 />
                //                 <CardContent>
                //                   <div className="artypo">

                //                     <Typography variant="body2" gutterBottom component="span">
                //                       {data.name}
                //                     </Typography>
                //                   </div>
                //                   {/* <div className="ari-spce-div">


                //   <Typography variant="caption" color="text.secondary">
                //   {data.spec}
                //   </Typography>
                // </div> */}
                //                   <div className="disdiv">

                //                     {/* <span className="spec-ari">{data.spec}</span> */}
                //                     {/* <span className="rates">Rs: {data.flashData.rate}</span> */}
                //                     <div className="discount-f">

                //                       <span
                //                         style={{ color: "red", fontWeight: "bold" }}
                //                         className="textf"
                //                       >
                //                         {data.discountPrice ?
                //                           <>
                //                             Rs: {data.discountPrice}
                //                           </>
                //                           :
                //                           <>
                //                             Rs: {data.rate}
                //                           </>
                //                         }
                //                       </span>
                //                     </div>
                //                     {data.discountPrice ?
                //                       <div className="discountf">
                //                         <span className="disratef" >
                //                           {data.discountPrice ? <>
                //                             RS.{data.rate}
                //                           </>
                //                             :
                //                             <>
                //                               RS.{data.discountPrice}
                //                             </>
                //                           }
                //                         </span>
                //                         <span className="disperf" >-{data.discountPercentage}%</span>
                //                       </div> : null
                //                     }
                //                     {/* <div className="discountf">
                //                       <span className="disratef">RS.{data.flashData.rate}</span>
                //                       <span className="disperf">-{data.discountPercenage}%</span>
                //                     </div> */}
                //                   </div>
                //                 </CardContent>
                //               </>




              )}
          </div>
        }
      </div>
      <div>
        {isPLoad &&
          <CircularProgress style={{ margin: '3% 3%' }} disableShrink />
        }
        {!isEmpty && !isPLoad &&
          // <button onClick={fetchMore}>
          //   More
          // </button>
          <Stack
            // spacing={2}
            // direction="row"
            style={{ margin: '3% 5%' }}
          >
            <Button
              variant="contained"
              className="btnLog-btn"
              style={{
                width: "200px",
                alignSelf: 'center'

              //   background: 'linear-gradient(190deg, #fa7c30 30%, rgba(0, 0, 0, 0)30%)'
              }}

              onClick={fetchMore}>
              Load More
            </Button>
          </Stack>
        }
      </div>
    </div>
  );
}
