import React from 'react'
import { DetailsSection, FloatingImgLeft, FloatingImgRight, ImgSection, LeftSection, MainSection, ParaText, RightSection, SubTitleText, TitleText } from './PopularHighlight.styles';
import leftImg from '../../assets/1l.png';
import rightImg from '../../assets/1r.png';
import asset7Img from '../../assets/Asset_7.png';
import asset8Img from '../../assets/Asset_8.png';
import { Box } from '@mui/material';

const PopularHighlight = () => {
  return (
    <MainSection>
        <LeftSection>
            <ImgSection>
                <img src={rightImg} alt="Real Fruit Juice" />
            </ImgSection>
            <DetailsSection>
                <Box sx={{
                    display: 'flex',
                    textAlign: 'end',
                    alignItems: 'end',
                    justifyContent: 'end',
                }}>
                    <FloatingImgLeft src={asset7Img} alt={'lemon'} />
                    <TitleText><em>Popular</em></TitleText>
                    <FloatingImgRight src={asset8Img} alt={'strawberry'} />
                </Box>
                <SubTitleText style={{
                    textAlign: 'right',
                    marginRight: '100px',
                }}>Real Fruit Juice</SubTitleText>
                <ParaText style={{paddingRight: '16%'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore omnis blanditiis voluptates eligendi quia amet et itaque, molestiae totam sed eius? Nesciunt iusto nisi optio molestiae fugiat excepturi et?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore omnis blanditiis voluptates eligendi quia amet et 
                </ParaText>
            </DetailsSection>
        </LeftSection>

        <RightSection>
            <ImgSection>
                <img src={leftImg} alt="Real Fruit Juice" />
            </ImgSection>
            <DetailsSection>
                <TitleText><em>Popular</em></TitleText>
                <SubTitleText>Bulls Stimulant Drink</SubTitleText>
                <ParaText style={{paddingLeft: '16%'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore omnis blanditiis voluptates eligendi quia amet et itaque, molestiae totam sed eius? Nesciunt iusto nisi optio molestiae fugiat excepturi et?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo inventore omnis blanditiis voluptates eligendi quia amet et 
                </ParaText>
            </DetailsSection>
        </RightSection>
    </MainSection> 
  )
}

export default PopularHighlight;