import React, { useState } from "react";
import Account from "@mui/icons-material/AccountCircle";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, Popover, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from '@mui/material/Collapse';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import Container from "react-bootstrap/Container";
import { Link,useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ShopByCategory } from "../ShopByCategory/ShopByCategory";
import { useLocation } from "react-router-dom";
import "./MainNavBar.css";

const useStyles = makeStyles({
    root: {
        backgroundColor: '#000 !important',
        maxWidth: "100vw",
        ["@media (max-width:700px)"]: {
            left: '0px'
        },
    },
    navheight: {
        height: "63px",
        ["@media (max-width:700px)"]: {
            height: "130px",
        }
    },
    btn: {
        backgroundcolor: "white !imoprtant",
    },
    search: {
        // border: "1px solid #e7e3e3",
        borderRadius: '50px',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        overflow: 'hidden',
        ["@media (max-width:700px)"]: {
            display: "none!important",
        },
        display: 'flex'
    },
    whiteIcon: {
        margin: '0px !important',
        '& svg': {
            fill: '#fff !important'
        }
    },
    searchA: {
        ["@media (max-width:700px)"]: {
            display: "none!important",
        },
    },
    searchIcon: {
        // position: "absolute",
        display: "flex",
        justifyContent: "center",
        // borderRadius: "0 !important",
        // border: "1px solid black !important",
        background: "red !important",
        color: "white !important",
        borderRadius: "50% !important",
        marginRight: "2.5% !important",
        // border: '1px solid black !important',
    },

    searchMobile: {
        display: "none !important",
        width: 'auto !important',
        maxWidth: "100% !important",
        borderRadius: '50px',
        margin: '10px',
        padding: '10px 10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '40px !important',
        ["@media (max-width:700px)"]: {
            display: "flex !important",
        },
    },
    SearchiconMobile: {

    },
    Searchicon: {
        borderRadius: "0 !important",
        background: "red !important",
        color: "white !important",
    },
    nonLinks: {
        color: "black",
        textDecoration: "none",
        cursor: "pointer",
    },
    imglogo: {
        height: "50px",
        marginLeft: "100px",
        ["@media (max-width:700px)"]: {
            margin: "10px auto",
            maxWidth: "50%",
        },
    },
    flexNavbar: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: 'center !important',
        // border: "1px solid ",
        marginLeft: "-40px",
        ["@media (max-width:700px)"]: {
            flexWrap: 'wrap',
            justifyContent: "space-between",
            marginLeft: "0px",
        },
    },
    title: {
        display: 'block',
        minWidth: 'max-content',
        marginLeft: '20px !important',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'flex',
        //     color: 'white',
        // },
    },
    listItems: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // flex: 1,
    },
    listItem: {
        margin: '0px 15px',
    },
    listItemsActive: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    listItemLink: {
        textDecoration: 'none',
        color: 'white',
    },
    linkText: {
        color:"white",
        fontWeight: 'bold !important',
        whiteSpace: 'nowrap',
        margin: '0px !important',
        width: 'auto !important',
    },
    cat_menu: {
        display: 'flex',
        alignItems: 'center',
        ["@media (max-width:700px)"]: {
            display: 'none'
        },
    }
});

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "100%",
    height: "40px",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    // position: 'absolute',
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid black",
    // color: "red",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    // color: "inherit",
    // width: "85%",
    // border: "10px solid black",
    ["@media (max-width:910px)"]: {
        // width: "75%",
    },
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // border: "1px solid black",
        // color: "yellow",
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing()})`,
        transition: theme.transitions.create("width"),
        // width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "50ch",
        },
        // ["@media (max-width:700px)"]: {
        //   paddingLeft: 0,
        //   width: "150px",
        // },
    },
}));


export default function MainNavBar({ setItemSearch, cartCount }) {

    const [openList, setOpenList] = React.useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setOpenList(!openList);
    };

    const history = useHistory();

    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    const list = () => {
        const links = [
            "/",
            "/newArrival",
            "/bestSale",
        ];
        return (
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem style={{ backgroundColor: 'red' }} onClick={() => history.push("/Login")}>
                        <IconButton className={classes.searchIcon}>
                            <Account />
                        </IconButton>
                        <ListItemText style={{ color: 'white' }} primary="Profile"/>
                    </ListItem>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >


                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="Shop By Category" />
                            {openList ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openList} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            
                                <ListItemText>
                                    <ShopByCategory />
                                </ListItemText>
                                {/* </ListItemButton> */}
                            </List>
                        </Collapse>
                    </List>
                    {[
                        "Home",
                        "New Arrivals",
                        "Best Sale Item",
                        // 'Shop By Category',
                        // "Flash Sale",
                        // "About",
                        // "Contact",
                    ].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText>
                                <Link to={links[index]} >
                                    {text}
                                </Link>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
    };

    const [anchorE, setAnchorE] = React.useState(null);

    const getColor = (curr) => {
        if (location.pathname === curr) {
          return 'underline'
        }
    }

    const closeOnMobileMenu = () => {
        setNavOpen(false);
    }    

    return (
        <Box className={classes.navheight}>
            <AppBar color="default" className={classes.root} position="fixed">
                <Container className="container">
                    <Toolbar className={classes.flexNavbar} style={{
                        justifyContent: 'space-between'
                    }}>
                        <MenuIcon id="none" style={{fill: '#fff'}} onClick={toggleDrawer(true)} />
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {list()}
                        </Drawer>
                        <img src={logo} onClick={() => history.push('/')} style={{ cursor: 'pointer' }} className={classes.imglogo} alt="logo" />

                        <Box className={classes.cat_menu}>
                            <List
                                className={`${navOpen ? `${classes.listItemsActive}` : `${classes.listItems}`}`}
                                style={{
                                    width: 'fit-content !important',
                                    margin: '0px !important',
                                }}
                            >
                                <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                                    <Link to="/" style={{ textDecoration: getColor('/'),color:"white" }}>
                                    <Typography sx={{color:"white"}} >Home</Typography>
                                    </Link>
                                </ListItemText>
                                {/* <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                                    <Link to="/newArrival" style={{ textDecoration: getColor('/newArrival') }}>
                                    <Typography >New Arrival's</Typography>
                                    </Link>
                                </ListItemText> */}
                                <ListItemText className={classes.listItem} onClick={closeOnMobileMenu}>
                                    <Link to="/bestSale" style={{ textDecoration: getColor('/bestSale') }}>
                                    <Typography >Best Sale Item</Typography>
                                    </Link>
                                </ListItemText>
                            </List>

                            <Typography className={classes.title}>
                                <PopupState variant="popover" popupId="demo-popup-popover">
                                {(popupState) => (
                                    <div>
                                    <Button className="NavBtn" variant="contained" {...bindTrigger(popupState)}>
                                        Shop By Category
                                    </Button>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        // horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                        vertical: 'top',
                                        // horizontal: 'center',
                                        }}
                                    >
                                        <Typography sx={{ p: 1 }}><ShopByCategory /></Typography>
                                    </Popover>
                                    </div>
                                )}
                                </PopupState>
                            </Typography>
                        </Box>


                        <Search
                            className={classes.search}
                        // onClick={() => setSearchModel(true)}
                        >
                            <StyledInputBase
                                placeholder="Search in "
                                inputProps={{ "aria-label": "search" }}
                                style={{ width: "350px", color: '#fff' }}
                                onChange={(e) => setItemSearch(e.target.value)}
                            />
                            <IconButton onClick={() => history.push('/search')}
                                className={classes.Searchicon}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Search>
                        <div style={{ display: "flex", alignItems: 'center' }}>
                            <IconButton
                                className={classes.whiteIcon}
                                aria-label="add to shopping cart"
                                onClick={() => history.push("/AddToCart")}
                            >
                                <AddShoppingCartIcon />
                                <span style={{ fontSize: "16px", fontWeight: "bold" }}>{cartCount.length === 0 ? "" : cartCount.length}</span>
                            </IconButton>
                            <IconButton
                                aria-label="add to shopping cart"
                                className={`${classes.searchA} ${classes.whiteIcon}`}
                                onClick={() => history.push("/Login")}
                            >
                                <PermIdentityIcon sx={{ height: "30px", width: "30px" }} />
                                {/* <Account /> */}
                            </IconButton>
                        </div>
                    </Toolbar>
                    <Search
                        className={classes.searchMobile}
                    // onClick={() => setSearchModel(true)}
                    >
                        <StyledInputBase
                            placeholder="Search in "
                            inputProps={{ "aria-label": "search" }}
                            style={{ width: '100% !important', padding: '10x 10px !important', fontSize: '18px', color: '#fff'}}
                            onChange={(e) => setItemSearch(e.target.value)}
                        />
                        <IconButton onClick={() => history.push('/search')}
                            className={classes.SearchiconMobile}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Search>
                </Container>
            </AppBar>
        </Box>
    );
}
