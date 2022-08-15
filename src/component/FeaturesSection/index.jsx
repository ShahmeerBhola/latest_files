import React from 'react'
import { FeatureItem, MainBody, TitleText } from './FeaturesSection.styles'
import featureImg1 from '../../assets/features_icons/1.png'
import featureImg2 from '../../assets/features_icons/2.png'
import featureImg3 from '../../assets/features_icons/3.png'
import featureImg4 from '../../assets/features_icons/4.png'

const FeaturesSection = () => {
  return (
    <MainBody>
        <FeatureItem>
            <img src={featureImg4} alt="featureImg4" />
            <TitleText>Great Value</TitleText>
        </FeatureItem>
        <FeatureItem>
            <img src={featureImg1} alt="featureImg1" />
            <TitleText>Safe Payment</TitleText>
        </FeatureItem>
        <FeatureItem>
            <img src={featureImg3} alt="featureImg3" />
            <TitleText>Shop Confidence</TitleText>
        </FeatureItem>
        <FeatureItem>
            <img src={featureImg2} alt="featureImg2" />
            <TitleText>24/7 Help Center</TitleText>
        </FeatureItem>
    </MainBody>
  )
}

export default FeaturesSection