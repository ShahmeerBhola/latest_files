import { styled, Typography } from "@material-ui/core";

export const TitleText = styled(Typography)(()=>({
    fontSize: '2.5rem',
    fontWeight: 'bolder',
    textAlign: 'center',
    margin: '10px 0px',
    '& span': {
        color: 'red'
    }
}))