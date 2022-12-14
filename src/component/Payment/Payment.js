import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import CardContent from "@mui/material/CardContent";
// import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import "../../screens/AddToCart/AddToCart.css";
import "../../screens/Login/Login.css";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { useLocation,useHistory } from "react-router-dom";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  doc,
  updateDoc,
  increment,
  docRef,
  orderBy,
  deleteDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import db from "../../database/firebase";
import { useSelector } from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
  textAlign: "center",
};



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Payment() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  // const [cart, setCart] = useState([]);
  const location = useLocation();
  // const history = useHistory();
  const udata = useSelector((state) => state.user.initialState);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // useEffect(async () => {
  //   const collectionRef = collection(db, `${udata.id}`);
  //   const q = query(collectionRef);

  //   const unsub = onSnapshot(q, (snapshot) => {
  //     const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //     setCart(data);
  //   });

  //   return unsub;
  // }, []);

  // const [product, setProduct] = useState([]);

  // useEffect(async () => {
  //   const collectionRef = collection(db, "product");
  //   const q = query(collectionRef, orderBy("name", "desc")
  //     // , limit(40)
  //   );

  //   const unsub = onSnapshot(q, (snapshot) => {
  //     const prodID = snapshot.docs.map((doc) => ({ id: doc.id }));
  //     setProduct(proID);
  //     // console.log("data..>>", prodID)
  //   });

  //   return unsub;
  // }, []);


  const [test, setTest] = useState([]);
  const del = async () => {
    // const q = query(collection(db, `${udata.id}`));
    const q = query(collection(db, 'addToCart', `${udata.id}`, `${udata.id}`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  };
  // console.log(test);
  let newid = "";


  // console.log("test>>>", location.state.detail.map(data => { for (var i = 0; i < data.product.id.length; i++) { return data.product.id[i] } }))


  // console.log("test>>>", location.state.detail.map((data, ind) => { data.product.id.forEach((item) => item) }))
  console.log("test>>>", location.state)

  const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // const [flashQuantity, setFlashQuantity] = React.useState(0)
  // useEffect(() => {
  //   location.state.detail.map(data => { return setFlashQuantity(data.product.flashQuantity) })
  // }, [])
  // const [orderId, setOrderId] = useState(0)
  // console.log("ASDAS", location.state.detail.map(data => { return data.product.flashQuantity }))


  // console.log("location", location.state.detail.map(data => { return data.product.id }))
  const OrderSend = async () => {
    const generate = Date.now();
    for (let i = 0; i < location.state.detail.map(data => { return data }).length; i++) {
      const docRef = doc(db, "product", `${location.state.detail[i].product.id}`);
      // const batch = writeBatch(db);
      await updateDoc(docRef, {
        // batch.update(docRef, {
        quantity: increment(-`${location.state.detail[i].count}`),
      });
    }

    // setOrderId(Date.now());

    // setDoc(doc(db, "Order", `${location.state.user.id}`, `${location.state.user.id}`, `${location.state.detail[i].product.id}`), {
    // setDoc(doc(db, "Order", `${location.state.user.id}`, `${location.state.user.id}`, `${generate}`), {
    addDoc(collection(db, "Order"), {
      ...location.state,
      // detail: location.state.detail[i],
      detail: location.state.detail,
      date: new Date().toLocaleString(),
      orderId: generate,
      // }, { merge: true })
    })
      // .then(setOrderId(generate))
      .then(del())
      .then(setOpen(true))
      // .then(alert("acsascasc"))
      .then(setTimeout(() => {

        history.push({
          pathname: '/Thanks',
          // search: '?query=abc',
          state: generate
        })
      }, 2000))
    // }
    // .then(setTimeout(() => { history.push('/Thanks') }, 2000));

    // if(location.state.detail.filter(data =>
    //   data.product.id
    // )=== )
    // await location.state.detail.map(data => { return setFlashQuantity(data.product.flashQuantity) })
    // console.log("flashQuantity", flashQuantity)
    // if (flashQuantity) {

    //   const docRef = doc(db, "timesale", `${location.state.detail.map((data, i) => { for (var i = 0; i < data.product.id.length; i++) { return data.product.id } }
    //   )}`);
    //   await updateDoc(docRef, {
    //     flashQuantity: increment(- location.state.detail.map(data => { return data.count })),
    //   });
    //   // console.log("flash")
    // } else {
    //   // console.log("product")
    // const docRef = doc(db, "product", `${location.state.detail.map((data, i) => { for (var i = 0; i < data.product.id.length; i++) { return data.product.id } }
    // )}`);
    // await updateDoc(docRef, {
    //   quantity: increment(- location.state.detail.map(data => { return data.count })),
    // });
    // }
    // const payload = { quantity: increment(-1) };
    // updateDoc(docRef, payload);
  };


  // console.log("LOCA", location.state)

  // console.log("LOCA", location.state.detail.map(data =>
  //   data.product.id
  // ))


  return (
    <div className="divLog">
      <div className="divForm" style={{backgroundColor: '#fff'}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid className="grid-1" container spacing={2}>
            <Grid className="grid-grid" item xs={6} md={8}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Card sx={{ minWidth: 300 }}>
                  <CardContent>
                    <Box sx={{ width: "100%" }}>
                      {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                        > */}
                      {/* <Tab label="Card" {...a11yProps(0)} />
                          <Tab label="Bank" {...a11yProps(1)} /> */}
                      {/* <Tab label="COD" {...a11yProps(2)} /> */}
                      {/* </Tabs> */}
                      {/* </Box> */}
                      {/* <TabPanel value={value} index={0}>
                        Item One
                      </TabPanel> */}
                      {/* <TabPanel value={value} index={1}>
                        Item Two
                      </TabPanel> */}
                      {/* <TabPanel value={value} index={2}> */}
                      {/* <Typography>Check Out</Typography> */}
                      <h1 style={{ textAlign: "left", marginLeft: "1%" }}>Confirm Billing Address</h1>

                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "start", marginLeft: "2%", textAlign: 'start'}}>
                        <h5><span style={{fontSize: '1rem'}}>Name : </span> <span style={{ fontWeight: 'lighter', fontSize: "18px" }}>{location.state.address.fullName}</span></h5>
                        <h5><span style={{fontSize: '1rem'}}>Contact No : </span> <span style={{ fontWeight: 'lighter', fontSize: "18px" }}>{location.state.address.phone}</span></h5>
                        <h5><span style={{fontSize: '1rem'}}>City : </span> <span style={{ fontWeight: 'lighter', fontSize: "18px" }}>{location.state.address.city}</span></h5>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-start", marginLeft: "2%" }}>
                        <h5><span style={{fontSize: '1rem'}}>Address :</span> <span style={{ fontWeight: 'lighter', fontSize: "18px" }}>{location.state.address.address}</span></h5>
                      </div>


                      {/* </TabPanel> */}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid className="grid-grid" item xs={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                <Paper className="pper-1" elevation={2} style={{backgroundColor: 'whitesmoke'}}>
                  <div className="Cart-Main-1">
                    <div>
                      <h3>Billing Summary</h3>
                    </div>
                    <Divider />
                    {/* <div>
                    
                    <div className="rs">
                    <h6>Subtotal : </h6>
                    <h5></h5>
                    <h6>Rs : </h6>
                    </div>
                    <div className="rs">
                        <h6>Shipping Fee</h6>
                        <h6>Rs : 15</h6>
                      </div>
                    </div> */}
                    {/* <div className="frmBtn">
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "20ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div className="input-code">
                          <TextField
                            id="standard-textarea"
                            label="Enter Voucher Code"
                            // placeholder="Placeholder"
                            // multiline
                            variant="standard"
                          />
                        </div>
                      </Box>
                      <Stack spacing={2} direction="row">
                        <Button className="countbtn1" variant="contained">
                          Apply
                        </Button>
                      </Stack>
                    </div> */}
                    <div>
                      <div className="rs">
                        <h6 style={{fontSize: '1rem'}}>Total Amount</h6>
                        <h6 style={{fontSize: '1rem'}}>Rs : {location.state.total}</h6>
                      </div>
                    </div>
                    <div className="countbtn-2">
                      <Stack spacing={2} direction="row">
                        <Button
                          className="countbtn2"
                          onClick={() => OrderSend()}
                          variant="contained"
                          style={{ fontWeight: "bold" }}
                        >
                          PLACE ORDER
                        </Button>
                      </Stack>

                    </div>
                    <Stack spacing={2} sx={{ width: '100%' }}>

                      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                          Order Send Successfully!
                        </Alert>
                      </Snackbar>
                    </Stack>
                  </div>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div >
  );
}

export default Payment;
