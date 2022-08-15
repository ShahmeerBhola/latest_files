import React from "react";
import "../flashsale/sale.css";
import "../bestimesale/bestime.css";
import logo from "../../assets/footer-logo.png";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Facebook";
import { Twitter } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import './footer.css'
import FeaturesSection from "../FeaturesSection";
import { styled } from "@material-ui/core";
import twitterIcon from "../../assets/social_icons/twittericon.png";
import fbIcon from "../../assets/social_icons/fbicon.png";
import instaIcon from "../../assets/social_icons/instaicon.png";
import { Link } from "react-router-dom";

// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
export default function Footer() {
  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
    //       width: 128,
    //       height: 128,
    //     },
    //   }}
    // >
    //   <Paper elevation={0} >
    <div className="containerfoot">
      <FeaturesSection />
      <div className="container-foot" >
        <div className="container-foot-div"
        // style={{ flexDirection: "column", display: "flex", justifyContent: 'center', margin: '0% 10% 0% -8%' }}
        >
          <img width='100%' src={logo} alt="logo" style={{ width: '250px' }} />
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" color="primary">
              <img src={fbIcon} width="30px" height="30px" />
            </IconButton>
            <IconButton aria-label="delete" color="info">
              <img src={twitterIcon} width="30px" height="30px" />
            </IconButton>
            <IconButton color="secondary" aria-label="add to shopping cart">
              <img src={instaIcon} width="30px" height="30px" />
            </IconButton>
          </Stack>
        </div>
        <div className='flink'>
          <h2>Quick links</h2>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Policy"
            /> */}
            Policy
          </ListItemButton>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Term & Condition"
            /> */}
            Term & Condition
          </ListItemButton>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Shipping"
            /> */}
            Shipping
          </ListItemButton>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Return"
            /> */}
            Return
          </ListItemButton>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="FAQs"
            /> */}
            FAQs
          </ListItemButton>

        </div>
        <div className='flink'>
          <h2>Company</h2>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="About Us"
            /> */}
            About Us
          </ListItemButton>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Contact"
            /> */}
            Contact
          </ListItemButton>
        </div>
        <div className='flink'>
          <h2>Business</h2>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Checkout"
            /> */}
            <Link to="/CheckOut">
            Checkout
            </Link>
          </ListItemButton>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="My account"
            /> */}
            <Link to="/Login">
            My account
            </Link>
          </ListItemButton>
          <ListItemButton>
            {/* <ListItemText
              primaryTypographyProps={{
                width: "100%",
                lineHeight: "10px",
              }}
              primary="Shop"
            /> */}
            <Link to="/">
              Shop
            </Link>
          </ListItemButton>
        </div>
      </div>
      <Divider />
      <h4 style={{
        background: "red",
        margin: "0px",
        paddingTop: "10px",
        paddingBottom: "10px"
      }}>©Copyright Popular 2022 . All Rights Reserved</h4>
      {/* <h4>© 2021 DeskWorkSolution. All Rights Reserved</h4> */}
    </div>
    //     {/* </Paper> */ }
    // {/* <Paper /> */ }
    // {/* <Paper elevation={3} /> */ }
    // {/* </Box> */ }
  );
}
