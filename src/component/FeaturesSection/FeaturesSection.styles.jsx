import { styled, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

export const MainBody = styled(Box)(()=>({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '40px 0px',
    backgroundColor: 'whitesmoke',
    marginTop: '20px'
}))

export const FeatureItem = styled(Box)(()=>({
    flex: '1 1 25%',
    maxWidth: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',

    '& img': {
        width: '60px',
        height: '60px',
        objectFit: 'contain',
        marginBottom: '10px'
    }
}))

export const TitleText = styled(Typography)(()=>({
    fontSize: '1.2rem',
    color: '#606060'
}))