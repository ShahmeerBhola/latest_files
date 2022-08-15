import { Box, styled, Typography } from "@material-ui/core";

export const MainSection = styled(Box)(()=>({
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
}))

export const LeftSection = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px 0px',
    flexWrap: 'nowrap !important',
    
    [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap !important',
        '& div': {
            flexBasis: '100%'
        }
    },
}))

export const RightSection = styled(LeftSection)(({theme})=>({
    flexDirection: 'row-reverse',
}))

export const ImgSection = styled(Box)(()=>({
    flex: '1 1 60%',
    maxWidth: '1000px',
    '& img': {
        width: '100%',
        objectFit: 'cover',
    }
}))

export const DetailsSection = styled(Box)(({theme})=>({
    flex: '1 1 40%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 40px',
    maxWidth: '700px',
    [theme.breakpoints.down('sm')]: {
        margin: 'auto'
    }
}))

export const TitleText = styled(Typography)(()=>({
    color: 'red',
    fontSize: '2.2rem',
    fontWeight: 'bolder',
}))

export const SubTitleText = styled(Typography)(()=>({
    fontSize: '1.6rem',
    fontWeight: '600'
}))

export const ParaText = styled(Typography)(({theme})=>({
    color: '#999999',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
        padding: '0px !important'
    }
}))

export const FloatingImgLeft = styled('img')(({theme})=>({
    objectFit: 'contain',
    width: '130px',
    margin: '0px 40px 0px 0px',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))

export const FloatingImgRight = styled('img')(({theme})=>({
    objectFit: 'contain',
    width: '80px',
    margin: '0px 0px 0px 50px',
    [theme.breakpoints.down('sm')]: {
        display: 'none'   
    }
}))